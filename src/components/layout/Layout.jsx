import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MobileNav from './MobileNav'

const Layout = () => {
  const [headerState, setHeaderState] = useState({
    currentTemp: 89,
    realFeelsLike: 97,
    energySavings: 0,
    isExtremeHeat: false,
    timeOfDay: 'afternoon',
    todaysHigh: 89,
    isNight: false
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Fetch weather data (reusing logic from App.jsx)
    const fetchWeatherData = async () => {
      try {
        const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
        const CITY = import.meta.env.VITE_WEATHER_CITY || 'McAllen,TX,US'
        
        if (!API_KEY) {
          throw new Error('Weather API key not found')
        }
        
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=imperial`
        )
        const data = await response.json()
        const currentTemp = Math.round(data.main.temp)
        const realFeelsLike = Math.round(data.main.feels_like)
        
        const today = new Date().toLocaleDateString('en-US')
        const storageKey = `weatherHigh_${today}`
        let storedHigh = localStorage.getItem(storageKey)
        if (storedHigh) {
          storedHigh = parseInt(storedHigh)
        }
        
        const todaysHigh = storedHigh ? Math.max(storedHigh, currentTemp) : currentTemp
        
        if (!storedHigh || currentTemp > storedHigh) {
          localStorage.setItem(storageKey, todaysHigh.toString())
        }
        
        const hour = new Date().getHours()
        const isNight = hour >= 20 || hour < 6
        const displayTemp = isNight ? todaysHigh : currentTemp
        const isExtremeHeat = displayTemp > 95
        
        const baseMonthlyACCost = displayTemp > 85 ? 250 : 150
        const poorInsulationMultiplier = 1.35
        const wellInsulatedCost = baseMonthlyACCost
        const poorlyInsulatedCost = baseMonthlyACCost * poorInsulationMultiplier
        const energySavings = Math.round(poorlyInsulatedCost - wellInsulatedCost)
        
        let timeOfDay = 'morning'
        if (hour >= 12 && hour < 17) timeOfDay = 'afternoon'
        else if (hour >= 17 && hour < 20) timeOfDay = 'evening'
        else if (hour >= 20 || hour < 6) timeOfDay = 'night'
        
        setHeaderState({
          currentTemp: displayTemp,
          realFeelsLike,
          energySavings: Math.max(energySavings, 0),
          isExtremeHeat,
          timeOfDay,
          todaysHigh,
          isNight
        })
      } catch (error) {
        console.error('Weather fetch error:', error)
        const hour = new Date().getHours()
        const isNight = hour >= 20 || hour < 6
        
        setHeaderState({
          currentTemp: isNight ? 94 : 90,
          realFeelsLike: 98,
          energySavings: 263,
          isExtremeHeat: false,
          timeOfDay: isNight ? 'night' : 'afternoon',
          todaysHigh: 94,
          isNight
        })
      }
    }

    fetchWeatherData()
    const interval = setInterval(fetchWeatherData, 300000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header headerState={headerState} />
      <main className="flex-grow pt-20 lg:pt-24">
        <Outlet context={{ headerState, isMobile }} />
      </main>
      <Footer />
      {isMobile && <MobileNav />}
    </div>
  )
}

export default Layout