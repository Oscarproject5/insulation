import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle, 
  Home,
  Droplets,
  Wind,
  Shield,
  Star,
  ArrowRight,
  Building,
  Building2,
  Thermometer,
  DollarSign,
  Award,
  Users,
  Sun,
  Zap,
  TrendingUp
} from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import PageFooter from '../../components/layout/PageFooter'
import MobileBottomNav from '../../components/common/MobileBottomNav'
import FloatingMenu from '../../components/common/FloatingMenu'
import MobileLocationLayout from '../../components/common/MobileLocationLayout'
import SEOHead from '../../components/common/SEOHead'
import { NearbyLocations, RelatedServices } from '../../components/common/InternalLinks'
import { siteConfig } from '../../data/siteConfig'

const McAllen = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  if (isMobile) {
    return (
      <MobileLocationLayout
        cityName="McAllen"
        subtitle="Largest city in Hidalgo County"
        population="144,000"
        heroGradient="from-emerald-500 via-teal-500 to-cyan-500"
        heroIcon={Building2}
        heroPattern="cityscape"
      >
        {({ activeTab }) => {
          switch (activeTab) {
            case 'overview':
              return (
                <div className="p-4 space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-orange-600">About McAllen</h3>
                    <p className="text-gray-700 mb-4">
                      McAllen is the largest city in Hidalgo County and a major commercial hub in the Rio Grande Valley. 
                      With over 144,000 residents, it's known for its shopping, healthcare facilities, and proximity to the Mexican border.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The city experiences extreme South Texas heat with summers reaching 100°F+ and high humidity levels 
                      year-round, making proper insulation essential for energy efficiency and comfort.
                    </p>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-700 mb-2">Climate Facts:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Summer temps: 100°F+</li>
                        <li>• Humidity: 70%+ average</li>
                        <li>• AC runs 9+ months/year</li>
                        <li>• Among highest energy costs in Texas</li>
                      </ul>
                    </div>
                  </div>
                  <NearbyLocations currentLocation="/areas/mcallen" isMobile={true} />
                  <RelatedServices currentService="" isMobile={true} />
                </div>
              )
            case 'services':
              return (
                <div className="p-4 space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-orange-600">Our McAllen Services</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-lg">Spray Foam Insulation</h4>
                        <p className="text-gray-600 text-sm">Maximum energy efficiency - reduce cooling costs by 40%</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-lg">Attic Insulation</h4>
                        <p className="text-gray-600 text-sm">Stop heat at the source - essential for McAllen's intense sun</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-lg">Blown-In Insulation</h4>
                        <p className="text-gray-600 text-sm">Quick, affordable solution perfect for McAllen attics</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-lg">Commercial Insulation</h4>
                        <p className="text-gray-600 text-sm">Serving McAllen businesses, warehouses, and offices</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            case 'neighborhoods':
              return (
                <div className="p-4 space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-orange-600">Areas We Serve</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">North McAllen</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Sharyland Plantation</li>
                          <li>• Bentsen Palm</li>
                          <li>• Country Club Estates</li>
                          <li>• Las Brisas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">Central McAllen</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Downtown McAllen</li>
                          <li>• Medical District</li>
                          <li>• La Quinta</li>
                          <li>• Vista Bonita</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">South McAllen</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• South 23rd Street Area</li>
                          <li>• Nolana Area</li>
                          <li>• Tres Lagos</li>
                          <li>• South Jackson Road</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            case 'contact':
              return (
                <div className="p-4 space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-orange-600">Contact Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">McAllen Office</h4>
                        <p className="text-gray-700 text-sm mb-1">Serving all McAllen neighborhoods</p>
                        <p className="text-gray-700 text-sm">Phone: (956) 854-0899</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Response Time</h4>
                        <p className="text-gray-700 text-sm">Same-day quotes • 30-minute emergency response</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Service Hours</h4>
                        <p className="text-gray-700 text-sm">Monday-Saturday: 7:00 AM - 6:00 PM</p>
                        <p className="text-gray-700 text-sm">Emergency service: 24/7</p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-700 mb-2">Why Choose Us?</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 500+ completed projects in McAllen</li>
                          <li>• EPA certified technicians</li>
                          <li>• Local crews stationed in McAllen</li>
                          <li>• Energy rebate assistance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            default:
              return null
          }
        }}
      </MobileLocationLayout>
    )
  }

  return (
    <>
      <SEOHead
        title="Insulation Services McAllen TX | Valley Insulation Contractors"
        description="Professional insulation contractors in McAllen, TX. Spray foam, blown-in, and attic insulation for homes and businesses. Free estimates, same-day service. Call (956) 854-0899."
        keywords="McAllen insulation, insulation contractors McAllen TX, spray foam McAllen, attic insulation McAllen"
        canonicalUrl="https://valleyinsulation.com/areas/mcallen"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Valley Insulation - McAllen",
          "description": "Professional insulation contractors in McAllen, TX. Spray foam, blown-in, and attic insulation for homes and businesses.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "McAllen",
            "addressRegion": "TX",
            "addressCountry": "US"
          },
          "telephone": "(956) 854-0899",
          "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-14:00"
        }}
      />

      <PageHeader />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 hidden lg:block">
        {/* Hero Section with H1 */}
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-orange-50 via-white to-red-50">
          <div className="container mx-auto max-w-7xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link to="/" className="hover:text-orange-600">Home</Link>
              <span>/</span>
              <Link to="/locations" className="hover:text-orange-600">Locations</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">McAllen, TX</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <MapPin className="h-4 w-4" />
                  Serving McAllen & Hidalgo County
                </div>

                {/* H1 - Primary Keyword + Location */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Insulation Services in McAllen, TX
                </h1>

                {/* Intro Paragraph */}
                <p className="text-xl text-gray-600 mb-8">
                  Valley Insulation Pros is McAllen's trusted insulation contractor, providing expert spray foam, blown-in, 
                  and attic insulation services throughout the city. From North McAllen to South McAllen, we help homeowners 
                  and businesses reduce energy costs by up to 40% while staying comfortable in our extreme South Texas heat.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`tel:${siteConfig.company.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="h-5 w-5" />
                    Call {siteConfig.company.phone}
                  </a>
                  <Link
                    to="/quote"
                    className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    Get Free Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 font-semibold">{siteConfig.company.rating} Stars</span>
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">500+</span> Projects in McAllen
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <a href="#services" className="text-orange-600 hover:text-orange-700 underline">View Services</a>
                  <span className="text-gray-400">•</span>
                  <a href="#neighborhoods" className="text-orange-600 hover:text-orange-700 underline">Neighborhoods We Serve</a>
                  <span className="text-gray-400">•</span>
                  <a href="#why-insulation" className="text-orange-600 hover:text-orange-700 underline">Why Insulation?</a>
                  <span className="text-gray-400">•</span>
                  <a href="#free-quote" className="text-orange-600 hover:text-orange-700 underline">Get Free Quote</a>
                </div>
              </div>

              {/* Hero Image/Visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-orange-500 to-red-500 p-1 rounded-2xl">
                  <div className="bg-white rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-orange-50 rounded-xl p-4 text-center">
                        <Thermometer className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <div className="font-semibold">Save 40%</div>
                        <div className="text-sm text-gray-600">On Energy Bills</div>
                      </div>
                      <div className="bg-red-50 rounded-xl p-4 text-center">
                        <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                        <div className="font-semibold">Same Day</div>
                        <div className="text-sm text-gray-600">Service Available</div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4 text-center">
                        <Building className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold">Local</div>
                        <div className="text-sm text-gray-600">McAllen Experts</div>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-4 text-center">
                        <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="font-semibold">EPA</div>
                        <div className="text-sm text-gray-600">Certified</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    <span className="font-semibold">24/7 Emergency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why McAllen Residents Choose Valley Insulation Pros</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">McAllen's Trusted Contractor</h3>
                <p className="text-gray-600">Serving McAllen families since 2010 with over 500 successful projects</p>
                <Link to="/services" className="text-orange-600 hover:text-orange-700 text-sm underline mt-2 inline-block">View All Services →</Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Beat the McAllen Heat</h3>
                <p className="text-gray-600">Specialized solutions for our 100°F+ summers and high humidity</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fast Response Time</h3>
                <p className="text-gray-600">Local crews stationed in McAllen for quick service throughout the city</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Energy Rebate Assistance</h3>
                <p className="text-gray-600">We help McAllen residents qualify for local utility rebates and tax incentives</p>
                <a href="#free-quote" className="text-orange-600 hover:text-orange-700 text-sm underline mt-2 inline-block">Get Your Free Quote →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4">Insulation Services We Offer in McAllen</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Comprehensive insulation solutions designed for McAllen's unique climate challenges.
              <Link to="/services" className="text-orange-600 hover:text-orange-700 underline ml-2">Explore all our services</Link>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Spray Foam */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    <Link to="/services/spray-foam" className="hover:text-orange-600">Spray Foam Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Maximum energy efficiency for McAllen homes - reduce cooling costs by 40%</p>
                  <Link to="/services/spray-foam" className="text-orange-600 hover:text-orange-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Complete air sealing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Moisture & mold prevention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Lifetime performance</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Attic Insulation */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    <Link to="/services/attic" className="hover:text-orange-600">Attic Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Stop heat at the source - essential for McAllen's intense sun</p>
                  <Link to="/services/attic" className="text-orange-600 hover:text-orange-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Reduce attic temps by 30°F</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Lower AC runtime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Extend HVAC lifespan</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Blown-In */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4">
                  <Wind className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    <Link to="/services/blown-in" className="hover:text-orange-600">Blown-In Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Quick, affordable solution perfect for McAllen attics</p>
                  <Link to="/services/blown-in" className="text-orange-600 hover:text-orange-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>4-6 hour installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Complete coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Fire resistant</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Commercial */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    <Link to="/services/commercial" className="hover:text-orange-600">Commercial Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Serving McAllen businesses, warehouses, and offices</p>
                  <Link to="/services/commercial" className="text-orange-600 hover:text-orange-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Weekend installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Volume pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Tax incentives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section id="neighborhoods" className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4">McAllen Neighborhoods We Serve</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              From North McAllen's newer developments to South McAllen's established neighborhoods, 
              we provide insulation services throughout the entire city.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-orange-600">North McAllen</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span>Sharyland Plantation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span>Bentsen Palm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span>Country Club Estates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span>Las Brisas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-orange-600">Central McAllen</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span>Downtown McAllen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span>Medical District</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span>La Quinta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span>Vista Bonita</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-orange-600">South McAllen</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span>South 23rd Street Area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span>Nolana Area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span>Tres Lagos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span>South Jackson Road</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Also serving nearby areas: <Link to="/areas/mission" className="text-orange-600 hover:text-orange-700 underline">Mission</Link>, 
                <Link to="/areas/edinburg" className="text-orange-600 hover:text-orange-700 underline">Edinburg</Link>, 
                <Link to="/areas/pharr" className="text-orange-600 hover:text-orange-700 underline">Pharr</Link>, 
                San Juan, Alamo, and Hidalgo
              </p>
              <Link to="/locations" className="text-orange-600 hover:text-orange-700 underline font-medium">
                View All Service Areas →
              </Link>
            </div>
          </div>
        </section>

        {/* Why Insulation Section */}
        <section id="why-insulation" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why McAllen Homes Need Proper Insulation</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Sun className="h-6 w-6 text-orange-500" />
                  McAllen's Climate Challenges
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>100°F+ summers:</strong> Extreme heat requires superior insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>70% humidity:</strong> Moisture control is essential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Year-round cooling:</strong> AC runs 9+ months per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Energy costs:</strong> Among highest in Texas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                  Benefits for McAllen Homeowners
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>40% energy savings:</strong> Lower monthly utility bills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Consistent comfort:</strong> Even temperatures throughout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Extended HVAC life:</strong> Less strain on your system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Increased home value:</strong> Better resale potential</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">McAllen Energy Savings Calculator</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold">$350</div>
                  <div className="text-orange-100">Average Monthly Bill (Before)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$210</div>
                  <div className="text-orange-100">After Insulation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$1,680</div>
                  <div className="text-orange-100">Annual Savings</div>
                </div>
              </div>
              <Link to="/quote" className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Calculate Your Savings
              </Link>
            </div>
          </div>
        </section>

        {/* Service + Location Links Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Our McAllen Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Link to="/services/spray-foam" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-600">Spray Foam in McAllen</h3>
                <p className="text-gray-600 text-sm">Premium insulation for maximum efficiency in McAllen homes</p>
                <span className="text-orange-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/attic" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-600">Attic Insulation in McAllen</h3>
                <p className="text-gray-600 text-sm">Stop the heat at its source with proper attic insulation</p>
                <span className="text-orange-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/blown-in" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-600">Blown-In Insulation McAllen</h3>
                <p className="text-gray-600 text-sm">Quick, affordable insulation for McAllen attics</p>
                <span className="text-orange-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/wall" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-600">Wall Insulation in McAllen</h3>
                <p className="text-gray-600 text-sm">Complete thermal envelope for your McAllen home</p>
                <span className="text-orange-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/commercial" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-600">Commercial Insulation McAllen</h3>
                <p className="text-gray-600 text-sm">Large-scale solutions for McAllen businesses</p>
                <span className="text-orange-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services" className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-2 border-orange-200">
                <h3 className="font-semibold text-lg mb-2 text-orange-600">All Insulation Services</h3>
                <p className="text-gray-600 text-sm">View our complete range of insulation solutions</p>
                <span className="text-orange-600 text-sm font-bold mt-2 inline-block">View All Services →</span>
              </Link>
            </div>
            
            {/* Nearby Cities */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Insulation Services in Nearby Cities</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/areas/edinburg" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span className="font-medium group-hover:text-orange-600">Edinburg</span>
                  </div>
                  <span className="text-sm text-gray-500">10 miles</span>
                </Link>
                <Link to="/areas/mission" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span className="font-medium group-hover:text-orange-600">Mission</span>
                  </div>
                  <span className="text-sm text-gray-500">6 miles</span>
                </Link>
                <Link to="/areas/pharr" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span className="font-medium group-hover:text-orange-600">Pharr</span>
                  </div>
                  <span className="text-sm text-gray-500">5 miles</span>
                </Link>
                <Link to="/areas/brownsville" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span className="font-medium group-hover:text-orange-600">Brownsville</span>
                  </div>
                  <span className="text-sm text-gray-500">58 miles</span>
                </Link>
                <Link to="/areas/harlingen" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span className="font-medium group-hover:text-orange-600">Harlingen</span>
                  </div>
                  <span className="text-sm text-gray-500">40 miles</span>
                </Link>
                <Link to="/locations" className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg hover:shadow-md transition-all group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span className="font-medium text-orange-600">All Locations</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-orange-600" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="free-quote" className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Save on Energy Bills?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of McAllen homeowners who have reduced their cooling costs with professional insulation. 
              Get your free, no-obligation quote today.
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Quick Response</h3>
                  <p className="text-sm text-gray-600">Same-day quotes for McAllen residents</p>
                </div>
                <div>
                  <Shield className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Licensed & Insured</h3>
                  <p className="text-sm text-gray-600">EPA certified, fully protected</p>
                </div>
                <div>
                  <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Satisfaction Guaranteed</h3>
                  <p className="text-sm text-gray-600">100% workmanship warranty</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${siteConfig.company.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: {siteConfig.company.phone}
                </a>
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Get Online Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
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

export default McAllen