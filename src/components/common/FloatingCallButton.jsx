import React from 'react'
import { Phone } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'

const FloatingCallButton = () => {
  return (
    <>
      {/* Floating Call Button - Mobile Only */}
      <a
        href={`tel:${siteConfig.company.phoneRaw}`}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse-slow"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" fill="currentColor" />
      </a>
      
      {/* Alternative style with text (uncomment if preferred) */}
      {/* <a
        href={`tel:${siteConfig.company.phoneRaw}`}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5" fill="currentColor" />
        <span className="text-sm font-semibold">Call Now</span>
      </a> */}
    </>
  )
}

export default FloatingCallButton