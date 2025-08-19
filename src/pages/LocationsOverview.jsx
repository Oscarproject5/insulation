import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MapPin, Users, Clock, Truck, ArrowRight, Navigation, Star, ChevronRight, Phone, Home, TrendingUp } from 'lucide-react'
import { serviceAreas, siteConfig } from '../data/siteConfig'
import PageHeader from '../components/layout/PageHeader'
import PageFooter from '../components/layout/PageFooter'
import MobileBottomNav from '../components/common/MobileBottomNav'
import FloatingMenu from '../components/common/FloatingMenu'

const LocationsOverview = () => {
  return (
    <>
      <Helmet>
        <title>Service Areas - Insulation Services Across Rio Grande Valley | Valley Insulation Pros</title>
        <meta name="description" content="Professional insulation services in McAllen, Edinburg, Brownsville, Harlingen, Mission, and Pharr. Serving the entire Rio Grande Valley with same-day service." />
      </Helmet>

      <PageHeader />

      {/* Mobile App Style Layout */}
      <div className="min-h-screen bg-gray-50 lg:hidden">
        {/* Hero Section - App Header Style */}
        <div className="bg-gradient-to-b from-blue-500 to-blue-600 text-white">
          <div className="px-4 pt-32 pb-8">
            {/* Status Bar Style Info */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs opacity-90 bg-white/20 px-2 py-1 rounded-full">📍 20+ Cities</span>
              <span className="text-xs opacity-90">Same Day Service</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-2xl font-bold mb-2">Service Areas</h1>
            <p className="text-white/90 text-sm mb-6">We serve the entire Rio Grande Valley</p>
            
            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="h-4 w-4 text-white/90 flex-shrink-0" />
                  <span className="text-xl sm:text-2xl font-bold text-white">1.4M+</span>
                </div>
                <p className="text-xs text-white/90 leading-tight">Population Served</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="h-4 w-4 text-white/90 flex-shrink-0" />
                  <span className="text-xl sm:text-2xl font-bold text-white">3,500+</span>
                </div>
                <p className="text-xs text-white/90 leading-tight">Homes Insulated</p>
              </div>
            </div>
          </div>
          
          {/* Curved Bottom Edge */}
          <div className="h-6 bg-gray-50 rounded-t-3xl"></div>
        </div>

        {/* Cities List - Mobile App Cards */}
        <div className="px-4 pb-32 -mt-6">
          {/* Map Preview Card */}
          <div className="mb-4">
            <div className="bg-gradient-to-r from-teal-500 to-green-600 rounded-2xl p-4 text-white shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">Coverage Map</span>
                <Navigation className="h-5 w-5 text-white/80" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Full Valley Coverage</h3>
              <p className="text-sm text-white/90 mb-4 leading-relaxed">From Brownsville to Mission, we've got you covered</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                  <p className="text-xs font-semibold text-white">East</p>
                  <p className="text-xs text-white/90">Brownsville</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                  <p className="text-xs font-semibold text-white">Central</p>
                  <p className="text-xs text-white/90">McAllen</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                  <p className="text-xs font-semibold text-white">West</p>
                  <p className="text-xs text-white/90">Mission</p>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Cities */}
          <div className="mb-4">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Primary Service Areas</h2>
            <div className="space-y-3">
              {serviceAreas.map((area) => (
                <Link
                  key={area.id}
                  to={`/areas/${area.slug}`}
                  className="block bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      {/* City Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      
                      {/* City Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {area.name}, TX
                          </h3>
                          {area.id === 'mcallen' && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">HQ</span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                          <span>Pop: {area.population}</span>
                          <span>•</span>
                          <span>ZIP: {area.zip}</span>
                        </div>
                        
                        {/* Service Info */}
                        <div className="flex gap-2">
                          <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full">Same Day</span>
                          <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full">Free Quote</span>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-3" />
                    </div>
                  </div>
                  
                  {/* Distance Bar */}
                  {area.id === 'mcallen' && (
                    <div className="h-1 bg-gradient-to-r from-green-400 to-green-500"></div>
                  )}
                  {area.id === 'edinburg' && (
                    <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-500"></div>
                  )}
                  {area.id === 'brownsville' && (
                    <div className="h-1 bg-gradient-to-r from-purple-400 to-purple-500"></div>
                  )}
                  {area.id === 'harlingen' && (
                    <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                  )}
                  {area.id === 'mission' && (
                    <div className="h-1 bg-gradient-to-r from-teal-400 to-teal-500"></div>
                  )}
                  {area.id === 'pharr' && (
                    <div className="h-1 bg-gradient-to-r from-pink-400 to-pink-500"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Cities */}
          <div className="mb-6">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Also Serving</h2>
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex flex-wrap gap-2">
                {['Alamo', 'Alton', 'Donna', 'Elsa', 'Hidalgo', 'La Joya', 'Mercedes', 'Palmview', 'Penitas', 'Progreso'].map((city) => (
                  <span key={city} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {city}
                  </span>
                ))}
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                  +10 more
                </span>
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div className="mb-6">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Why Choose Us</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <Clock className="h-8 w-8 text-orange-500 mb-2" />
                <p className="text-xs font-semibold text-gray-900">Same Day</p>
                <p className="text-xs text-gray-500">Fast response</p>
              </div>
              
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <Truck className="h-8 w-8 text-blue-500 mb-2" />
                <p className="text-xs font-semibold text-gray-900">Free Inspection</p>
                <p className="text-xs text-gray-500">No obligation</p>
              </div>
              
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <Users className="h-8 w-8 text-green-500 mb-2" />
                <p className="text-xs font-semibold text-gray-900">Local Teams</p>
                <p className="text-xs text-gray-500">In your area</p>
              </div>
              
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <Home className="h-8 w-8 text-purple-500 mb-2" />
                <p className="text-xs font-semibold text-gray-900">3,500+ Homes</p>
                <p className="text-xs text-gray-500">Valley trusted</p>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">We Come to You</h3>
                  <p className="text-xs text-gray-600">No matter where you are in the Valley, our local teams are ready to serve you with same-day service available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call Button - Scrolls with content */}
        <div className="flex justify-center mt-6 mb-6">
          <a
            href={`tel:${siteConfig.company.phoneRaw}`}
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full shadow-lg hover:shadow-xl transition-all group hover:scale-110"
          >
            <Phone className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* Bottom Bar - App Style */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30 lg:hidden">
          <div className="px-4 py-3">
            <a
              href={`tel:${siteConfig.company.phoneRaw}`}
              className="block w-full bg-gradient-to-r from-blue-500 to-teal-600 text-white text-center py-3 rounded-2xl font-semibold text-sm shadow-lg"
            >
              Schedule Free Inspection: {siteConfig.company.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <section className="px-4 pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white min-h-screen">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-semibold mb-3">
                    <Navigation className="h-4 w-4" />
                    Serving 20+ Cities Across RGV
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">
                    Professional Service in Every RGV City
                  </h1>
                  <p className="text-lg text-gray-600">
                    Same-day service, local teams, and guaranteed satisfaction in your neighborhood.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">20+ Cities</div>
                      <div className="text-sm text-gray-600">Full coverage</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">1.4M+</div>
                      <div className="text-sm text-gray-600">Population served</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.id}
                      to={`/areas/${area.slug}`}
                      className="group flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-200 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {area.name}, TX
                            {area.id === 'mcallen' && (
                              <span className="ml-2 bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">HQ</span>
                            )}
                          </h3>
                          <p className="text-sm text-gray-600">Population: {area.population} • ZIP: {area.zip}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Also serving:</span> Alamo, Alton, Donna, Elsa, Hidalgo, La Joya, Mercedes, Palmview, Penitas, Progreso, and 10+ more cities.
                  </p>
                </div>

                <div>
                  <a
                    href={`tel:${siteConfig.company.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Free Inspection: {siteConfig.company.phone}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-100 rounded-full opacity-60"></div>
                  
                  <div className="relative bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 p-1 rounded-3xl shadow-2xl">
                    <div className="bg-white rounded-3xl overflow-hidden">
                      <div className="aspect-[16/10] bg-gradient-to-br from-teal-50 to-blue-50 relative p-8">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <MapPin className="h-10 w-10 text-teal-600" />
                          </div>
                          <p className="text-gray-600 font-medium text-lg">Rio Grande Valley Area</p>
                          <div className="mt-6 grid grid-cols-3 gap-4">
                            {serviceAreas.slice(0, 3).map((area) => (
                              <div key={area.id} className="bg-white/80 rounded-lg p-3">
                                <p className="font-semibold text-sm">{area.name}</p>
                                <p className="text-xs text-gray-500">{area.population}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <PageFooter />
      <FloatingMenu />
      <MobileBottomNav />
    </>
  )
}

export default LocationsOverview