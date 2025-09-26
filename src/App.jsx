import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, Star, Shield, Clock, Thermometer, CheckCircle, Users, Award, Zap, Home, Sparkles, FileText, MessageCircle, X, ArrowRight, Loader2, ChevronDown, ChevronUp, Camera, Quote } from 'lucide-react'
import './App.css'
import { sanitizeInput, sanitizeAddress, sanitizePhone, sanitizeEmail, validateFormSecurity, formRateLimiter, getFingerprint, isSubmittedTooQuickly } from './utils/security.js'
import { trackFormConversion, trackPhoneConversion } from './utils/conversionTracking.js'
import FloatingMenu from './components/common/FloatingMenu.jsx'
import PageHeader from './components/layout/PageHeader.jsx'
import GallerySection from './components/common/GallerySection.jsx'

// Import images
import sprayFoamHeroImage from './assets/spray-foam-installation-hero.jpg'
import professionalTeamImage from './assets/professional-team.jpg'
import blownInsulationNewImage from './assets/blown-insulation-new.jpg'
import atticInsulationNewImage from './assets/attic-insulation-new.jpg'
import professionalTeamSprayImage from './assets/professional-team-spray.jpg'
import palmTreesRgv from './assets/palm-trees-rgv.png'

// Memoized Blueprint House Component
const BlueprintHouse = React.memo(() => (
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
));

function App() {
  // Load saved form data from localStorage
  const loadSavedFormData = () => {
    const saved = localStorage.getItem('rgv_form_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  };

  // Initialize form data with saved values or URL parameters
  const initializeFormData = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const savedData = loadSavedFormData();
    
    return {
      name: urlParams.get('name') || savedData?.name || '',
      phone: urlParams.get('phone') || savedData?.phone || '',
      email: urlParams.get('email') || savedData?.email || '',
      address: urlParams.get('address') || savedData?.address || '',
      serviceType: urlParams.get('service') || savedData?.serviceType || '',
      message: urlParams.get('message') || savedData?.message || ''
    };
  };

  const [formData, setFormData] = useState(initializeFormData())
  
  // Security state
  const [formStartTime, setFormStartTime] = useState(null)


  const [headerState, setHeaderState] = useState({
    currentTemp: 89,
    realFeelsLike: 97,
    energySavings: 0,
    isExtremeHeat: false,
    timeOfDay: 'afternoon',
    todaysHigh: 89,
    isNight: false
  })

  // Dropdown states
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showLocationsDropdown, setShowLocationsDropdown] = useState(false)

  // Memoized calculations
  const temperatureBarWidth = useMemo(() => 
    `${Math.min(headerState?.currentTemp || 89, 100)}%`, 
    [headerState?.currentTemp]
  )

  // Mobile-specific state
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [showLeadWidget, setShowLeadWidget] = useState(false)
  const [currentSwipeCard, setCurrentSwipeCard] = useState(0)
  const [formStep, setFormStep] = useState(1)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const swipeRef = useRef(null)
  
  // Innovative mobile states
  // Removed showBottomSheet - now scrolling to form instead
  const [showStoryMode, setShowStoryMode] = useState(false)
  const [currentStory, setCurrentStory] = useState(0)
  // Removed energy calculator - simplified to main form
  const [pullProgress, setPullProgress] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [hapticEnabled, setHapticEnabled] = useState(true)
  const [voiceInput, setVoiceInput] = useState(false)
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })
  const [formErrors, setFormErrors] = useState({})
  
  // Modal states
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)

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
        
        // Get today's date as a key for localStorage
        const today = new Date().toLocaleDateString('en-US')
        const storageKey = `weatherHigh_${today}`
        
        // Get stored high temperature for today
        let storedHigh = localStorage.getItem(storageKey)
        if (storedHigh) {
          storedHigh = parseInt(storedHigh)
        }
        
        // Calculate today's high - either the stored high or current temp, whichever is higher
        const todaysHigh = storedHigh ? Math.max(storedHigh, currentTemp) : currentTemp
        
        // Store the new high if current temp is higher
        if (!storedHigh || currentTemp > storedHigh) {
          localStorage.setItem(storageKey, todaysHigh.toString())
        }
        
        // Clean up old dates from localStorage (keep only last 7 days)
        const cutoffDate = new Date()
        cutoffDate.setDate(cutoffDate.getDate() - 7)
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith('weatherHigh_')) {
            const dateStr = key.replace('weatherHigh_', '')
            const keyDate = new Date(dateStr)
            if (keyDate < cutoffDate) {
              localStorage.removeItem(key)
            }
          }
        })
        
        // Determine if it's night (after 8 PM or before 6 AM)
        const hour = new Date().getHours()
        const isNight = hour >= 20 || hour < 6
        
        // Use today's high temp at night, current temp during day
        const displayTemp = isNight ? todaysHigh : currentTemp
        const displayFeelsLike = realFeelsLike
        
        const isExtremeHeat = displayTemp > 95
        
        // Calculate realistic energy savings based on temperature
        // Average AC cost in RGV: ~$200-400/month in summer
        // Poor insulation can increase by 35%
        const baseMonthlyACCost = displayTemp > 85 ? 250 : 150
        const poorInsulationMultiplier = 1.35
        const wellInsulatedCost = baseMonthlyACCost
        const poorlyInsulatedCost = baseMonthlyACCost * poorInsulationMultiplier
        const energySavings = Math.round(poorlyInsulatedCost - wellInsulatedCost)
        
        let timeOfDay = 'morning'
        if (hour >= 12 && hour < 17) timeOfDay = 'afternoon'
        else if (hour >= 17 && hour < 20) timeOfDay = 'evening'
        else if (hour >= 20 || hour < 6) timeOfDay = 'night'
        
        const newHeaderState = {
          currentTemp: displayTemp,
          realFeelsLike: displayFeelsLike,
          energySavings: Math.max(energySavings, 0),
          isExtremeHeat,
          timeOfDay,
          todaysHigh,
          isNight
        }
        setHeaderState(newHeaderState)
      } catch (error) {
        console.error('Weather fetch error:', error)
        // Fallback to default values
        const hour = new Date().getHours()
        const isNight = hour >= 20 || hour < 6
        
        // Try to get stored high for today even in fallback
        const today = new Date().toLocaleDateString('en-US')
        const storageKey = `weatherHigh_${today}`
        const storedHigh = localStorage.getItem(storageKey)
        
        const fallbackCurrent = 90
        const fallbackHigh = storedHigh ? parseInt(storedHigh) : 94
        
        setHeaderState({
          currentTemp: isNight ? fallbackHigh : fallbackCurrent,
          realFeelsLike: 98,
          energySavings: 263,
          isExtremeHeat: false,
          timeOfDay: isNight ? 'night' : 'afternoon',
          todaysHigh: fallbackHigh,
          isNight
        })
      }
    }

    fetchWeatherData()
    const updateInterval = parseInt(import.meta.env.VITE_WEATHER_UPDATE_INTERVAL) || 300000
    const interval = setInterval(fetchWeatherData, updateInterval)
    return () => clearInterval(interval)
  }, [])

  // Mobile touch event handlers
  useEffect(() => {
    if (isMobile) {
      let startY = 0
      let currentY = 0
      
      const handleTouchStart = (e) => {
        // Don't interfere with form elements or their parent containers
        if (e.target.matches('input, textarea, select, button') || 
            e.target.closest('.mobile-form-step') || 
            e.target.closest('form')) {
          return;
        }
        
        if (window.scrollY === 0) {
          startY = e.touches[0].clientY
        }
      }
      
      const handleTouchMove = (e) => {
        // Don't interfere with form elements or their parent containers
        if (e.target.matches('input, textarea, select, button') || 
            e.target.closest('.mobile-form-step') || 
            e.target.closest('form')) {
          return;
        }
        
        if (startY > 0) {
          currentY = e.touches[0].clientY
          const diff = currentY - startY
          if (diff > 0 && window.scrollY === 0) {
            setPullProgress(Math.min(diff, 100))
          }
        }
      }
      
      const handleTouchEnd = (e) => {
        // Don't interfere with form elements or their parent containers
        if (e.target.matches('input, textarea, select, button') || 
            e.target.closest('.mobile-form-step') || 
            e.target.closest('form')) {
          return;
        }
        
        handlePullToRefresh()
        startY = 0
        currentY = 0
        if (!isRefreshing) {
          setPullProgress(0)
        }
      }
      
      document.addEventListener('touchstart', handleTouchStart)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)
      
      return () => {
        document.removeEventListener('touchstart', handleTouchStart)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isMobile, isRefreshing])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Start timing when user begins filling form
    if (!formStartTime) {
      setFormStartTime(Date.now());
    }
    
    // Sanitize input based on field type
    let sanitizedValue = value;
    
    switch(name) {
      case 'name':
      case 'message':
        sanitizedValue = sanitizeInput(value);
        break;
      case 'address':
        sanitizedValue = sanitizeAddress(value);
        break;
      case 'phone':
        sanitizedValue = sanitizePhone(value);
        break;
      case 'email':
        sanitizedValue = sanitizeEmail(value);
        break;
      case 'serviceType':
        // Service type is from select, just use the value directly
        sanitizedValue = value;
        // Clear the error for this field when user selects a value
        if (value && formErrors.serviceType) {
          setFormErrors(prev => {
            const newErrors = {...prev};
            delete newErrors.serviceType;
            return newErrors;
          });
        }
        break;
      default:
        sanitizedValue = sanitizeInput(value);
    }
    
    const newFormData = {
      ...formData,
      [name]: sanitizedValue
    };
    
    setFormData(newFormData);
    
    // Save to localStorage for persistence
    localStorage.setItem('rgv_form_data', JSON.stringify(newFormData));
  }

  // Special handler for address field to ensure spaces work properly
  const handleAddressChange = (e) => {
    const value = e.target.value;
    
    // Start timing when user begins filling form
    if (!formStartTime) {
      setFormStartTime(Date.now());
    }
    
    // Minimal sanitization for address - preserve spaces and common address characters
    const sanitizedValue = value
      .replace(/<[^>]*>?/gm, '') // Remove HTML tags
      .replace(/[<>\"']/g, '') // Remove dangerous characters but keep spaces, commas, periods
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove inline event handlers
      .substring(0, 200); // Reasonable length limit for addresses
    
    const newFormData = {
      ...formData,
      address: sanitizedValue
    };
    
    setFormData(newFormData);
    
    // Save to localStorage for persistence
    localStorage.setItem('rgv_form_data', JSON.stringify(newFormData));
  }

  // Form validation
  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number'
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email'
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    
    // Check rate limiting
    const fingerprint = getFingerprint();
    if (!formRateLimiter.isAllowed(fingerprint)) {
      setRateLimitError(true);
      setSubmitStatus({
        type: 'error',
        message: 'Too many submissions. Please wait a minute and try again.'
      });
      return;
    }
    
    // Check if form was submitted too quickly (bot detection)
    if (formStartTime && isSubmittedTooQuickly(formStartTime, 2)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please take a moment to fill out the form completely.'
      });
      return;
    }
    
    // Validate form fields
    if (!validateForm()) {
      return
    }
    
    // Security validation
    const securityCheck = validateFormSecurity(formData);
    if (!securityCheck.isValid) {
      setFormErrors(securityCheck.errors);
      return;
    }
    
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })
    
    try {
      // Netlify Forms submission
      const form = e.target
      const formData = new FormData(form)
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      
      if (!response.ok) {
        throw new Error('Form submission failed')
      }
      
      setSubmitStatus({
        type: 'success',
        message: '¡Gracias! We will contact you within 24 hours for your free estimate.'
      })
      
      // Track conversion with enhanced data for Google Ads
      trackFormConversion(formData);
      
      // Reset form but keep name/phone/email for future visits
      const resetData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: '',
        serviceType: '',
        message: ''
      };
      setFormData(resetData);
      localStorage.setItem('rgv_form_data', JSON.stringify(resetData));
      setFormStartTime(null)
      
      // Reset mobile form step
      if (isMobile) {
        setFormStep(1)
      }
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please call us at (956) 854-0899'
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, formStartTime, validateForm])

  // Mobile-specific handlers
  const handleTabClick = (tab) => {
    setActiveTab(tab)
    const element = document.getElementById(tab === 'home' ? 'hero' : tab)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    if (hapticEnabled && 'vibrate' in navigator) {
      navigator.vibrate(10)
    }
  }
  
  // Pull to refresh handler
  const handlePullToRefresh = async () => {
    if (pullProgress > 80) {
      setIsRefreshing(true)
      await fetchWeatherData()
      setTimeout(() => {
        setIsRefreshing(false)
        setPullProgress(0)
      }, 1000)
    }
  }
  
  // Removed calculateSavings - using main form instead
  
  // Story navigation
  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % 3)
    if (hapticEnabled && 'vibrate' in navigator) navigator.vibrate(5)
  }
  
  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + 3) % 3)
    if (hapticEnabled && 'vibrate' in navigator) navigator.vibrate(5)
  }

  const handleSwipe = (direction) => {
    const totalCards = 3
    if (direction === 'left' && currentSwipeCard < totalCards - 1) {
      setCurrentSwipeCard(currentSwipeCard + 1)
    } else if (direction === 'right' && currentSwipeCard > 0) {
      setCurrentSwipeCard(currentSwipeCard - 1)
    }
  }

  const onTouchStart = useCallback((e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }, [])

  const onTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    if (isLeftSwipe) handleSwipe('left')
    if (isRightSwipe) handleSwipe('right')
  }, [touchStart, touchEnd])

  // Memoized callback for scrolling to quote form
  const handleShowQuoteForm = useCallback(() => {
    const quoteSection = document.getElementById('quote')
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleMobileFormStep = (step) => {
    // Validate current step before moving forward
    if (step > formStep) {
      const errors = {}
      
      if (formStep === 1) {
        if (!formData.name.trim()) {
          errors.name = 'Name is required'
        }
        if (!formData.phone.trim()) {
          errors.phone = 'Phone number is required'
        } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone.replace(/\s/g, ''))) {
          errors.phone = 'Please enter a valid phone number'
        }
      }
      
      if (formStep === 2) {
        if (!formData.serviceType || formData.serviceType.trim() === '') {
          errors.serviceType = 'Please select a service type'
        }
      }
      
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors)
        return
      }
    }
    
    setFormErrors({})
    setFormStep(step)
  }

  // Fix for space key on mobile inputs - removed custom handling to let native behavior work
  useEffect(() => {
    if (!isMobile) return;
    
    // Remove the custom space key handler that was interfering with native input
    // Mobile keyboards should handle spaces naturally without intervention
    
    // Optional: Add logging for debugging if space issues persist
    const handleDebugKey = (e) => {
      if (e.key === ' ' && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
        console.log('Space key detected in:', e.target.name, 'Value:', e.target.value);
      }
    };
    
    // Only attach for debugging, don't interfere with input
    if (window.location.search.includes('debug=true')) {
      document.addEventListener('keyup', handleDebugKey, false);
      
      return () => {
        document.removeEventListener('keyup', handleDebugKey, false);
      };
    }
  }, [isMobile]);

  // FAQ Accordion Component
  const FAQAccordion = () => {
    const [openItems, setOpenItems] = useState([])
    
    const faqs = [
      {
        id: 1,
        question: "How much does insulation cost in the Rio Grande Valley?",
        answer: "The cost varies based on your home size and insulation type. Spray foam typically ranges from $1.50-$3.50 per sq ft, while blown-in insulation costs $0.80-$2.00 per sq ft. Most Valley homes see a complete return on investment within 2-3 years through energy savings. We offer free estimates to give you an exact quote."
      },
      {
        id: 2,
        question: "How long does insulation installation take?",
        answer: "Most residential insulation projects in the RGV are completed in 1-2 days. Blown-in attic insulation typically takes 2-4 hours, while whole-home spray foam may take 1-2 days depending on square footage. We work efficiently to minimize disruption to your daily routine."
      },
      {
        id: 3,
        question: "Will new insulation really lower my electric bill?",
        answer: "Yes! In the Rio Grande Valley's extreme heat, proper insulation can reduce cooling costs by 25-35%. Most of our McAllen and Edinburg customers see savings of $150-$350 per month during summer. Your exact savings depend on your current insulation, AC efficiency, and home size."
      },
      {
        id: 4,
        question: "What's the best insulation for South Texas heat?",
        answer: "Spray foam insulation is ideal for RGV homes because it creates an air-tight seal that blocks both heat and humidity. It's especially effective in our climate where temperatures regularly exceed 100°F. However, blown-in insulation is also an excellent, more budget-friendly option for attics."
      },
      {
        id: 5,
        question: "Do you offer financing options?",
        answer: "Yes! We understand that insulation is an investment. We offer flexible financing options with approved credit, including 0% interest programs. Many customers finance their project and pay it off using their monthly energy savings."
      },
      {
        id: 6,
        question: "Is your insulation safe for my family?",
        answer: "Absolutely. We only use EPA-approved, non-toxic insulation materials. Our spray foam is safe once cured (usually within 24 hours), and our blown-in insulation is made from recycled materials treated with safe fire retardants. All materials meet or exceed federal safety standards."
      },
      {
        id: 7,
        question: "How do I know if I need new insulation?",
        answer: "Common signs include: high energy bills, rooms that are too hot/cold, AC running constantly, visible gaps in attic insulation, or insulation that's compressed or damaged. If your home is over 10 years old or you're experiencing any of these issues, you likely need an insulation upgrade."
      },
      {
        id: 8,
        question: "Do you service my area?",
        answer: "We proudly serve the entire Rio Grande Valley including McAllen, Edinburg, Mission, Pharr, Brownsville, Harlingen, San Benito, Weslaco, Mercedes, and all surrounding areas. If you're in the RGV, we've got you covered!"
      }
    ]
    
    const toggleItem = useCallback((id) => {
      setOpenItems(prev => 
        prev.includes(id) 
          ? prev.filter(item => item !== id)
          : [...prev, id]
      )
    }, [])
    
    return (
      <div className="space-y-4">
        {faqs.map(faq => (
          <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => toggleItem(faq.id)}
            >
              <h4 className="font-semibold text-gray-900 pr-4">{faq.question}</h4>
              {openItems.includes(faq.id) ? (
                <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            {openItems.includes(faq.id) && (
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  // Privacy Policy Modal
  const PrivacyModal = () => {
    if (!showPrivacyModal) return null
    
    return (
      <>
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setShowPrivacyModal(false)}
        />
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-6">
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
                <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
              </div>
              <div className="p-6 prose prose-gray max-w-none">
                <p className="text-gray-600">Last updated: January 26, 2024</p>
                
                <h3 className="text-lg font-bold mt-6">Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you request a quote, including your name, phone number, email address, and property address.</p>
                
                <h3 className="text-lg font-bold mt-6">How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and deliver our insulation services</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Provide customer service</li>
                </ul>
                
                <h3 className="text-lg font-bold mt-6">Information Sharing</h3>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except to provide our services or as required by law.</p>
                
                <h3 className="text-lg font-bold mt-6">Data Security</h3>
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                
                <h3 className="text-lg font-bold mt-6">Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at (956) 854-0899 or info@valleyinsulationpros.com.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  // Terms of Service Modal
  const TermsModal = () => {
    if (!showTermsModal) return null
    
    return (
      <>
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setShowTermsModal(false)}
        />
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-6">
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
                <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
              </div>
              <div className="p-6 prose prose-gray max-w-none">
                <p className="text-gray-600">Last updated: January 26, 2024</p>
                
                <h3 className="text-lg font-bold mt-6">Service Agreement</h3>
                <p>By requesting our services, you agree to these terms. Valley Insulation Pros provides professional insulation installation services throughout the Rio Grande Valley.</p>
                
                <h3 className="text-lg font-bold mt-6">Service Warranty</h3>
                <p>We provide manufacturer warranties on all materials used. Warranty is valid for original purchaser only.</p>
                
                <h3 className="text-lg font-bold mt-6">Payment Terms</h3>
                <p>Payment is due upon completion of work unless other arrangements have been made. We accept cash, check, and major credit cards. Financing available with approved credit.</p>
                
                <h3 className="text-lg font-bold mt-6">Limitation of Liability</h3>
                <p>Our liability is limited to the cost of services provided. We are not responsible for pre-existing conditions or damage not caused by our work.</p>
                
                <h3 className="text-lg font-bold mt-6">Cancellation Policy</h3>
                <p>You may cancel scheduled services up to 24 hours before the appointment without penalty. Same-day cancellations may incur a service fee.</p>
                
                <h3 className="text-lg font-bold mt-6">Contact Information</h3>
                <p>For questions about these terms, contact us at (956) 854-0899 or info@valleyinsulationpros.com.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
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

  // Main App return
  return (
    <div className={`min-h-screen bg-white ${isMobile ? 'pb-16' : ''}`}>
      {/* Modals */}
      <PrivacyModal />
      <TermsModal />


      {/* Header with Integrated Navigation */}
      <PageHeader />

      {/* No spacer needed - hero section will handle padding */}

      {/* Hero Section */}
      <section id="hero" className="hero-modern grain-overlay relative flex items-center" style={{ marginTop: isMobile ? '50px' : '0', minHeight: isMobile ? 'calc(100vh - 106px)' : 'auto' }}>
        {!isMobile && (
          <>
            <div className="geometric-shape w-96 h-96 -top-20 -right-20" />
            <div className="geometric-shape w-64 h-64 bottom-20 left-10" />
          </>
        )}
        
        {/* Blueprint House Background */}
        {!isMobile && <BlueprintHouse />}
        
        {/* Animated heat/cold particles */}
        {!isMobile && (
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
        )}
        
        <div className={`container mx-auto px-4 lg:px-8 ${isMobile ? 'py-4' : 'py-11 lg:py-15'} relative z-10 w-full`}>
          <div className="grid lg:grid-cols-2 gap-10 items-center h-full">
            <div className={`${isMobile ? 'space-y-3 mobile-contain-layout-style-paint' : 'space-y-6'} fade-up mobile-animate max-w-4xl`}>
              {isMobile ? (
                <>
                  {/* Mobile-specific hero content */}
                  <div className="relative mobile-contain-layout-style rounded-2xl overflow-hidden">
                    {/* Blurred palm trees background */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${palmTreesRgv})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'blur(3px) brightness(1.1)',
                        opacity: 0.8,
                        zIndex: 0
                      }}
                    />
                    {/* White overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/65 to-orange-50/50" style={{ zIndex: 1 }} />
                    
                    {/* Content wrapper with padding */}
                    <div className="relative p-4" style={{ zIndex: 2 }}>
                      {/* Simplified temperature badge */}
                      <div className="inline-flex items-center gap-1.5 bg-red-500/90 text-white px-2.5 py-0.5 rounded-full mb-3 text-xs font-medium">
                        <Thermometer className="h-3 w-3" />
                        <span>Current Temp: {headerState.currentTemp}°F</span>
                      </div>
                      
                      {/* Simplified headline */}
                      <h2 className="text-2xl font-black text-gray-900 leading-tight mb-3" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                        Stop Wasting Money on
                        <span className="block text-2xl text-orange-600 font-black">
                          High AC Bills
                        </span>
                      </h2>
                      
                      {/* Value proposition */}
                      <div className="text-center mb-3">
                        <p className="text-base text-gray-700 font-medium" style={{ WebkitFontSmoothing: 'antialiased' }}>Cut your cooling costs by up to</p>
                        <div className="relative inline-block my-1 isolate">
                          <span className="text-5xl font-black mobile-hero-gradient-text">35%</span>
                        </div>
                        <p className="text-xs text-gray-600" style={{ WebkitFontSmoothing: 'antialiased' }}>With proper insulation</p>
                      </div>
                      
                      {/* Streamlined metrics card */}
                      <div className="bg-white rounded-lg p-3 shadow-lg border border-gray-100 mobile-contain-layout">
                        {/* Simple heat indicator */}
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-semibold text-gray-700">Poor Insulation Impact:</span>
                          </div>
                          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-300"
                              style={{ 
                                width: temperatureBarWidth,
                                transform: 'translateZ(0)',
                                willChange: 'width'
                              }}
                            />
                          </div>
                        </div>
                        
                        {/* Three key metrics */}
                        <div className="grid grid-cols-3 gap-1.5 text-center">
                          <div className="bg-red-50 rounded-lg py-2 px-1 mobile-hero-metrics">
                            <p className="text-lg font-bold text-red-600">35%</p>
                            <p className="text-[10px] text-gray-600">Energy Lost</p>
                          </div>
                          <div className="bg-orange-50 rounded-lg py-2 px-1 mobile-hero-metrics">
                            <p className="text-lg font-bold text-orange-600">3x</p>
                            <p className="text-[10px] text-gray-600">AC Works</p>
                          </div>
                          <div className="bg-green-50 rounded-lg py-2 px-1 mobile-hero-metrics">
                            <p className="text-lg font-bold text-green-600">$189</p>
                            <p className="text-[10px] text-gray-600">Save/Mo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Simplified CTA section */}
                  <div className="mt-3 space-y-2">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 text-base shadow-xl mobile-hero-button"
                      onClick={handleShowQuoteForm}
                    >
                      Get Free Quote →
                    </Button>
                    
                    {/* Trust indicators */}
                    <div className="flex items-center justify-center gap-3 text-[11px] text-gray-600">
                      <div className="flex items-center gap-0.5">
                        <Shield className="h-3.5 w-3.5 text-green-600" />
                        <span>Licensed & Insured</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <Clock className="h-3.5 w-3.5 text-blue-600" />
                        <span>Same Day Service</span>
                      </div>
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
                    <Button 
                      size="lg" 
                      className="btn-primary mobile-ripple px-8 py-4 text-base font-semibold shadow-xl flex items-center justify-center"
                      onClick={() => {
                        trackPhoneConversion('(956) 854-0899');
                      }}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call or Text (956) 854-0899
                    </Button>
                    <Button 
                      size="lg" 
                      className="btn-outline mobile-touch px-7 py-4 text-lg font-bold"
                      onClick={() => {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      Learn More →
                    </Button>
                  </div>
                  <div className="flex items-center gap-6 pt-4">
                    <div className="neumorphic-inset flex items-center gap-3 px-6 py-3">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" style={{ animationDelay: `${i * 0.1}s` }} />
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
                    <p className="font-black text-3xl text-gray-900">35%</p>
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
                        <span className="text-xs text-gray-700">35% energy savings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-gray-700">Manufacturer warranty</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm"
                      onClick={() => handleTabClick('quote')}
                    >
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
                    <Link to="/services/blown-in" className="block w-full">
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
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
                    <Button 
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-sm"
                      onClick={() => handleTabClick('quote')}
                    >
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
                  The gold standard for RGV homes. Creates an air-tight seal that blocks hot, humid air and reduces energy costs by up to 35%.
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
                    <span className="text-gray-700 font-medium">Quality guarantee</span>
                  </li>
                </ul>
                <Link to="/services/spray-foam" className="block mt-4">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
                <Link to="/services/blown-in" className="block mt-4">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
                <Link to="/services/attic" className="block mt-4">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Complete attic insulation - McAllen home</p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-green-600 font-semibold">-35% cooling costs</span>
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

      {/* Our Work Gallery */}
      <GallerySection
        title="Our Professional Work"
        subtitle="See our completed insulation projects across the Rio Grande Valley"
        maxImages={6}
        className="bg-gradient-to-b from-white to-gray-50"
      />

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
                    <h4 className="text-lg font-semibold mb-1">Quality Guarantee</h4>
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

      {/* Testimonials Section */}
      <section id="reviews" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real reviews from Valley families who are saving money and staying comfortable
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-orange-500 mb-4 opacity-50" />
                <p className="text-gray-700 mb-6 italic">
                  "Our electric bill dropped by $180 the first month! The crew was professional, 
                  cleaned up everything, and finished in one day. Best investment we've made."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Maria Gonzalez</p>
                  <p className="text-sm text-gray-600">McAllen, TX</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-orange-500 mb-4 opacity-50" />
                <p className="text-gray-700 mb-6 italic">
                  "Living in Edinburg, our AC used to run constantly. After spray foam insulation, 
                  our house stays cool all day. Can't believe we waited so long!"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Robert Martinez</p>
                  <p className="text-sm text-gray-600">Edinburg, TX</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-orange-500 mb-4 opacity-50" />
                <p className="text-gray-700 mb-6 italic">
                  "They found areas in our attic we didn't even know were problems. 
                  House is so much more comfortable now, and the energy audit was eye-opening!"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Linda Thompson</p>
                  <p className="text-sm text-gray-600">Brownsville, TX</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-8 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="font-semibold text-gray-800">127+ Verified Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-orange-600" />
                <span className="font-semibold text-gray-800">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-gray-800">Fully Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about insulation in the Rio Grande Valley
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
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
        <div className="container mx-auto px-2 sm:px-4 lg:px-8">
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

            <Card className="shadow-xl border-0 overflow-hidden mx-2 sm:mx-0">
              <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-8">
                <CardTitle className="text-2xl lg:text-3xl font-bold">Free In-Home Consultation</CardTitle>
                <CardDescription className="text-gray-300 text-base mt-2">
                  Get expert advice at no cost
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-8 bg-white">
                {isMobile ? (
                  <form name="quote-form-mobile" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="form-name" value="quote-form-mobile" />
                    <input type="hidden" name="bot-field" />
                    
                    {/* Hidden inputs to ensure all form data is submitted regardless of current step */}
                    <input type="hidden" name="name" value={formData.name} />
                    <input type="hidden" name="phone" value={formData.phone} />
                    <input type="hidden" name="email" value={formData.email} />
                    <input type="hidden" name="serviceType" value={formData.serviceType} />
                    <input type="hidden" name="address" value={formData.address} />
                    <input type="hidden" name="message" value={formData.message} />
                    
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
                          <div>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Full Name"
                              autoComplete="name"
                              autoCapitalize="words"
                              autoCorrect="off"
                              spellCheck="false"
                              inputMode="text"
                              className={`w-full ${formErrors.name ? 'border-red-500' : ''}`}
                            />
                            {formErrors.name && (
                              <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                            )}
                          </div>
                          <div>
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Phone Number"
                              autoComplete="tel"
                              className={`w-full ${formErrors.phone ? 'border-red-500' : ''}`}
                            />
                            {formErrors.phone && (
                              <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                            )}
                          </div>
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
                            onInput={handleInputChange}
                            className={`w-full p-3 border rounded-lg appearance-none bg-white ${
                              formErrors.serviceType ? 'border-red-500' : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                            required
                            style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                          >
                            <option value="">Select Service *</option>
                            <option value="spray-foam">Spray Foam Insulation</option>
                            <option value="blown-in">Blown-In Insulation</option>
                            <option value="attic">Attic Insulation</option>
                            <option value="wall">Wall Insulation</option>
                            <option value="soundproofing">Soundproofing</option>
                            <option value="commercial">Commercial Insulation</option>
                          </select>
                          {formErrors.serviceType && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.serviceType}</p>
                          )}
                          <Input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleAddressChange}
                            placeholder="Property Address"
                            className="w-full"
                            inputMode="text"
                            autoComplete="street-address"
                            onInput={handleAddressChange}
                            spellCheck="false"
                            data-testid="address-input"
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
                            spellCheck="true"
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
                  <>
                    {/* Success Message */}
                    {submitStatus.type === 'success' && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-2 text-green-800">
                          <CheckCircle className="h-5 w-5" />
                          <p className="font-semibold">{submitStatus.message}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Error Message */}
                    {submitStatus.type === 'error' && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center gap-2 text-red-800">
                          <X className="h-5 w-5" />
                          <p className="font-semibold">{submitStatus.message}</p>
                        </div>
                      </div>
                    )}
                    
                    <form name="quote-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
                      <input type="hidden" name="form-name" value="quote-form" />
                      <input type="hidden" name="bot-field" />
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
                            autoComplete="name"
                            className={`w-full ${formErrors.name ? 'border-red-500' : ''}`}
                            disabled={isSubmitting}
                            onTouchStart={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                            onTouchEnd={(e) => e.stopPropagation()}
                          />
                          {formErrors.name && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                          )}
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
                            placeholder="(956) 854-0899"
                            autoComplete="tel"
                            className={`w-full ${formErrors.phone ? 'border-red-500' : ''}`}
                            disabled={isSubmitting}
                            onTouchStart={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                            onTouchEnd={(e) => e.stopPropagation()}
                          />
                          {formErrors.phone && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                          )}
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
                            autoComplete="email"
                            className={`w-full ${formErrors.email ? 'border-red-500' : ''}`}
                            disabled={isSubmitting}
                            onTouchStart={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                            onTouchEnd={(e) => e.stopPropagation()}
                          />
                          {formErrors.email && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                          )}
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
                            disabled={isSubmitting}
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
                          onChange={handleAddressChange}
                          placeholder="Street address, City, TX"
                          autoComplete="street-address"
                          className="w-full"
                          disabled={isSubmitting}
                          inputMode="text"
                          onTouchStart={(e) => e.stopPropagation()}
                          onTouchMove={(e) => e.stopPropagation()}
                          onTouchEnd={(e) => e.stopPropagation()}
                          onInput={handleAddressChange}
                          spellCheck="false"
                          data-testid="address-input-desktop"
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
                          disabled={isSubmitting}
                          onTouchStart={(e) => e.stopPropagation()}
                          onTouchMove={(e) => e.stopPropagation()}
                          onTouchEnd={(e) => e.stopPropagation()}
                          spellCheck="true"
                        />
                      </div>

                      <div className="text-center">
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            'Get My FREE Estimate'
                          )}
                        </Button>
                        <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                          By submitting this form, you agree to receive text messages and calls about our services. 
                          Message and data rates may apply. You can opt out at any time.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile-Only Components */}
      {isMobile && (
        <>
          {/* Pull to Refresh Indicator */}
          {pullProgress > 0 && (
            <div className="fixed top-0 left-0 right-0 z-60 bg-white shadow-md transition-all duration-300"
                 style={{ height: `${Math.min(pullProgress, 100)}px` }}>
              <div className="flex items-center justify-center h-full">
                {isRefreshing ? (
                  <Loader2 className="h-6 w-6 animate-spin text-orange-500" />
                ) : (
                  <div className="text-center">
                    <ChevronDown className={`h-6 w-6 text-orange-500 transition-transform ${pullProgress > 80 ? 'rotate-180' : ''}`} />
                    <p className="text-xs text-gray-600 mt-1">
                      {pullProgress > 80 ? 'Release to refresh' : 'Pull to refresh'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Story Mode Services */}
          {showStoryMode && (
            <div className="fixed inset-0 z-50 bg-black">
              <div className="relative h-full" onClick={nextStory}>
                {/* Story Progress Bar */}
                <div className="absolute top-0 left-0 right-0 z-10 flex gap-1 p-2">
                  {[0, 1, 2].map((index) => (
                    <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white transition-all duration-300"
                        style={{ width: currentStory > index ? '100%' : currentStory === index ? '50%' : '0%' }}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Story Content */}
                <div className="h-full flex items-center justify-center px-8">
                  {currentStory === 0 && (
                    <div className="text-center text-white">
                      <div className="mb-8">
                        <img src={sprayFoamHeroImage} alt="Spray Foam" className="w-full h-64 object-cover rounded-2xl mb-4" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">Spray Foam Insulation</h2>
                      <p className="text-lg mb-6">The ultimate solution for RGV homes</p>
                      <div className="space-y-2 text-left max-w-sm mx-auto">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>Up to 50% energy savings</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>Quality guarantee</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>Same-day installation</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentStory === 1 && (
                    <div className="text-center text-white">
                      <div className="mb-8">
                        <img src={blownInsulationNewImage} alt="Blown-In" className="w-full h-64 object-cover rounded-2xl mb-4" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">Blown-In Insulation</h2>
                      <p className="text-lg mb-6">Perfect for existing homes</p>
                      <div className="space-y-2 text-left max-w-sm mx-auto">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>No demolition needed</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>Quick installation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>Budget-friendly option</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentStory === 2 && (
                    <div className="text-center text-white">
                      <div className="mb-8">
                        <img src={atticInsulationNewImage} alt="Energy Audit" className="w-full h-64 object-cover rounded-2xl mb-4" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">Free Energy Audit</h2>
                      <p className="text-lg mb-6">Discover your savings potential</p>
                      <div className="space-y-2 text-left max-w-sm mx-auto">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>Thermal imaging included</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>Personalized report</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>No obligation quote</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Story Controls */}
                <button 
                  onClick={(e) => { e.stopPropagation(); setShowStoryMode(false); }}
                  className="absolute top-4 right-4 text-white p-2"
                >
                  <X className="h-6 w-6" />
                </button>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); prevStory(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2"
                >
                  <ChevronDown className="h-8 w-8 rotate-90" />
                </button>
                
                <button 
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-8 py-3 rounded-full font-bold"
                  onClick={(e) => { e.stopPropagation(); setShowStoryMode(false); handleShowQuoteForm(); }}
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          )}


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

          {/* Floating Navigation Menu */}
          <FloatingMenu />

          {/* Mobile Floating Phone Button */}
          <a 
            href="tel:+19568540899" 
            className="mobile-float-phone lg:hidden mobile-touch"
            aria-label="Call us now"
            onClick={() => trackPhoneConversion('(956) 854-0899')}
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
                  <h4 className="text-lg font-bold">Valley Insulation Pros</h4>
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
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link to="/services/spray-foam" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Spray Foam Insulation
                  </Link>
                </li>
                <li>
                  <Link to="/services/blown-in" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Blown-In Insulation
                  </Link>
                </li>
                <li>
                  <Link to="/services/attic" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Attic Insulation
                  </Link>
                </li>
                <li>
                  <Link to="/services/wall" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Wall Insulation
                  </Link>
                </li>
                <li>
                  <Link to="/services/commercial" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Commercial Insulation
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-orange-400 hover:text-orange-300 font-semibold">
                    View All →
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3">Service Areas</h5>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link to="/areas/mcallen" className="text-gray-400 hover:text-orange-400 transition-colors">
                    McAllen
                  </Link>
                  <span className="text-gray-400"> & </span>
                  <Link to="/areas/edinburg" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Edinburg
                  </Link>
                </li>
                <li>
                  <Link to="/areas/brownsville" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Brownsville
                  </Link>
                  <span className="text-gray-400"> & </span>
                  <Link to="/areas/harlingen" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Harlingen
                  </Link>
                </li>
                <li>
                  <Link to="/areas/mission" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Mission
                  </Link>
                  <span className="text-gray-400"> & </span>
                  <Link to="/areas/pharr" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Pharr
                  </Link>
                </li>
                <li>
                  <Link to="/locations" className="text-orange-400 hover:text-orange-300 font-semibold">
                    All Locations →
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3">Quick Links</h5>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link to="/quote" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Get Free Quote
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-orange-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Customer Reviews
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-orange-400 transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="tel:9568540899" className="text-orange-400 hover:text-orange-300 font-semibold">
                    Call (956) 854-0899
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-xs text-gray-400">
            <p>&copy; 2024 Valley Insulation Pros. All rights reserved. Licensed & Insured in Texas.</p>
            <p className="mt-1">Emergency service • Free estimates • Quality guarantee</p>
            <div className="mt-3 space-x-4">
              <button 
                onClick={() => setShowPrivacyModal(true)}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button 
                onClick={() => setShowTermsModal(true)}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

