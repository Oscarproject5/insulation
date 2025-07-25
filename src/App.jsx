import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, Star, Shield, Clock, Thermometer, DollarSign, CheckCircle, Users, Award, Zap } from 'lucide-react'
import './App.css'

// Import images
import sprayFoamImage from './assets/spray-foam-installation.jpg'
import sprayFoamHeroImage from './assets/spray-foam-installation-hero.jpg'
import atticInsulationImage from './assets/attic-insulation.jpg'
import professionalTeamImage from './assets/professional-team.jpg'
import blownInsulationImage from './assets/blown-insulation.jpg'
import insulationTypesImage from './assets/insulation-types.png'
import insulationTypesNewImage from './assets/insulation-types-new.png'
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

  const [thermalNav, setThermalNav] = useState({
    temperature: 75,
    activeSection: 'hero',
    smartTip: 'Most users check Services first'
  })

  const [headerState, setHeaderState] = useState({
    currentTemp: 89,
    realFeelsLike: 97,
    energySavings: 0,
    isExtremeHeat: false,
    timeOfDay: 'afternoon'
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Dynamic temperature based on scroll position
      const scrollPercent = scrollY / (documentHeight - windowHeight)
      const temperature = Math.round(75 + (scrollPercent * 25)) // 75°F to 100°F
      
      // Smart tips based on scroll position
      let smartTip = 'Most users check Services first'
      let activeSection = 'hero'
      
      if (scrollY > windowHeight * 0.3) {
        smartTip = '🔥 Hot sections ahead!'
        activeSection = 'services'
      }
      if (scrollY > windowHeight * 1.2) {
        smartTip = '📊 Compare our solutions'
        activeSection = 'about'
      }
      if (scrollY > windowHeight * 2) {
        smartTip = '🌟 Ready for a quote?'
        activeSection = 'quote'
      }
      
      setThermalNav({ temperature, activeSection, smartTip })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Simulate real-time header updates
    const updateHeader = () => {
      const hour = new Date().getHours()
      const baseTemp = 85 + Math.random() * 15 // 85-100°F simulation
      const currentTemp = Math.round(baseTemp + (hour > 12 && hour < 18 ? 5 : 0))
      const realFeelsLike = Math.round(currentTemp + 8)
      const isExtremeHeat = currentTemp > 95
      
      // Calculate energy savings based on temperature
      const energySavings = Math.round((currentTemp - 72) * 12.5) // $12.50 per degree over 72°F
      
      let timeOfDay = 'morning'
      if (hour >= 12 && hour < 17) timeOfDay = 'afternoon'
      else if (hour >= 17) timeOfDay = 'evening'
      
      setHeaderState({
        currentTemp,
        realFeelsLike,
        energySavings: Math.max(energySavings, 0),
        isExtremeHeat,
        timeOfDay
      })
    }

    updateHeader()
    const interval = setInterval(updateHeader, 10000) // Update every 10 seconds
    return () => clearInterval(interval)
  }, [])

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

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Integrated Navigation */}
      <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
        {/* Main Header */}
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">RGV Insulation Experts</h1>
                <p className="text-sm text-gray-600">Licensed & Insured • 500+ Happy Customers</p>
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
              <a 
                href="#quote" 
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg cursor-pointer"
              >
                Get Free Quote →
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[120px]"></div>

      {/* Hero Section */}
      <section className="hero-modern grain-overlay relative flex items-center">
        <div className="geometric-shape w-96 h-96 -top-20 -right-20" />
        <div className="geometric-shape w-64 h-64 bottom-20 left-10" />
        
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
              <path d="M 110 195 L 300 60 L 490 195" strokeDasharray="5,5" stroke="#10B981" strokeWidth="3" opacity="0.8" />
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
            <div className="space-y-6 fade-up max-w-4xl">
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
                <Button size="lg" className="btn-primary px-8 py-4 text-base font-semibold shadow-xl flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Call or Text (956) 555-FOAM
                </Button>
                <Button size="lg" className="btn-outline px-7 py-4 text-lg font-bold">
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
                  <span className="text-3xl font-black text-gray-900">500+</span> Happy Families
                </div>
              </div>
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
            <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Complete Insulation Services for the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Valley</span>
            </h3>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're in Harlingen, Edinburg, or anywhere in between, we provide comprehensive insulation solutions 
              designed for South Texas climate challenges.
            </p>
          </div>

          <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8">
            <Card className="modern-card group">
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

            <Card className="modern-card group">
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

            <Card className="modern-card group">
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
        </div>
      </section>

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
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Financing Available</h4>
                    <p className="text-sm text-gray-600">
                      $0 down, 0% interest financing options. Plus, many of our services qualify for 
                      federal tax credits and utility rebates.
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
            <p className="mt-1">Financing available • Free estimates • Lifetime warranty</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

