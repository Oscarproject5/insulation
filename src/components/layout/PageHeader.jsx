import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Star, Thermometer } from 'lucide-react'
import NavigationDropdown from './NavigationDropdown'
import { services, serviceAreas, siteConfig } from '../../data/siteConfig'

const PageHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showAreasDropdown, setShowAreasDropdown] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize() // Check on mount
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-gray-100">
      {/* Main Header */}
      <div className={`container mx-auto px-4 ${isMobile ? 'py-3' : 'py-2'}`}>
        <div className="flex items-center justify-between">
          
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className={`${isMobile ? 'text-base' : 'text-lg'} font-bold text-gray-900 leading-tight`}>
                Valley Insulation Pros
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Licensed & Insured</span>
                {!isMobile && (
                  <>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center gap-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 font-medium">4.9</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* Decorative separator - desktop only */}
            {!isMobile && (
              <div className="hidden lg:block absolute left-[260px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
            )}
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden lg:flex items-center gap-8">
              {/* Services Dropdown */}
              <div className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <Link 
                  to="/services"
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                >
                  Services
                </Link>
                {showServicesDropdown && (
                  <div className="absolute top-full left-0 -mt-1 pt-1 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 w-64 py-2 mt-2">
                      {services.slice(0, 6).map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Areas Dropdown */}
              <div className="relative"
                onMouseEnter={() => setShowAreasDropdown(true)}
                onMouseLeave={() => setShowAreasDropdown(false)}
              >
                <Link 
                  to="/locations"
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                >
                  Locations
                </Link>
                {showAreasDropdown && (
                  <div className="absolute top-full left-0 -mt-1 pt-1 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 w-48 py-2 mt-2">
                      {serviceAreas.map((area) => (
                        <Link
                          key={area.id}
                          to={`/areas/${area.slug}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                to="/about"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                About
              </Link>
              
              <a 
                href="/#quote"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </a>
            </nav>
          )}
          
          {/* Phone Number - THE HERO */}
          <div className="text-right">
            <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-600 mb-1 flex items-center gap-2 justify-end`}>
              {!isMobile && (
                <div className="inline-flex items-center gap-1 mr-3">
                  <Thermometer className="h-4 w-4 text-red-500" />
                  <span className="font-semibold text-red-600">89°F</span>
                </div>
              )}
              <span>Call for FREE Quote</span>
              {!isMobile && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Available Now
                </span>
              )}
            </div>
            <a 
              href={`tel:${siteConfig.company.phoneRaw}`}
              className={`${isMobile ? 'text-xl' : 'text-2xl lg:text-3xl'} font-bold text-orange-600 hover:text-orange-700 block whitespace-nowrap`}
            >
              {siteConfig.company.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader