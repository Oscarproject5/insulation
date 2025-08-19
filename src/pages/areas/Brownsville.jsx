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
  Waves,
  Sun,
  CloudRain,
  Anchor
} from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import PageFooter from '../../components/layout/PageFooter'
import MobileBottomNav from '../../components/common/MobileBottomNav'
import FloatingMenu from '../../components/common/FloatingMenu'
import MobileLocationLayout from '../../components/common/MobileLocationLayout'
import SEOHead from '../../components/common/SEOHead'
import { NearbyLocations, RelatedServices } from '../../components/common/InternalLinks'
import { siteConfig } from '../../data/siteConfig'

const Brownsville = () => {
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
        cityName="Brownsville"
        subtitle="Southernmost city in Texas"
        population="186,000"
        heroGradient="from-blue-600 via-sky-500 to-cyan-400"
        heroIcon={Anchor}
        heroPattern="waves"
      >
        {({ activeTab }) => {
          switch (activeTab) {
            case 'overview':
              return (
                <div className="p-4 space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-600">About Brownsville</h3>
                    <p className="text-gray-700 mb-4">
                      Brownsville is the southernmost city in Texas with 186,000 residents. Located on the Gulf Coast, 
                      it experiences unique coastal climate challenges including extreme heat, high humidity, and salt air.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The city's coastal subtropical climate with 95°F summers and 75% humidity makes proper insulation 
                      critical for energy efficiency and protection from moisture-related issues.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-700 mb-2">Coastal Climate Facts:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Humid subtropical climate</li>
                        <li>• Summer average: 95°F</li>
                        <li>• Humidity level: High (75%)</li>
                        <li>• Salt air corrosion concerns</li>
                      </ul>
                    </div>
                  </div>
                  <NearbyLocations currentLocation="/areas/brownsville" isMobile={true} />
                  <RelatedServices currentService="" isMobile={true} />
                </div>
              )
            case 'services':
              return (
                <div className="p-4 space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-600">Our Brownsville Services</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-lg">Spray Foam Insulation</h4>
                        <p className="text-gray-600 text-sm">Superior air sealing and moisture control - perfect for Brownsville's 75% humidity</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-lg">Blown-In Insulation</h4>
                        <p className="text-gray-600 text-sm">Cost-effective solution for attics in older Brownsville homes</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-lg">Fiberglass Insulation</h4>
                        <p className="text-gray-600 text-sm">Traditional insulation upgraded for coastal conditions</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-lg">Radiant Barrier</h4>
                        <p className="text-gray-600 text-sm">Essential for Brownsville's intense sun exposure</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            case 'neighborhoods':
              return (
                <div className="p-4 space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-600">Areas We Serve</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">Major Landmarks</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Gladys Porter Zoo</li>
                          <li>• Historic Downtown</li>
                          <li>• University of Texas RGV</li>
                          <li>• Port of Brownsville</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">Neighborhoods</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Downtown Brownsville</li>
                          <li>• Southmost</li>
                          <li>• North Brownsville</li>
                          <li>• Cameron Park</li>
                          <li>• Villa Nueva</li>
                          <li>• Los Ebanos</li>
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
                    <h3 className="text-xl font-bold mb-4 text-blue-600">Contact Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Brownsville Office</h4>
                        <p className="text-gray-700 text-sm mb-1">Serving all Cameron County</p>
                        <p className="text-gray-700 text-sm">Phone: (956) 854-0899</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Response Time</h4>
                        <p className="text-gray-700 text-sm">Same-day callbacks • 30-minute average response</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Service Areas</h4>
                        <p className="text-gray-700 text-sm">ZIP: 78520-78526 • Population: 186,738</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-700 mb-2">Coastal Climate Specialists</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Over 10 years serving Brownsville</li>
                          <li>• Coastal humidity expertise</li>
                          <li>• Salt air protection solutions</li>
                          <li>• Hurricane-resistant materials</li>
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
        title="Insulation Contractors Brownsville TX | Coastal Climate Solutions"
        description="Expert insulation services in Brownsville, TX. Specialized in coastal climate protection, moisture barriers, and energy efficiency. Serving Cameron County since 2015."
        keywords="Brownsville insulation, insulation Brownsville TX, coastal insulation, Cameron County insulation"
        canonicalUrl="https://valleyinsulation.com/areas/brownsville"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Valley Insulation - Brownsville",
          "description": "Expert insulation services in Brownsville, TX. Specialized in coastal climate protection, moisture barriers, and energy efficiency.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Brownsville",
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
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="container mx-auto max-w-7xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <Link to="/locations" className="hover:text-blue-600">Service Areas</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Brownsville, TX</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <MapPin className="h-4 w-4" />
                  Serving Brownsville & Cameron County
                </div>

                {/* H1 - Primary Keyword + Location */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Insulation Services in Brownsville, TX
                </h1>

                {/* Intro Paragraph */}
                <p className="text-xl text-gray-600 mb-8">
                  Valley Insulation Pros provides expert attic and home insulation services throughout Brownsville, TX, 
                  helping you stay cool in the summer and lower your energy bills. Our certified technicians specialize in 
                  coastal climate solutions, protecting your home from extreme heat, humidity, and salt air year-round.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`tel:${siteConfig.company.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
                    <span className="font-semibold">{siteConfig.company.reviewCount}+</span> Happy Customers in Brownsville
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <a href="#services" className="text-blue-600 hover:text-blue-700 underline">View Services</a>
                  <span className="text-gray-400">•</span>
                  <a href="#service-areas" className="text-blue-600 hover:text-blue-700 underline">Service Areas</a>
                  <span className="text-gray-400">•</span>
                  <a href="#why-insulation" className="text-blue-600 hover:text-blue-700 underline">Why Insulation?</a>
                  <span className="text-gray-400">•</span>
                  <a href="#free-quote" className="text-blue-600 hover:text-blue-700 underline">Get Free Quote</a>
                </div>
              </div>

              {/* Hero Image/Visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-blue-500 to-green-500 p-1 rounded-2xl">
                  <div className="bg-white rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-xl p-4 text-center">
                        <Thermometer className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold">Save 30%</div>
                        <div className="text-sm text-gray-600">On Energy Bills</div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4 text-center">
                        <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold">Same Day</div>
                        <div className="text-sm text-gray-600">Service Available</div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4 text-center">
                        <Waves className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <div className="font-semibold">Coastal</div>
                        <div className="text-sm text-gray-600">Climate Experts</div>
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Brownsville Residents Choose Valley Insulation Pros</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Over 10 Years Serving Brownsville</h3>
                <p className="text-gray-600">Trusted by thousands of local homeowners from Southmost to North Brownsville</p>
                <Link to="/services" className="text-blue-600 hover:text-blue-700 text-sm underline mt-2 inline-block">View All Services →</Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Coastal Climate Specialists</h3>
                <p className="text-gray-600">Energy-efficient materials perfect for humid, coastal climates like Brownsville</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fast, Clean, and Reliable</h3>
                <p className="text-gray-600">Same-day service with minimal disruption to your home or business</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Best Value Guarantee</h3>
                <p className="text-gray-600">Competitive pricing with financing options and energy rebate assistance</p>
                <a href="#free-quote" className="text-blue-600 hover:text-blue-700 text-sm underline mt-2 inline-block">Get Your Free Quote →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4">Insulation Services We Offer in Brownsville</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Complete range of insulation solutions designed specifically for Brownsville's coastal subtropical climate.
              <Link to="/services" className="text-blue-600 hover:text-blue-700 underline ml-2">Explore all our services</Link>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Spray Foam */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Spray Foam Insulation</h3>
                  <p className="text-gray-600 mb-4">Superior air sealing and moisture control - perfect for Brownsville's 75% humidity</p>
                  <Link to="/services" className="text-blue-600 hover:text-blue-700 text-sm font-medium">Learn More →</Link>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Blocks salt air corrosion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Prevents mold & mildew</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Hurricane wind resistance</span>
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
                  <h3 className="font-semibold text-xl mb-2">Blown-In Insulation</h3>
                  <p className="text-gray-600 mb-4">Cost-effective solution for attics in older Brownsville homes</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Quick installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Fills all gaps & voids</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Fire & pest resistant</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Fiberglass */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Fiberglass Insulation</h3>
                  <p className="text-gray-600 mb-4">Traditional insulation upgraded for coastal conditions</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Moisture-resistant facing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Sound dampening</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Budget-friendly option</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Radiant Barrier */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Radiant Barrier Installation</h3>
                  <p className="text-gray-600 mb-4">Essential for Brownsville's intense sun exposure</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Reduces attic temp by 30°F</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Cuts AC costs up to 17%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>UV protection for roof</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Landmarks & Climate Section */}
        <section id="service-areas" className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Serving Areas */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Serving All of Brownsville</h2>
                
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Popular Landmarks We Service Near
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Gladys Porter Zoo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Brownsville South Padre Airport</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Historic Downtown</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Sabal Palm Sanctuary</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Resaca de la Palma State Park</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>University of Texas RGV</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Sunrise Mall</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Port of Brownsville</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Building className="h-5 w-5 text-green-600" />
                    Neighborhoods We Serve
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Downtown Brownsville</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Southmost</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>North Brownsville</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>West Brownsville</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Cameron Park</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Los Ebanos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Villa Nueva</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Olmito</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Climate Challenges */}
              <div id="why-insulation">
                <h2 className="text-3xl font-bold mb-6">Why Brownsville Homes Need Quality Insulation</h2>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-orange-600" />
                    Brownsville Climate Facts
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Climate Type</div>
                      <div className="font-semibold">Humid Subtropical</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Summer Average</div>
                      <div className="font-semibold text-red-600">95°F</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Winter Average</div>
                      <div className="font-semibold text-blue-600">60°F</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Humidity Level</div>
                      <div className="font-semibold">High (75%)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold text-xl mb-4">Climate Challenges We Address</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Sun className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Extreme Heat</div>
                        <div className="text-sm text-gray-600">
                          Our insulation reduces heat transfer by up to 90%, keeping homes 20°F cooler
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Droplets className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <div className="font-medium">High Humidity</div>
                        <div className="text-sm text-gray-600">
                          Spray foam creates a moisture barrier preventing mold and wood rot
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Waves className="h-5 w-5 text-teal-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Coastal Weather</div>
                        <div className="text-sm text-gray-600">
                          Weather-resistant materials that withstand salt air and coastal conditions
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CloudRain className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Hurricane Season</div>
                        <div className="text-sm text-gray-600">
                          Strengthens structure and protects against wind-driven rain
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4">Our Brownsville Service Area</h2>
            <p className="text-center text-gray-600 mb-8">
              Serving all of Brownsville and surrounding Cameron County communities
            </p>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229394.2690984542!2d-97.62740905273435!3d25.95498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866fb5a7c985a739%3A0x5e92b3e5f2b3c6f5!2sBrownsville%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brownsville Service Area Map"
              ></iframe>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
                <MapPin className="h-8 w-8 text-blue-500" />
                <div>
                  <div className="font-semibold">ZIP: 78520-78526</div>
                  <div className="text-sm text-gray-600">Primary service areas</div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
                <Users className="h-8 w-8 text-green-500" />
                <div>
                  <div className="font-semibold">186,738</div>
                  <div className="text-sm text-gray-600">Population served</div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
                <Clock className="h-8 w-8 text-orange-500" />
                <div>
                  <div className="font-semibold">30 Min</div>
                  <div className="text-sm text-gray-600">Average response time</div>
                </div>
              </div>
            </div>

            {/* Additional Service Areas */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Also Serving Nearby Communities:</h3>
              <p className="text-gray-700">
                Los Fresnos, San Benito, La Feria, Los Indios, Cameron Park, Olmito, Rancho Viejo, 
                Laureles, and all surrounding areas within Cameron County. We're just a phone call away!
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/locations" className="text-blue-600 hover:text-blue-700 underline">View All Service Areas</Link>
                <span className="text-gray-400">•</span>
                <Link to="/" className="text-blue-600 hover:text-blue-700 underline">Back to Home</Link>
                <span className="text-gray-400">•</span>
                <a href="tel:9568540899" className="text-blue-600 hover:text-blue-700 underline">Call Now: (956) 854-0899</a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Cities Section */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-center mb-8">Explore Our Other Service Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Link to="/areas/mcallen" className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <div className="font-medium">McAllen</div>
                <div className="text-sm text-gray-600">78501</div>
              </Link>
              <Link to="/areas/edinburg" className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <div className="font-medium">Edinburg</div>
                <div className="text-sm text-gray-600">78539</div>
              </Link>
              <Link to="/areas/harlingen" className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <div className="font-medium">Harlingen</div>
                <div className="text-sm text-gray-600">78550</div>
              </Link>
              <Link to="/areas/mission" className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <div className="font-medium">Mission</div>
                <div className="text-sm text-gray-600">78572</div>
              </Link>
              <Link to="/areas/pharr" className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <div className="font-medium">Pharr</div>
                <div className="text-sm text-gray-600">78577</div>
              </Link>
              <Link to="/locations" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4 text-center transition-colors">
                <Users className="h-5 w-5 mx-auto mb-2" />
                <div className="font-medium">View All</div>
                <div className="text-sm">20+ Cities</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Service + Location Links Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Insulation Services for Brownsville</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Link to="/services/spray-foam" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">Spray Foam in Brownsville</h3>
                <p className="text-gray-600 text-sm">Perfect for coastal humidity and salt air protection</p>
                <span className="text-blue-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/attic" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">Attic Insulation Brownsville</h3>
                <p className="text-gray-600 text-sm">Stop the South Texas heat at its source</p>
                <span className="text-blue-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/blown-in" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">Blown-In Insulation Brownsville</h3>
                <p className="text-gray-600 text-sm">Fast, affordable solution for older Brownsville homes</p>
                <span className="text-blue-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/wall" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">Wall Insulation in Brownsville</h3>
                <p className="text-gray-600 text-sm">Complete protection from heat and humidity</p>
                <span className="text-blue-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/commercial" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">Commercial Insulation Brownsville</h3>
                <p className="text-gray-600 text-sm">Port area warehouses and businesses</p>
                <span className="text-blue-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services" className="group bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-2 border-blue-200">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">All Services</h3>
                <p className="text-gray-600 text-sm">View our complete range of insulation solutions</p>
                <span className="text-blue-600 text-sm font-bold mt-2 inline-block">View All →</span>
              </Link>
            </div>
            
            {/* Nearby Cities */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">We Also Serve These RGV Cities</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/areas/harlingen" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="font-medium group-hover:text-blue-600">Harlingen</span>
                  </div>
                  <span className="text-sm text-gray-500">25 miles</span>
                </Link>
                <Link to="/areas/mcallen" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="font-medium group-hover:text-blue-600">McAllen</span>
                  </div>
                  <span className="text-sm text-gray-500">58 miles</span>
                </Link>
                <Link to="/areas/edinburg" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="font-medium group-hover:text-blue-600">Edinburg</span>
                  </div>
                  <span className="text-sm text-gray-500">65 miles</span>
                </Link>
                <Link to="/areas/mission" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="font-medium group-hover:text-blue-600">Mission</span>
                  </div>
                  <span className="text-sm text-gray-500">62 miles</span>
                </Link>
                <Link to="/areas/pharr" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="font-medium group-hover:text-blue-600">Pharr</span>
                  </div>
                  <span className="text-sm text-gray-500">60 miles</span>
                </Link>
                <Link to="/locations" className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg hover:shadow-md transition-all group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-blue-600">All Locations</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-blue-600" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="free-quote" className="py-16 px-4 bg-gradient-to-br from-blue-600 to-green-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Your Free Insulation Quote Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of Brownsville homeowners who are saving money on energy bills
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <div className="font-semibold text-gray-900 mb-2">What You Get:</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Free home energy assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Detailed quote with ROI calculation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Energy rebate assistance</span>
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 mb-2">Quick Response:</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>Same-day callbacks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>Weekend appointments</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-gray-900">Call Now for Instant Quote</div>
                  <div className="text-gray-600">Speak with a local Brownsville expert</div>
                </div>
                
                <a
                  href={`tel:${siteConfig.company.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="h-6 w-6" />
                  {siteConfig.company.phone}
                </a>
                
                <div className="mt-4 text-center">
                  <Link to="/quote" className="text-blue-600 hover:underline font-medium">
                    Or request a quote online →
                  </Link>
                </div>
              </div>
            </div>

            {/* Special Offer Banner */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3">
                <Star className="h-6 w-6 text-yellow-400" />
                <span className="font-semibold">LIMITED TIME: 15% OFF for Brownsville Residents!</span>
                <Star className="h-6 w-6 text-yellow-400" />
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

export default Brownsville