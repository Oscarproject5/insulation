import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Star } from 'lucide-react'
import NavigationDropdown from './NavigationDropdown'
import { services, serviceAreas } from '../../data/siteConfig'

const EnhancedHeader = ({ headerState }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showAreasDropdown, setShowAreasDropdown] = useState(false)
  const isMobile = window.innerWidth < 768

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Main Header */}
      <div className={`container mx-auto px-4 lg:px-8 ${isMobile ? 'py-1' : 'py-2'}`}>
        <div className="flex items-center justify-between relative">
          
          {/* Brand - Both icon and name link to home */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className={`${isMobile ? 'bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg shadow-md' : 'bg-gradient-to-br from-orange-500 to-orange-600 p-2.5 rounded-lg shadow-md'}`}>
              <Shield className={`${isMobile ? 'h-6 w-6' : 'h-7 w-7'} text-white`} />
            </div>
            {/* Show name on both mobile and desktop */}
            <div>
              <h1 className={`${isMobile ? 'text-base' : 'text-lg'} font-bold text-gray-900`}>Valley Insulation Pros</h1>
              {!isMobile && (
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>Licensed & Insured</span>
                  <span className="text-xs">•</span>
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-2.5 w-2.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold">4.9</span>
                  </div>
                </div>
              )}
            </div>
          </Link>
          
          {/* Decorative separator - desktop only */}
          {!isMobile && (
            <div className="hidden lg:block absolute left-[260px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          )}
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <button className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2">
                  Services
                </button>
                {showServicesDropdown && (
                  <div className="absolute top-full left-0 -mt-1 pt-1 z-50">
                    <div className="w-72 bg-white rounded-lg shadow-xl border border-gray-100 mt-2">
                      <Link 
                        to="/services" 
                        className="block px-4 py-3 text-orange-600 font-semibold border-b border-gray-100 hover:bg-orange-50"
                      >
                        All Services →
                      </Link>
                      <div className="py-2">
                        {services.map(service => (
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
                  </div>
                )}
              </div>
              
              {/* Areas Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowAreasDropdown(true)}
                onMouseLeave={() => setShowAreasDropdown(false)}
              >
                <button className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2">
                  Locations
                </button>
                {showAreasDropdown && (
                  <div className="absolute top-full left-0 -mt-1 pt-1 z-50">
                    <div className="w-64 bg-white rounded-lg shadow-xl border border-gray-100 mt-2">
                      <Link 
                        to="/locations" 
                        className="block px-4 py-3 text-orange-600 font-semibold border-b border-gray-100 hover:bg-orange-50"
                      >
                        All Locations →
                      </Link>
                      <div className="py-2">
                        {serviceAreas.map(area => (
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
                  </div>
                )}
              </div>
              
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                About
              </Link>
              
              <Link 
                to="/quote"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </Link>
            </nav>
          )}
          
          {/* Mobile CTA */}
          {isMobile && (
            <a href="tel:9568540899" className="text-orange-600 font-bold hover:text-orange-700 transition-colors whitespace-nowrap text-xl">
              (956) 854-0899
            </a>
          )}
        </div>
      </div>
    </header>
  )
}

export default EnhancedHeader