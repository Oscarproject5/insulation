import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, Star, Shield, Clock, Thermometer, CheckCircle, Users, Award, Zap, Home, Sparkles, FileText, MessageCircle, X, ArrowRight } from 'lucide-react'
import './App.css'

// Import images
import sprayFoamHeroImage from './assets/spray-foam-installation-hero.jpg'
import professionalTeamImage from './assets/professional-team.jpg'
import blownInsulationNewImage from './assets/blown-insulation-new.jpg'
import atticInsulationNewImage from './assets/attic-insulation-new.jpg'
import professionalTeamSprayImage from './assets/professional-team-spray.jpg'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: '',
    message: ''
  })


  const [headerState, setHeaderState] = useState({
    currentTemp: 89,
    realFeelsLike: 97,
    energySavings: 0,
    isExtremeHeat: false,
    timeOfDay: 'afternoon',
    todaysHigh: 89,
    isNight: false
  })

  // Mobile-specific state
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [showLeadWidget, setShowLeadWidget] = useState(false)
  const [currentSwipeCard, setCurrentSwipeCard] = useState(0)
  const [formStep, setFormStep] = useState(1)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const swipeRef = useRef(null)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Mobile-specific scroll behaviors
      if (isMobile) {
        // Auto-update active tab based on scroll
        if (scrollY < windowHeight * 0.5) {
          setActiveTab('home')
        } else if (scrollY < windowHeight * 1.5) {
          setActiveTab('services')
        } else if (scrollY < windowHeight * 2.5) {
          setActiveTab('about')
        } else {
          setActiveTab('quote')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  useEffect(() => {
    // Fetch real weather data for McAllen, TX (RGV area)
    const fetchWeatherData = async () => {
      try {
        // Using OpenWeatherMap API with environment variables
        const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
        const CITY = import.meta.env.VITE_WEATHER_CITY || 'McAllen,TX,US'
        
        if (!API_KEY) {
          throw new Error('Weather API key not found. Please check your .env file.')
        }
        
        // Fetch real weather data
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=imperial`
        )
        const data = await response.json()
        const currentTemp = Math.round(data.main.temp)
        const realFeelsLike = Math.round(data.main.feels_like)
        const todaysHigh = Math.round(data.main.temp_max)
        
        // Determine if it's night (after 8 PM or before 6 AM)
        const hour = new Date().getHours()
        const isNight = hour >= 20 || hour < 6
        
        // Use today's high temp at night, current temp during day
        const displayTemp = isNight ? todaysHigh : currentTemp
        const displayFeelsLike = isNight ? todaysHigh + 8 : realFeelsLike
        
        const isExtremeHeat = displayTemp > 95
        
        // Calculate realistic energy savings based on temperature
        // Average AC cost in RGV: ~$200-400/month in summer
        // Poor insulation can increase by 40%
        const baseMonthlyACCost = displayTemp > 85 ? 250 : 150
        const poorInsulationMultiplier = 1.4
        const wellInsulatedCost = baseMonthlyACCost
        const poorlyInsulatedCost = baseMonthlyACCost * poorInsulationMultiplier
        const energySavings = Math.round(poorlyInsulatedCost - wellInsulatedCost)
        
        let timeOfDay = 'morning'
        if (hour >= 12 && hour < 17) timeOfDay = 'afternoon'
        else if (hour >= 17 && hour < 20) timeOfDay = 'evening'
        else if (hour >= 20 || hour < 6) timeOfDay = 'night'
        
        setHeaderState({
          currentTemp: displayTemp,
          realFeelsLike: displayFeelsLike,
          energySavings: Math.max(energySavings, 0),
          isExtremeHeat,
          timeOfDay,
          todaysHigh,
          isNight
        })
      } catch (error) {
        console.error('Weather fetch error:', error)
        // Fallback to default values
        const hour = new Date().getHours()
        const isNight = hour >= 20 || hour < 6
        setHeaderState({
          currentTemp: 93,
          realFeelsLike: 101,
          energySavings: 263,
          isExtremeHeat: false,
          timeOfDay: isNight ? 'night' : 'afternoon',
          todaysHigh: 93,
          isNight
        })
      }
    }

    fetchWeatherData()
    const updateInterval = parseInt(import.meta.env.VITE_WEATHER_UPDATE_INTERVAL) || 300000
    const interval = setInterval(fetchWeatherData, updateInterval)
    return () => clearInterval(interval)
  }, [])

  // Mobile lead widget timer - DISABLED
  useEffect(() => {
    if (isMobile) {
      // Popup disabled
      // const timer = setTimeout(() => {
      //   setShowLeadWidget(true)
      // }, 15000) // Show after 15 seconds on mobile
      
      // return () => clearTimeout(timer)
    }
  }, [isMobile])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send data to a backend
    alert('¡Gracias! We will contact you within 24 hours for your free estimate.')
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      serviceType: '',
      message: ''
    })
  }

  // Mobile-specific handlers
  const handleTabClick = (tab) => {
    setActiveTab(tab)
    const element = document.getElementById(tab === 'home' ? 'hero' : tab)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSwipe = (direction) => {
    const totalCards = 3
    if (direction === 'left' && currentSwipeCard < totalCards - 1) {
      setCurrentSwipeCard(currentSwipeCard + 1)
    } else if (direction === 'right' && currentSwipeCard > 0) {
      setCurrentSwipeCard(currentSwipeCard - 1)
    }
  }

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    if (isLeftSwipe) handleSwipe('left')
    if (isRightSwipe) handleSwipe('right')
  }

  const handleMobileFormStep = (step) => {
    setFormStep(step)
  }

  const MobileLeadWidget = () => (
    <>
      {showLeadWidget && (
        <>
          <div className="mobile-overlay show" onClick={() => setShowLeadWidget(false)} />
          <div className="mobile-lead-widget show">
            <button 
              className="mobile-lead-widget-close"
              onClick={() => setShowLeadWidget(false)}
            >
              <X className="w-4 h-4" />
            </button>
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold mb-2">🎉 Special Offer!</h3>
              <p className="text-sm text-gray-600">Get 20% off your first service</p>
            </div>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              className="mb-3"
            />
            <Button 
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white"
              onClick={() => {
                setShowLeadWidget(false)
                alert('Thank you! We\'ll text you the discount code.')
              }}
            >
              Get My Discount
            </Button>
          </div>
        </>
      )}
    </>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Integrated Navigation */}
      <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-lg">
        {/* Main Header */}
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg shadow-md">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">RGV Insulation Experts</h1>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Licensed & Insured</span>
                  <span className="text-xs">•</span>
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold">4.9</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phone Number - THE HERO */}
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">Call for FREE Quote</div>
              <a 
                href="tel:9565555555" 
                className="text-3xl lg:text-4xl font-black text-orange-600 hover:text-orange-700 block"
              >
                (956) 555-FOAM
              </a>
            </div>
          </div>
        </div>
        
        {/* Navigation Bar */}
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 lg:px-8">
            <nav className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-8">
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-700 hover:text-orange-600 font-medium text-sm transition-colors cursor-pointer"
                >
                  Our Services
                </a>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-700 hover:text-orange-600 font-medium text-sm transition-colors hidden sm:inline-block cursor-pointer"
                >
                  Why Choose Us
                </a>
                <a 
                  href="#areas" 
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-700 hover:text-orange-600 font-medium text-sm transition-colors cursor-pointer"
                >
                  Service Areas
                </a>
              </div>
              <div className="flex items-center gap-4">
                {!isMobile && (
                  <div className="hidden lg:flex items-center gap-2 text-sm text-gray-600">
                    <Thermometer className="h-4 w-4" />
                    <span className="font-semibold">{headerState.currentTemp}°F</span>
                    <span className="text-xs">•</span>
                    <span className="text-xs">{headerState.isNight ? "Today's High" : "Current Temp"}</span>
                  </div>
                )}
                <a 
                  href="#quote" 
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Get Free Quote →
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[120px]"></div>

      {/* Hero Section */}
      <section id="hero" className="hero-modern grain-overlay relative flex items-center">
        {!isMobile && (
          <>
            <div className="geometric-shape w-96 h-96 -top-20 -right-20" />
            <div className="geometric-shape w-64 h-64 bottom-20 left-10" />
          </>
        )}
        
        {/* Blueprint House Background */}
        <div className="blueprint-house">
          <svg viewBox="0 0 600 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* House Outline */}
            <g stroke="#334155" strokeWidth="2.5" fill="none" opacity="0.7">
              {/* Roof */}
              <path d="M 100 200 L 300 50 L 500 200" />
              <line x1="100" y1="200" x2="100" y2="220" />
              <line x1="500" y1="200" x2="500" y2="220" />
              
              {/* Walls */}
              <rect x="100" y="220" width="400" height="180" />
              
              {/* Foundation */}
              <rect x="90" y="400" width="420" height="30" fill="#cbd5e1" opacity="0.4" />
              
              {/* Insulation Layer */}
              <rect x="110" y="230" width="380" height="160" strokeDasharray="5,5" stroke="#10B981" strokeWidth="4" opacity="0.8">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
              </rect>
              
              {/* Windows */}
              <rect x="150" y="270" width="60" height="80" />
              <rect x="390" y="270" width="60" height="80" />
              
              {/* Door */}
              <rect x="270" y="310" width="60" height="90" />
              
              {/* Attic insulation */}
              <path d="M 120 195 L 300 60 L 482 195" strokeDasharray="5,5" stroke="#10B981" strokeWidth="3" opacity="0.8" />
            </g>
            
            {/* Heat arrows outside */}
            <g fill="none">
              {/* Left side heat arrows */}
              <g stroke="#ff4500" strokeWidth="3" fill="#ff4500">
                <line x1="20" y1="150" x2="85" y2="150">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
                </line>
                <polygon points="80,143 92,150 80,157">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
                </polygon>
                
                <line x1="20" y1="280" x2="85" y2="280">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
                </line>
                <polygon points="80,273 92,280 80,287">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
                </polygon>
                
                <line x1="20" y1="350" x2="85" y2="350">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="1.6s" />
                </line>
                <polygon points="80,343 92,350 80,357">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="1.6s" />
                </polygon>
              </g>
              
              {/* Right side heat arrows */}
              <g stroke="#ff4500" strokeWidth="3" fill="#ff4500">
                <line x1="580" y1="150" x2="515" y2="150">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="0.4s" />
                </line>
                <polygon points="520,143 508,150 520,157">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="0.4s" />
                </polygon>
                
                <line x1="580" y1="280" x2="515" y2="280">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
                </line>
                <polygon points="520,273 508,280 520,287">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
                </polygon>
                
                <line x1="580" y1="350" x2="515" y2="350">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="2s" />
                </line>
                <polygon points="520,343 508,350 520,357">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="2s" />
                </polygon>
              </g>
              
              {/* Heat wave lines */}
              <g stroke="#ff4500" strokeWidth="2" opacity="0.8">
                <path d="M 10 130 Q 20 120, 30 130 T 50 130">
                  <animate attributeName="d" 
                    values="M 10 130 Q 20 120, 30 130 T 50 130;M 10 130 Q 20 140, 30 130 T 50 130;M 10 130 Q 20 120, 30 130 T 50 130" 
                    dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M 10 170 Q 20 180, 30 170 T 50 170">
                  <animate attributeName="d" 
                    values="M 10 170 Q 20 180, 30 170 T 50 170;M 10 170 Q 20 160, 30 170 T 50 170;M 10 170 Q 20 180, 30 170 T 50 170" 
                    dur="2s" repeatCount="indefinite" begin="0.5s" />
                </path>
                <path d="M 10 300 Q 20 290, 30 300 T 50 300">
                  <animate attributeName="d" 
                    values="M 10 300 Q 20 290, 30 300 T 50 300;M 10 300 Q 20 310, 30 300 T 50 300;M 10 300 Q 20 290, 30 300 T 50 300" 
                    dur="2s" repeatCount="indefinite" begin="1s" />
                </path>
                
                <path d="M 550 130 Q 560 120, 570 130 T 590 130">
                  <animate attributeName="d" 
                    values="M 550 130 Q 560 120, 570 130 T 590 130;M 550 130 Q 560 140, 570 130 T 590 130;M 550 130 Q 560 120, 570 130 T 590 130" 
                    dur="2s" repeatCount="indefinite" begin="0.3s" />
                </path>
                <path d="M 550 170 Q 560 180, 570 170 T 590 170">
                  <animate attributeName="d" 
                    values="M 550 170 Q 560 180, 570 170 T 590 170;M 550 170 Q 560 160, 570 170 T 590 170;M 550 170 Q 560 180, 570 170 T 590 170" 
                    dur="2s" repeatCount="indefinite" begin="0.8s" />
                </path>
                <path d="M 550 300 Q 560 290, 570 300 T 590 300">
                  <animate attributeName="d" 
                    values="M 550 300 Q 560 290, 570 300 T 590 300;M 550 300 Q 560 310, 570 300 T 590 300;M 550 300 Q 560 290, 570 300 T 590 300" 
                    dur="2s" repeatCount="indefinite" begin="1.3s" />
                </path>
              </g>
            </g>
            
            {/* Cool air inside */}
            <g fill="#10B981" opacity="0.5">
              <circle cx="300" cy="300" r="3">
                <animate attributeName="cy" values="300;280;300" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="320" r="3">
                <animate attributeName="cy" values="320;300;320" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="310" r="3">
                <animate attributeName="cy" values="310;290;310" dur="4s" repeatCount="indefinite" />
              </circle>
            </g>
            
            {/* Text labels */}
            <text x="300" y="130" textAnchor="middle" fill="#475569" fontSize="16" fontWeight="600" opacity="0.8">Insulated Attic</text>
            <text x="40" y="140" fill="#ff6b35" fontSize="14" fontWeight="600" opacity="0.8">Hot Air</text>
            <text x="300" y="350" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="600" opacity="0.8">Cool Interior</text>
          </svg>
        </div>
        
        {/* Animated heat/cold particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={`heat-${i}`}
              className="heat-particle"
              style={{
                left: `${5 + (i * 20)}%`,
                bottom: '20%',
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
          {[...Array(4)].map((_, i) => (
            <div
              key={`cold-${i}`}
              className="cold-particle"
              style={{
                left: `${25 + (i * 15)}%`,
                top: '50%',
                animationDelay: `${i * 1}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 py-11 lg:py-15 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center h-full">
            <div className="space-y-6 fade-up mobile-animate max-w-4xl">
              {isMobile ? (
                <>
                  {/* Mobile-specific hero content */}
                  <div className="mobile-glass-card mb-4 p-3 inline-flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold">RGV's #1 Insulation Service</span>
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 leading-tight">
                    Stop Wasting Money on
                    <span className="mobile-gradient-text"> High AC Bills</span>
                  </h2>
                  <div className="mobile-glass-card">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs text-gray-600">{headerState.isNight ? "Today's Temperature" : "Current Temperature"}</p>
                        <p className="text-2xl font-black text-orange-600">{headerState.currentTemp}°F</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600">You're losing</p>
                        <p className="text-2xl font-black text-red-600">${headerState.energySavings}/mo</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-gray-700">💡 Smart Tip</p>
                      <p className="text-xs text-gray-600 mt-1">Proper insulation can cut cooling costs by 40% in the Valley heat</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white mobile-interactive"
                      onClick={() => setShowLeadWidget(true)}
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      Get Instant Quote
                    </Button>
                    <a 
                      href="tel:9565555555" 
                      className="btn-primary w-full mobile-ripple text-center block"
                    >
                      <Phone className="inline mr-2 h-4 w-4" />
                      Call (956) 555-FOAM
                    </a>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[...Array(4)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                            style={{
                              background: `linear-gradient(135deg, ${
                                ['#FF6B35', '#10B981', '#3B82F6', '#8B5CF6'][i]
                              } 0%, ${
                                ['#FF5722', '#059669', '#2563EB', '#7C3AED'][i]
                              } 100%)`
                            }}
                          >
                            <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">
                              {['JM', 'RS', 'AL', 'MG'][i]}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-600">
                        <span className="font-bold">47 neighbors</span> saved this month
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Desktop hero content */}
                  <Badge className="badge-accent inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Proudly Serving the RGV
                  </Badge>
                  <h2 className="text-5xl lg:text-[3.5rem] xl:text-[4.2rem] font-black text-gray-900 leading-[0.95]">
                    Beat the South Texas Heat with
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Professional Insulation</span>
                  </h2>
                  <p className="text-lg lg:text-[1.4rem] text-gray-600 leading-relaxed max-w-3xl">
                    From McAllen to Brownsville, we help Valley families stay cool and save money with expert insulation services. 
                    Combat those 100°F summers and high energy bills!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="btn-primary mobile-ripple px-8 py-4 text-base font-semibold shadow-xl flex items-center justify-center">
                      <Phone className="mr-2 h-4 w-4" />
                      Call or Text (956) 555-FOAM
                    </Button>
                    <Button size="lg" className="btn-outline mobile-touch px-7 py-4 text-lg font-bold">
                      Learn More →
                    </Button>
                  </div>
                  <div className="flex items-center gap-6 pt-4">
                    <div className="neumorphic-inset flex items-center gap-3 px-6 py-3">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <span className="font-bold text-gray-900">4.9/5 Rating</span>
                    </div>
                    <div className="text-gray-600">
                      <span className="text-3xl font-black text-gray-900 mobile-counter">500+</span> Happy Families
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="relative lg:block hidden flex-1">
              <div className="modern-image relative w-full max-w-[570px] h-[475px] ml-auto">
                <img 
                  src={sprayFoamHeroImage} 
                  alt="Professional spray foam insulation installation in Rio Grande Valley home"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="glass absolute bottom-6 right-6 p-4 max-w-[280px]">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl shadow-lg">
                    <Thermometer className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-3xl text-gray-900">40%</p>
                    <p className="text-gray-600 font-semibold text-sm">Energy Savings</p>
                    <p className="text-xs text-green-600 font-bold mt-1 flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Proven Results
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-modern bg-gradient-to-b from-white to-gray-50 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 fade-up">
            {isMobile ? (
              <>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  Our Services
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Swipe to explore our insulation solutions
                </p>
              </>
            ) : (
              <>
                <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                  Complete Insulation Services for the
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Valley</span>
                </h3>
                <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Whether you're in Harlingen, Edinburg, or anywhere in between, we provide comprehensive insulation solutions 
                  designed for South Texas climate challenges.
                </p>
              </>
            )}
          </div>

          {isMobile ? (
            <>
              {/* Mobile Swipeable Cards */}
              <div 
                className="mobile-swipe-container"
                ref={swipeRef}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div 
                  className="mobile-swipe-track"
                  style={{ transform: `translateX(-${currentSwipeCard * 296}px)` }}
                >
                  {/* Mobile Service Card 1 */}
                  <div className="mobile-swipe-card mobile-snap-item">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-2xl">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-green-100 text-green-800 text-xs">Popular</Badge>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Spray Foam Insulation</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Best for extreme RGV heat. Creates air-tight seal, blocks humidity.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-gray-700">40% energy savings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-gray-700">Lifetime warranty</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm">
                      Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Mobile Service Card 2 */}
                  <div className="mobile-swipe-card mobile-snap-item">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-2xl">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 text-xs">Best Value</Badge>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Blown-In Insulation</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Cost-effective attic solution. Quick installation, great results.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-gray-700">Same-day install</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-gray-700">Eco-friendly</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Mobile Service Card 3 */}
                  <div className="mobile-swipe-card mobile-snap-item">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-2xl">
                        <Thermometer className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-orange-100 text-orange-800 text-xs">Complete</Badge>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Attic Solutions</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Full attic upgrade with radiant barriers and ventilation.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-gray-700">Energy audit included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-gray-700">Heat reduction</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-sm">
                      Schedule Audit <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Swipe Indicators */}
              <div className="mobile-swipe-indicators">
                {[0, 1, 2].map((index) => (
                  <div 
                    key={index}
                    className={`mobile-swipe-dot ${currentSwipeCard === index ? 'active' : ''}`}
                    onClick={() => setCurrentSwipeCard(index)}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Desktop Grid Layout */}
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8">
                <Card className="modern-card mobile-card-stack group">
              <div className="overflow-hidden rounded-t-[24px]">
                <img 
                  src={professionalTeamSprayImage} 
                  alt="Professional team installing spray foam insulation"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-14 h-14 rounded-2xl flex items-center justify-center">
                    <Zap className="h-7 w-7 text-gray-800" />
                  </div>
                  <Badge className="badge-modern bg-green-100 text-green-800">Most Popular</Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Spray Foam Insulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4 text-gray-600 leading-relaxed">
                  The gold standard for RGV homes. Creates an air-tight seal that blocks hot, humid air and reduces energy costs by up to 40%.
                </CardDescription>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Superior air sealing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Moisture barrier protection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Lifetime warranty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="modern-card mobile-card-stack group">
              <div className="overflow-hidden rounded-t-[24px]">
                <img 
                  src={blownInsulationNewImage} 
                  alt="Blown-in insulation service"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-14 h-14 rounded-2xl flex items-center justify-center">
                    <Shield className="h-7 w-7 text-gray-800" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Blown-In Insulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4 text-gray-600 leading-relaxed">
                  Cost-effective solution perfect for attics. Fills every gap and crevice to keep your home comfortable year-round.
                </CardDescription>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Quick installation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Eco-friendly materials</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Great value for money</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="modern-card mobile-card-stack group">
              <div className="overflow-hidden rounded-t-[24px]">
                <img 
                  src={atticInsulationNewImage} 
                  alt="Attic insulation service"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-14 h-14 rounded-2xl flex items-center justify-center">
                    <Thermometer className="h-7 w-7 text-orange-600" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Attic Insulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4 text-gray-600 leading-relaxed">
                  Specialized attic solutions for Valley homes. Prevents heat transfer and reduces strain on your AC system.
                </CardDescription>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Radiant barrier installation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Ventilation improvement</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Energy audit included</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Mobile Work Showcase */}
      {isMobile && (
        <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-gray-900 mb-2">Our Work</h3>
              <p className="text-sm text-gray-600">See the difference we make</p>
            </div>
            
            {/* Ultra-thin work gallery */}
            <div className="space-y-3">
              {/* Work Card 1 */}
              <div className="mobile-glass-card p-0 overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={professionalTeamSprayImage} 
                      alt="Spray foam installation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-sm">Spray Foam Installation</h4>
                      <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">Today</Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Complete attic insulation - McAllen home</p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-green-600 font-semibold">-40% cooling costs</span>
                      <span className="text-gray-500">2,400 sq ft</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Card 2 */}
              <div className="mobile-glass-card p-0 overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={blownInsulationNewImage} 
                      alt="Blown-in insulation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-sm">Blown-In Insulation</h4>
                      <Badge className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5">Yesterday</Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Attic upgrade - Edinburg residence</p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-green-600 font-semibold">R-38 rating</span>
                      <span className="text-gray-500">Same day install</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Card 3 */}
              <div className="mobile-glass-card p-0 overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={atticInsulationNewImage} 
                      alt="Attic insulation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-sm">Complete Attic Solution</h4>
                      <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5">This week</Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Full attic renovation - Harlingen home</p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-green-600 font-semibold">Energy Star certified</span>
                      <span className="text-gray-500">3,100 sq ft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="mobile-glass-card text-center py-3">
                <p className="text-xl font-black text-gray-900">127</p>
                <p className="text-xs text-gray-600">Homes This Month</p>
              </div>
              <div className="mobile-glass-card text-center py-3">
                <p className="text-xl font-black text-green-600">$187</p>
                <p className="text-xs text-gray-600">Avg Monthly Savings</p>
              </div>
              <div className="mobile-glass-card text-center py-3">
                <p className="text-xl font-black text-orange-600">4.9★</p>
                <p className="text-xs text-gray-600">Customer Rating</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 text-center">
              <Button 
                className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-2 text-sm mobile-interactive"
                onClick={() => handleTabClick('quote')}
              >
                Schedule Your Free Inspection →
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Why Valley Families Choose Us
              </h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2.5 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-gray-800" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Local RGV Experts</h4>
                    <p className="text-sm text-gray-600">
                      Born and raised in the Valley. We understand the unique challenges of South Texas climate - 
                      from hurricane season humidity to scorching summer heat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2.5 rounded-lg flex-shrink-0">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Family Owned & Operated</h4>
                    <p className="text-sm text-gray-600">
                      Third-generation Valley business treating every home like our own. 
                      We're your neighbors, not a corporate chain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2.5 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Same-Day Service</h4>
                    <p className="text-sm text-gray-600">
                      Emergency insulation repairs and most installations completed the same day. 
                      We know you can't wait when your AC is working overtime.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2.5 rounded-lg flex-shrink-0">
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Lifetime Warranty</h4>
                    <p className="text-sm text-gray-600">
                      We stand behind our work with comprehensive warranties. Your investment is protected 
                      for as long as you own your home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={professionalTeamImage} 
                alt="Professional insulation team serving Rio Grande Valley"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-xl font-bold text-gray-800">500+</div>
                  <div className="text-xs text-gray-600">Homes Served</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-xl font-bold text-green-600">15+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <div className="text-xl font-bold text-orange-600">4.9★</div>
                  <div className="text-xs text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-16 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-8">Proudly Serving the Entire Rio Grande Valley</h3>
          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            <div className="bg-blue-600/20 backdrop-blur border border-blue-500/30 p-5 rounded-xl hover:bg-blue-600/30 transition-all">
              <h4 className="font-semibold mb-2 text-base text-white">Hidalgo County</h4>
              <p className="text-sm text-blue-100/80">McAllen, Edinburg, Mission, Pharr, Weslaco</p>
            </div>
            <div className="bg-blue-600/20 backdrop-blur border border-blue-500/30 p-5 rounded-xl hover:bg-blue-600/30 transition-all">
              <h4 className="font-semibold mb-2 text-base text-white">Cameron County</h4>
              <p className="text-sm text-blue-100/80">Brownsville, Harlingen, San Benito, Los Fresnos</p>
            </div>
            <div className="bg-blue-600/20 backdrop-blur border border-blue-500/30 p-5 rounded-xl hover:bg-blue-600/30 transition-all">
              <h4 className="font-semibold mb-2 text-base text-white">Willacy County</h4>
              <p className="text-sm text-blue-100/80">Raymondville, Lyford, Sebastian</p>
            </div>
            <div className="bg-blue-600/20 backdrop-blur border border-blue-500/30 p-5 rounded-xl hover:bg-blue-600/30 transition-all">
              <h4 className="font-semibold mb-2 text-base text-white">Starr County</h4>
              <p className="text-sm text-blue-100/80">Rio Grande City, Roma, La Grulla</p>
            </div>
          </div>
          <p className="mt-8 text-gray-300 text-base">
            Can't find your city? Call us! We serve the entire Valley and surrounding areas.
          </p>
        </div>
      </section>

      {/* Lead Generation Form */}
      <section id="quote" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Get Your FREE Estimate Today
              </h3>
              <p className="text-lg text-gray-600">
                Join hundreds of Valley families saving money on energy bills. 
                No obligation, no pressure - just honest advice from local experts.
              </p>
            </div>

            <Card className="shadow-xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-8">
                <CardTitle className="text-2xl lg:text-3xl font-bold">Free In-Home Consultation</CardTitle>
                <CardDescription className="text-gray-300 text-base mt-2">
                  Usually $150 value - FREE for a limited time
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 bg-white">
                {isMobile ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Mobile Progressive Form */}
                    <div className="mobile-form-progress">
                      <div className={`mobile-form-progress-item ${formStep >= 1 ? 'active' : ''}`} />
                      <div className={`mobile-form-progress-item ${formStep >= 2 ? 'active' : ''}`} />
                      <div className={`mobile-form-progress-item ${formStep >= 3 ? 'active' : ''}`} />
                    </div>
                    
                    {formStep === 1 && (
                      <div className="mobile-form-step">
                        <h4 className="text-lg font-bold mb-4">Step 1: Your Information</h4>
                        <div className="space-y-4">
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                            required
                            className="w-full"
                          />
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            required
                            className="w-full"
                          />
                          <Button 
                            type="button"
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white"
                            onClick={() => handleMobileFormStep(2)}
                          >
                            Next Step <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {formStep === 2 && (
                      <div className="mobile-form-step">
                        <h4 className="text-lg font-bold mb-4">Step 2: Service Details</h4>
                        <div className="space-y-4">
                          <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                          >
                            <option value="">Select Service</option>
                            <option value="spray-foam">Spray Foam</option>
                            <option value="blown-in">Blown-In</option>
                            <option value="attic">Attic Insulation</option>
                          </select>
                          <Input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Property Address"
                            className="w-full"
                          />
                          <div className="flex gap-3">
                            <Button 
                              type="button"
                              variant="outline"
                              className="flex-1"
                              onClick={() => handleMobileFormStep(1)}
                            >
                              Back
                            </Button>
                            <Button 
                              type="button"
                              className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white"
                              onClick={() => handleMobileFormStep(3)}
                            >
                              Next
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {formStep === 3 && (
                      <div className="mobile-form-step">
                        <h4 className="text-lg font-bold mb-4">Step 3: Additional Info</h4>
                        <div className="space-y-4">
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us about your project"
                            rows={3}
                            className="w-full"
                          />
                          <div className="mobile-success-check">
                            <svg viewBox="0 0 52 52">
                              <circle cx="26" cy="26" r="25" fill="none" />
                              <path d="M14 27l7 7 16-16" fill="none" />
                            </svg>
                          </div>
                          <div className="flex gap-3">
                            <Button 
                              type="button"
                              variant="outline"
                              className="flex-1"
                              onClick={() => handleMobileFormStep(2)}
                            >
                              Back
                            </Button>
                            <Button 
                              type="submit"
                              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white"
                            >
                              Get Quote
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(956) 555-0123"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="spray-foam">Spray Foam Insulation</option>
                        <option value="blown-in">Blown-In Insulation</option>
                        <option value="attic">Attic Insulation</option>
                        <option value="energy-audit">Energy Audit</option>
                        <option value="not-sure">Not Sure - Need Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Property Address
                    </label>
                    <Input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Street address, City, TX"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about your project (optional)
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="High energy bills, hot rooms, old insulation, new construction, etc."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get My FREE Estimate
                    </Button>
                    <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                      By submitting this form, you agree to receive text messages and calls about our services. 
                      Message and data rates may apply. You can opt out at any time.
                    </p>
                  </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile-Only Components */}
      {isMobile && (
        <>
          {/* Mobile Bottom Navigation */}
          <div className="mobile-tab-bar">
            <div 
              className={`mobile-tab-item ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => handleTabClick('home')}
            >
              <Home />
              <span>Home</span>
            </div>
            <div 
              className={`mobile-tab-item ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => handleTabClick('services')}
            >
              <Sparkles />
              <span>Services</span>
            </div>
            <div 
              className={`mobile-tab-item ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => handleTabClick('about')}
            >
              <FileText />
              <span>About</span>
            </div>
            <div 
              className={`mobile-tab-item ${activeTab === 'quote' ? 'active' : ''}`}
              onClick={() => handleTabClick('quote')}
            >
              <MessageCircle />
              <span>Quote</span>
            </div>
          </div>

          {/* Mobile FAB Container - REMOVED */}
          {/* Mobile Smart CTA - REMOVED */}

          {/* Mobile Lead Widget */}
          <MobileLeadWidget />

          {/* Mobile Floating Phone Button */}
          <a 
            href="tel:9565555555" 
            className="mobile-float-phone lg:hidden mobile-touch"
            aria-label="Call us now"
          >
            <Phone />
          </a>
        </>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gray-900 text-white p-2 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">RGV Insulation Experts</h4>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Your trusted local insulation contractor serving the Rio Grande Valley since 2010.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-400">4.9/5 Rating</span>
              </div>
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3">Services</h5>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li>Spray Foam Insulation</li>
                <li>Blown-In Insulation</li>
                <li>Attic Insulation</li>
                <li>Energy Audits</li>
                <li>Radiant Barriers</li>
                <li>Commercial Insulation</li>
              </ul>
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3">Service Areas</h5>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li>McAllen & Edinburg</li>
                <li>Brownsville & Harlingen</li>
                <li>Mission & Pharr</li>
                <li>Weslaco & Mercedes</li>
                <li>Rio Grande City</li>
                <li>All of RGV</li>
              </ul>
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3">Contact Info</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(956) 555-FOAM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@rgvinsulation.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Serving all of Rio Grande Valley, TX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Sat: 7AM-7PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-xs text-gray-400">
            <p>&copy; 2024 RGV Insulation Experts. All rights reserved. Licensed & Insured in Texas.</p>
            <p className="mt-1">Emergency service • Free estimates • Lifetime warranty</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

