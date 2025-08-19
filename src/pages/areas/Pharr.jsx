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
  Thermometer,
  DollarSign,
  Award,
  Users,
  Sun,
  Zap,
  TrendingUp,
  Factory,
  Package,
  Truck,
  Globe
} from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import PageFooter from '../../components/layout/PageFooter'
import MobileBottomNav from '../../components/common/MobileBottomNav'
import FloatingMenu from '../../components/common/FloatingMenu'
import MobileLocationLayout from '../../components/common/MobileLocationLayout'
import SEOHead from '../../components/common/SEOHead'
import { NearbyLocations, RelatedServices } from '../../components/common/InternalLinks'
import { siteConfig } from '../../data/siteConfig'

const Pharr = () => {
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
        cityName="Pharr"
        subtitle="Gateway to Mexico"
        population="79,000"
        heroGradient="from-red-500 via-rose-500 to-pink-500"
        heroIcon={Globe}
        heroPattern="cityscape"
      >
        {({ activeTab }) => {
          switch (activeTab) {
            case 'overview':
              return (
                <div className="p-4 space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-purple-600">About Pharr</h3>
                    <p className="text-gray-700 mb-4">
                      Pharr is known as the "Gateway to Mexico" with a population of 79,000. It's a major international 
                      trade hub with the Pharr International Bridge and numerous warehouses and distribution centers.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The city experiences extreme heat with 103°F+ summers and faces unique challenges from industrial 
                      zones and high energy demand, making proper insulation critical for both residential and commercial properties.
                    </p>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-700 mb-2">Climate Challenges:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 103°F+ summers demand superior insulation</li>
                        <li>• High humidity: 70%+ requires moisture control</li>
                        <li>• Industrial zones with air quality considerations</li>
                        <li>• Peak cooling loads strain energy systems</li>
                      </ul>
                    </div>
                  </div>
                  <NearbyLocations currentLocation="/areas/pharr" isMobile={true} />
                  <RelatedServices currentService="" isMobile={true} />
                </div>
              )
            case 'services':
              return (
                <div className="p-4 space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-purple-600">Our Pharr Services</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-lg">Spray Foam Insulation</h4>
                        <p className="text-gray-600 text-sm">Ultimate protection for Pharr's extreme conditions</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-lg">Attic Insulation</h4>
                        <p className="text-gray-600 text-sm">Critical defense against Pharr's scorching heat</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-lg">Blown-In Insulation</h4>
                        <p className="text-gray-600 text-sm">Fast, effective solution for Pharr attics</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-lg">Commercial Insulation</h4>
                        <p className="text-gray-600 text-sm">Industrial-scale solutions for Pharr businesses</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            case 'neighborhoods':
              return (
                <div className="p-4 space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-purple-600">Areas We Serve</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-600 mb-2">North Pharr</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Las Milpas</li>
                          <li>• Pharr Town Center</li>
                          <li>• Siesta Village</li>
                          <li>• Cage Boulevard Area</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-600 mb-2">Central Pharr</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Downtown Pharr</li>
                          <li>• El Oso</li>
                          <li>• Kelly Park Area</li>
                          <li>• Business 83 Corridor</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-600 mb-2">South Pharr</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Pharr International Bridge</li>
                          <li>• Las Americas</li>
                          <li>• Dicker Road Area</li>
                          <li>• Hidalgo Avenue</li>
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
                    <h3 className="text-xl font-bold mb-4 text-purple-600">Contact Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Pharr Office</h4>
                        <p className="text-gray-700 text-sm mb-1">Serving Pharr & Central Hidalgo County</p>
                        <p className="text-gray-700 text-sm">Phone: (956) 854-0899</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Response Time</h4>
                        <p className="text-gray-700 text-sm">Same-day quotes • Quick response for Pharr</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Specializations</h4>
                        <p className="text-gray-700 text-sm">Warehouse insulation • Trade zone facilities • Industrial properties</p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-700 mb-2">Why Choose Us?</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 450+ projects in Pharr</li>
                          <li>• Warehouse specialists</li>
                          <li>• EPA certified professionals</li>
                          <li>• Business incentive experts</li>
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
        title="Insulation Services Pharr TX | Commercial & Residential"
        description="Leading insulation contractor in Pharr, TX. Warehouse, industrial, and residential insulation. International trade zone expertise. Call for free consultation."
        keywords="Pharr insulation, insulation Pharr TX, warehouse insulation Pharr, industrial insulation"
        canonicalUrl="https://valleyinsulation.com/areas/pharr"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Valley Insulation - Pharr",
          "description": "Leading insulation contractor in Pharr, TX. Warehouse, industrial, and residential insulation.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pharr",
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
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="container mx-auto max-w-7xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link to="/" className="hover:text-purple-600">Home</Link>
              <span>/</span>
              <Link to="/locations" className="hover:text-purple-600">Locations</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Pharr, TX</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <MapPin className="h-4 w-4" />
                  Serving Pharr & Central Hidalgo County
                </div>

                {/* H1 - Primary Keyword + Location */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Insulation Services in Pharr, TX
                </h1>

                {/* Intro Paragraph */}
                <p className="text-xl text-gray-600 mb-8">
                  Valley Insulation Pros is Pharr's leading insulation contractor, providing cutting-edge spray foam, 
                  blown-in, and attic insulation solutions. From Downtown Pharr to Las Milpas, we help residential 
                  and commercial properties reduce energy costs by up to 40% while maintaining year-round comfort 
                  in our challenging South Texas climate.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`tel:${siteConfig.company.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
                    <span className="font-semibold">450+</span> Projects in Pharr
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <a href="#services" className="text-purple-600 hover:text-purple-700 underline">View Services</a>
                  <span className="text-gray-400">•</span>
                  <a href="#neighborhoods" className="text-purple-600 hover:text-purple-700 underline">Neighborhoods We Serve</a>
                  <span className="text-gray-400">•</span>
                  <a href="#why-insulation" className="text-purple-600 hover:text-purple-700 underline">Why Insulation?</a>
                  <span className="text-gray-400">•</span>
                  <a href="#free-quote" className="text-purple-600 hover:text-purple-700 underline">Get Free Quote</a>
                </div>
              </div>

              {/* Hero Image/Visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-purple-500 to-blue-500 p-1 rounded-2xl">
                  <div className="bg-white rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-purple-50 rounded-xl p-4 text-center">
                        <Thermometer className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="font-semibold">Save 40%</div>
                        <div className="text-sm text-gray-600">On Energy Bills</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 text-center">
                        <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold">Same Day</div>
                        <div className="text-sm text-gray-600">Service Available</div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4 text-center">
                        <Factory className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <div className="font-semibold">Industrial</div>
                        <div className="text-sm text-gray-600">Specialists</div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4 text-center">
                        <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold">EPA</div>
                        <div className="text-sm text-gray-600">Certified</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    <span className="font-semibold">Free Estimates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Pharr Chooses Valley Insulation Pros</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Pharr's Trusted Expert</h3>
                <p className="text-gray-600">Serving Pharr families and businesses with excellence since 2010</p>
                <Link to="/services" className="text-purple-600 hover:text-purple-700 text-sm underline mt-2 inline-block">View All Services →</Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Warehouse Specialists</h3>
                <p className="text-gray-600">Expert insulation for Pharr's industrial and logistics sector</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Trade Zone Ready</h3>
                <p className="text-gray-600">Specialized solutions for international trade facilities</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Business Incentives</h3>
                <p className="text-gray-600">We help navigate commercial energy rebates and tax benefits</p>
                <a href="#free-quote" className="text-purple-600 hover:text-purple-700 text-sm underline mt-2 inline-block">Get Your Free Quote →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4">Insulation Services We Offer in Pharr</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Complete insulation solutions designed for Pharr's diverse residential and commercial needs.
              <Link to="/services" className="text-purple-600 hover:text-purple-700 underline ml-2">Explore all our services</Link>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Spray Foam */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    <Link to="/services/spray-foam" className="hover:text-purple-600">Spray Foam Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Ultimate protection for Pharr's extreme conditions</p>
                  <Link to="/services/spray-foam" className="text-purple-600 hover:text-purple-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Superior air sealing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Moisture protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>50-year lifespan</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Attic Insulation */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    <Link to="/services/attic" className="hover:text-purple-600">Attic Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Critical defense against Pharr's scorching heat</p>
                  <Link to="/services/attic" className="text-purple-600 hover:text-purple-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Cut cooling costs 40%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Reduce attic temps 30°F</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Protect HVAC systems</span>
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
                    <Link to="/services/blown-in" className="hover:text-purple-600">Blown-In Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Fast, effective solution for Pharr attics</p>
                  <Link to="/services/blown-in" className="text-purple-600 hover:text-purple-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Same-day installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Fills all gaps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Budget-friendly</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Commercial */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    <Link to="/services/commercial" className="hover:text-purple-600">Commercial Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Industrial-scale solutions for Pharr businesses</p>
                  <Link to="/services/commercial" className="text-purple-600 hover:text-purple-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Warehouse specialists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Off-hours installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Volume discounts</span>
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
            <h2 className="text-3xl font-bold text-center mb-4">Pharr Neighborhoods We Serve</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              From established Downtown Pharr to growing Las Milpas, we provide comprehensive 
              insulation services throughout the entire city.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-purple-600">North Pharr</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                    <span>Las Milpas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                    <span>Pharr Town Center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                    <span>Siesta Village</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                    <span>Cage Boulevard Area</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-purple-600">Central Pharr</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                    <span>Downtown Pharr</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                    <span>El Oso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                    <span>Kelly Park Area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                    <span>Business 83 Corridor</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-purple-600">South Pharr</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                    <span>Pharr International Bridge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                    <span>Las Americas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                    <span>Dicker Road Area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                    <span>Hidalgo Avenue</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Also serving nearby areas: <Link to="/areas/mcallen" className="text-purple-600 hover:text-purple-700 underline">McAllen</Link>, 
                <Link to="/areas/mission" className="text-purple-600 hover:text-purple-700 underline"> Mission</Link>, 
                <Link to="/areas/edinburg" className="text-purple-600 hover:text-purple-700 underline"> Edinburg</Link>, 
                San Juan, Alamo, and Hidalgo
              </p>
              <Link to="/locations" className="text-purple-600 hover:text-purple-700 underline font-medium">
                View All Service Areas →
              </Link>
            </div>
          </div>
        </section>

        {/* Why Insulation Section */}
        <section id="why-insulation" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Pharr Properties Need Quality Insulation</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Sun className="h-6 w-6 text-orange-500" />
                  Pharr's Climate Challenges
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>103°F+ summers:</strong> Extreme heat demands superior insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>High humidity:</strong> 70%+ humidity requires moisture control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Industrial zones:</strong> Additional air quality considerations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Energy demand:</strong> Peak cooling loads strain systems</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                  Benefits for Pharr Properties
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>40% energy savings:</strong> Significant utility bill reduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Indoor air quality:</strong> Better filtration and ventilation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Equipment protection:</strong> Reduce HVAC wear and tear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Property value:</strong> Energy efficiency increases value</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Pharr Energy Savings Calculator</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold">$345</div>
                  <div className="text-purple-100">Average Monthly Bill (Before)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$207</div>
                  <div className="text-purple-100">After Insulation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$1,656</div>
                  <div className="text-purple-100">Annual Savings</div>
                </div>
              </div>
              <Link to="/quote" className="inline-block bg-white text-purple-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Calculate Your Savings
              </Link>
            </div>
          </div>
        </section>

        {/* Service + Location Links Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Our Pharr Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Link to="/services/spray-foam" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600">Spray Foam in Pharr</h3>
                <p className="text-gray-600 text-sm">Premium insulation for maximum efficiency in Pharr</p>
                <span className="text-purple-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/attic" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600">Attic Insulation in Pharr</h3>
                <p className="text-gray-600 text-sm">Essential protection from Texas heat for Pharr homes</p>
                <span className="text-purple-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/blown-in" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600">Blown-In Insulation Pharr</h3>
                <p className="text-gray-600 text-sm">Quick, affordable insulation for Pharr properties</p>
                <span className="text-purple-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/wall" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600">Wall Insulation in Pharr</h3>
                <p className="text-gray-600 text-sm">Complete thermal envelope for Pharr buildings</p>
                <span className="text-purple-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/commercial" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600">Commercial Insulation Pharr</h3>
                <p className="text-gray-600 text-sm">Industrial solutions for Pharr warehouses and businesses</p>
                <span className="text-purple-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services" className="group bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-2 border-purple-200">
                <h3 className="font-semibold text-lg mb-2 text-purple-600">All Insulation Services</h3>
                <p className="text-gray-600 text-sm">View our complete range of solutions</p>
                <span className="text-purple-600 text-sm font-bold mt-2 inline-block">View All Services →</span>
              </Link>
            </div>
            
            {/* Nearby Cities */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Insulation Services in Nearby Cities</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/areas/mcallen" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-purple-500" />
                    <span className="font-medium group-hover:text-purple-600">McAllen</span>
                  </div>
                  <span className="text-sm text-gray-500">5 miles</span>
                </Link>
                <Link to="/areas/mission" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-purple-500" />
                    <span className="font-medium group-hover:text-purple-600">Mission</span>
                  </div>
                  <span className="text-sm text-gray-500">8 miles</span>
                </Link>
                <Link to="/areas/edinburg" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-purple-500" />
                    <span className="font-medium group-hover:text-purple-600">Edinburg</span>
                  </div>
                  <span className="text-sm text-gray-500">15 miles</span>
                </Link>
                <Link to="/areas/harlingen" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-purple-500" />
                    <span className="font-medium group-hover:text-purple-600">Harlingen</span>
                  </div>
                  <span className="text-sm text-gray-500">43 miles</span>
                </Link>
                <Link to="/areas/brownsville" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-purple-500" />
                    <span className="font-medium group-hover:text-purple-600">Brownsville</span>
                  </div>
                  <span className="text-sm text-gray-500">63 miles</span>
                </Link>
                <Link to="/locations" className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:shadow-md transition-all group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-purple-600" />
                    <span className="font-medium text-purple-600">All Locations</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-purple-600" />
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
              Join hundreds of Pharr property owners who have reduced their cooling costs with professional insulation. 
              Get your free, no-obligation quote today.
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <Clock className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Quick Response</h3>
                  <p className="text-sm text-gray-600">Same-day quotes for Pharr</p>
                </div>
                <div>
                  <Shield className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Licensed & Insured</h3>
                  <p className="text-sm text-gray-600">EPA certified professionals</p>
                </div>
                <div>
                  <Award className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Guaranteed Quality</h3>
                  <p className="text-sm text-gray-600">100% satisfaction promise</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${siteConfig.company.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: {siteConfig.company.phone}
                </a>
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 border-2 border-purple-500 text-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
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

export default Pharr