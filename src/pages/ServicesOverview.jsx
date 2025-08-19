import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Zap, DollarSign, Shield, Clock, Sparkles, ChevronRight, Home, Star, TrendingUp, Users } from 'lucide-react'
import { services, siteConfig } from '../data/siteConfig'
import PageHeader from '../components/layout/PageHeader'
import PageFooter from '../components/layout/PageFooter'
import MobileBottomNav from '../components/common/MobileBottomNav'
import FloatingMenu from '../components/common/FloatingMenu'

const ServicesOverview = () => {
  return (
    <>
      <Helmet>
        <title>Insulation Services in Rio Grande Valley | Valley Insulation Pros</title>
        <meta name="description" content="Professional insulation services in RGV. Save up to 40% on energy bills with spray foam, blown-in, attic, and wall insulation. Free quotes available." />
      </Helmet>

      <PageHeader />

      {/* Mobile App Style Layout */}
      <div className="min-h-screen bg-gray-50 lg:hidden">
        {/* Hero Section - App Header Style */}
        <div className="bg-gradient-to-b from-orange-500 to-orange-600 text-white">
          <div className="px-4 pt-32 pb-8">
            {/* Status Bar Style Info */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs opacity-90 bg-white/20 px-2 py-1 rounded-full">⚡ Same Day Service</span>
              <span className="text-xs opacity-90">Licensed & Insured</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-2xl font-bold mb-2">Our Services</h1>
            <p className="text-white/90 text-sm mb-6">Professional insulation solutions for your home</p>
            
            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-2xl font-bold">40%</span>
                </div>
                <p className="text-xs text-white/90">Energy Savings</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="h-4 w-4" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p className="text-xs text-white/90">Customer Rating</p>
              </div>
            </div>
          </div>
          
          {/* Curved Bottom Edge */}
          <div className="h-6 bg-gray-50 rounded-t-3xl"></div>
        </div>

        {/* Services List - Mobile App Cards */}
        <div className="px-4 pb-32 -mt-6">
          {/* Featured Service Card */}
          <div className="mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-4 text-white shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">Most Popular</span>
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Free Energy Audit</h3>
              <p className="text-sm text-white/90 mb-4 leading-relaxed">Discover your home's energy-saving potential</p>
              <Link 
                to="/services/energy-efficiency"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Learn More <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Service Categories */}
          <div className="mb-4">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">All Services</h2>
            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="block bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      {/* Service Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      
                      {/* Service Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {service.shortDescription}
                        </p>
                        
                        {/* Service Tags */}
                        {service.id === 'spray-foam' && (
                          <div className="flex gap-2 mt-2">
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">Best Value</span>
                            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">EPA Certified</span>
                          </div>
                        )}
                        {service.id === 'attic' && (
                          <div className="flex gap-2 mt-2">
                            <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">Popular</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Arrow */}
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-colors flex-shrink-0 mt-3" />
                    </div>
                  </div>
                  
                  {/* Progress Bar (showing availability) */}
                  <div className="h-1 bg-gray-100">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-500" style={{width: '85%'}}></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${siteConfig.company.phoneRaw}`}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all text-center group"
              >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Shield className="h-5 w-5 text-orange-600" />
                </div>
                <p className="text-xs font-semibold text-gray-900">Get Quote</p>
                <p className="text-xs text-gray-500">Free estimate</p>
              </a>
              
              <Link
                to="/areas/mcallen"
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all text-center group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Home className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-xs font-semibold text-gray-900">Service Areas</p>
                <p className="text-xs text-gray-500">20+ cities</p>
              </Link>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Available Today</h3>
                  <p className="text-xs text-gray-600">Same-day service for urgent insulation needs</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">3,500+ Homes Served</h3>
                  <p className="text-xs text-gray-600">Trusted by families across the Valley</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call Button - Scrolls with content */}
        <div className="flex justify-center mt-6 mb-6">
          <a
            href={`tel:${siteConfig.company.phoneRaw}`}
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all group hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>

        {/* Bottom Bar - App Style */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30 lg:hidden">
          <div className="px-4 py-3">
            <a
              href={`tel:${siteConfig.company.phoneRaw}`}
              className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-3 rounded-2xl font-semibold text-sm shadow-lg"
            >
              Call Now: {siteConfig.company.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <section className="px-4 pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm font-semibold mb-3">
                    <Sparkles className="h-4 w-4" />
                    Save Up to 40% on Energy Bills
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">
                    Professional Insulation Services in RGV
                  </h1>
                  <p className="text-lg text-gray-600">
                    Expert installation across Rio Grande Valley. Licensed, insured, and guaranteed satisfaction.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">40% Savings</div>
                      <div className="text-sm text-gray-600">On energy bills</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Same Day</div>
                      <div className="text-sm text-gray-600">Service available</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="group flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-orange-200 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{service.icon}</span>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-sm text-gray-600">{service.shortDescription}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>

                <div>
                  <a
                    href={`tel:${siteConfig.company.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Get Free Quote: {siteConfig.company.phone}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl transform rotate-6"></div>
                  <div className="relative bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl overflow-hidden shadow-2xl p-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full flex items-center justify-center">
                      <svg viewBox="0 0 400 300" className="w-full h-full max-h-[300px]" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="#ffffff" strokeWidth="3" fill="none">
                          <path d="M 50 150 L 200 50 L 350 150" strokeLinecap="round" />
                          <rect x="50" y="160" width="300" height="120" rx="5" />
                          <rect x="90" y="190" width="50" height="50" rx="3" fill="#ffffff" fillOpacity="0.3" />
                          <rect x="260" y="190" width="50" height="50" rx="3" fill="#ffffff" fillOpacity="0.3" />
                          <rect x="175" y="210" width="50" height="70" rx="3" fill="#ffffff" fillOpacity="0.2" />
                        </g>
                      </svg>
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

export default ServicesOverview