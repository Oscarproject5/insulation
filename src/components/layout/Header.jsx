import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Shield, ChevronDown, Star } from 'lucide-react'

const Header = () => {
  const location = useLocation()
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showLocationsDropdown, setShowLocationsDropdown] = useState(false)

  const services = [
    { name: 'Spray Foam Insulation', path: '/services/spray-foam' },
    { name: 'Blown-In Insulation', path: '/services/blown-in' },
    { name: 'Attic Insulation', path: '/services/attic' },
    { name: 'Wall Insulation', path: '/services/wall' },
    { name: 'Commercial Insulation', path: '/services/commercial' },
    { name: 'Soundproofing', path: '/services/soundproofing' },
    { name: 'Specialty Insulation', path: '/services/specialty' },
    { name: 'Roof Insulation', path: '/services/roof' },
    { name: 'Energy Efficiency', path: '/services/energy-efficiency' }
  ]

  const locations = [
    { name: 'McAllen', path: '/areas/mcallen' },
    { name: 'Edinburg', path: '/areas/edinburg' },
    { name: 'Brownsville', path: '/areas/brownsville' },
    { name: 'Harlingen', path: '/areas/harlingen' },
    { name: 'Mission', path: '/areas/mission' },
    { name: 'Pharr', path: '/areas/pharr' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900 leading-tight">
                Valley Insulation Pros
              </h1>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-gray-500">Licensed & Insured</span>
                <span className="text-gray-400 text-[11px]">•</span>
                <div className="flex items-center gap-0.5">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-600 font-medium">4.9</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Center Navigation and Right Side */}
          <div className="flex items-center gap-12">
            {/* Navigation - Desktop */}
            <nav className="flex items-center gap-6">
              {/* Services Dropdown */}
              <div className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <Link 
                  to="/services" 
                  className={`text-sm text-gray-700 hover:text-orange-500 font-medium transition-colors flex items-center gap-1 ${location.pathname.startsWith('/services') ? 'text-orange-500' : ''}`}
                >
                  Services
                  <ChevronDown className="h-3 w-3" />
                </Link>
                {showServicesDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link 
                      to="/services" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 font-medium border-b border-gray-100"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div className="relative"
                onMouseEnter={() => setShowLocationsDropdown(true)}
                onMouseLeave={() => setShowLocationsDropdown(false)}
              >
                <Link 
                  to="/locations" 
                  className={`text-sm text-gray-700 hover:text-orange-500 font-medium transition-colors flex items-center gap-1 ${location.pathname.startsWith('/areas') || location.pathname === '/locations' ? 'text-orange-500' : ''}`}
                >
                  Locations
                  <ChevronDown className="h-3 w-3" />
                </Link>
                {showLocationsDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link 
                      to="/locations" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 font-medium border-b border-gray-100"
                    >
                      All Locations
                    </Link>
                    {locations.map((location) => (
                      <Link
                        key={location.path}
                        to={location.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/about" 
                className={`text-sm text-gray-700 hover:text-orange-500 font-medium transition-colors ${location.pathname === '/about' ? 'text-orange-500' : ''}`}
              >
                About
              </Link>

              <Link 
                to="/#quote" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </nav>

            {/* Phone Number */}
            <div className="flex flex-col items-end">
              <div className="text-[10px] text-gray-500">
                Call for FREE Quote
              </div>
              <a 
                href="tel:9568540899" 
                className="text-xl font-bold text-orange-500 hover:text-orange-600 transition-colors"
              >
                (956) 854-0899
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header