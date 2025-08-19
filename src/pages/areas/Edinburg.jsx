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
  GraduationCap,
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

const Edinburg = () => {
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
        cityName="Edinburg"
        subtitle="County seat of Hidalgo County"
        population="101,000"
        heroGradient="from-purple-600 via-indigo-500 to-blue-500"
        heroIcon={GraduationCap}
        heroPattern="dots"
      >
        {({ activeTab }) => {
          switch (activeTab) {
            case 'overview':
              return (
                <div className="p-4 space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-600">About Edinburg</h3>
                    <p className="text-gray-700 mb-4">
                      Edinburg is the county seat of Hidalgo County with a population of 101,000. Home to the University of Texas 
                      Rio Grande Valley (UTRGV), it's a growing city with a mix of students, families, and businesses.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The city experiences extreme South Texas heat with summers reaching 100°F+ and high humidity. 
                      Proper insulation is crucial for the growing student population and new construction.
                    </p>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700 mb-2">Climate Challenges:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Growing population needing proper insulation</li>
                        <li>• Student housing with high turnover</li>
                        <li>• 100°F+ summers demanding superior insulation</li>
                        <li>• High humidity requiring moisture control</li>
                      </ul>
                    </div>
                  </div>
                  <NearbyLocations currentLocation="/areas/edinburg" isMobile={true} />
                  <RelatedServices currentService="" isMobile={true} />
                </div>
              )
            case 'services':
              return (
                <div className="p-4 space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-600">Our Edinburg Services</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-lg">Spray Foam Insulation</h4>
                        <p className="text-gray-600 text-sm">Premium solution for maximum energy efficiency in Edinburg homes</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-lg">Attic Insulation</h4>
                        <p className="text-gray-600 text-sm">Critical for Edinburg's intense heat - stop it at the source</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-lg">Blown-In Insulation</h4>
                        <p className="text-gray-600 text-sm">Fast, affordable solution perfect for older Edinburg homes</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-lg">Commercial Insulation</h4>
                        <p className="text-gray-600 text-sm">Serving UTRGV, offices, and Edinburg businesses</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            case 'neighborhoods':
              return (
                <div className="p-4 space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-600">Areas We Serve</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">North Edinburg</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• UTRGV Campus Area</li>
                          <li>• University Drive</li>
                          <li>• Monte Cristo Road</li>
                          <li>• Trenton Road Area</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Central Edinburg</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Downtown Edinburg</li>
                          <li>• Courthouse Square</li>
                          <li>• Business 281 Corridor</li>
                          <li>• Sugar Road Area</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">South Edinburg</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Veterans Boulevard</li>
                          <li>• Freddy Gonzalez Drive</li>
                          <li>• Schunior Street</li>
                          <li>• Chapin Road Area</li>
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
                    <h3 className="text-xl font-bold mb-4 text-green-600">Contact Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Edinburg Office</h4>
                        <p className="text-gray-700 text-sm mb-1">Serving Edinburg & UTRGV area</p>
                        <p className="text-gray-700 text-sm">Phone: (956) 854-0899</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Response Time</h4>
                        <p className="text-gray-700 text-sm">Same-day quotes • 30-minute response</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Student Discounts</h4>
                        <p className="text-gray-700 text-sm">Special rates for UTRGV students, staff, and faculty</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-700 mb-2">Why Choose Us?</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 300+ completed projects in Edinburg</li>
                          <li>• UTRGV campus community specialists</li>
                          <li>• EPA certified professionals</li>
                          <li>• Student housing expertise</li>
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
        title="Insulation Services Edinburg TX | Residential & Commercial"
        description="Top-rated insulation company in Edinburg, TX. Serving UTRGV area, student housing, and residential homes. Energy-efficient solutions with guaranteed savings."
        keywords="Edinburg insulation, insulation Edinburg TX, UTRGV insulation, Edinburg contractors"
        canonicalUrl="https://valleyinsulation.com/areas/edinburg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Valley Insulation - Edinburg",
          "description": "Top-rated insulation company in Edinburg, TX. Serving UTRGV area, student housing, and residential homes.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Edinburg",
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
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="container mx-auto max-w-7xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link to="/" className="hover:text-green-600">Home</Link>
              <span>/</span>
              <Link to="/locations" className="hover:text-green-600">Locations</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Edinburg, TX</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <MapPin className="h-4 w-4" />
                  Serving Edinburg & Hidalgo County
                </div>

                {/* H1 - Primary Keyword + Location */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Insulation Services in Edinburg, TX
                </h1>

                {/* Intro Paragraph */}
                <p className="text-xl text-gray-600 mb-8">
                  Valley Insulation Pros delivers expert insulation services to Edinburg homes and businesses, including the 
                  UTRGV campus area. Our spray foam, attic, and blown-in insulation solutions help Edinburg residents combat 
                  the extreme South Texas heat while reducing energy costs by up to 40%.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`tel:${siteConfig.company.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
                    <span className="font-semibold">300+</span> Projects in Edinburg
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <a href="#services" className="text-green-600 hover:text-green-700 underline">View Services</a>
                  <span className="text-gray-400">•</span>
                  <a href="#neighborhoods" className="text-green-600 hover:text-green-700 underline">Neighborhoods</a>
                  <span className="text-gray-400">•</span>
                  <a href="#why-insulation" className="text-green-600 hover:text-green-700 underline">Why Insulation?</a>
                  <span className="text-gray-400">•</span>
                  <a href="#free-quote" className="text-green-600 hover:text-green-700 underline">Get Quote</a>
                </div>
              </div>

              {/* Hero Image/Visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-green-500 to-blue-500 p-1 rounded-2xl">
                  <div className="bg-white rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-xl p-4 text-center">
                        <Thermometer className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold">Save 40%</div>
                        <div className="text-sm text-gray-600">On Energy Bills</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 text-center">
                        <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold">Same Day</div>
                        <div className="text-sm text-gray-600">Service</div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4 text-center">
                        <GraduationCap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <div className="font-semibold">UTRGV</div>
                        <div className="text-sm text-gray-600">Area Experts</div>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-4 text-center">
                        <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="font-semibold">Licensed</div>
                        <div className="text-sm text-gray-600">& Insured</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    <span className="font-semibold">24/7 Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Edinburg Chooses Valley Insulation Pros</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Edinburg's Local Expert</h3>
                <p className="text-gray-600">Proudly serving Edinburg families and businesses, including the UTRGV campus community</p>
                <Link to="/services" className="text-green-600 hover:text-green-700 text-sm underline mt-2 inline-block">View Services →</Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Residential & Commercial</h3>
                <p className="text-gray-600">From student housing to university buildings, we handle all property types</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Beat Edinburg Heat</h3>
                <p className="text-gray-600">Specialized solutions for our 100°F+ summers and high humidity levels</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Student Discounts</h3>
                <p className="text-gray-600">Special rates for UTRGV students, staff, and faculty members</p>
                <a href="#free-quote" className="text-green-600 hover:text-green-700 text-sm underline mt-2 inline-block">Get Quote →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4">Insulation Services in Edinburg</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Complete insulation solutions for Edinburg's growing residential and commercial sectors.
              <Link to="/services" className="text-green-600 hover:text-green-700 underline ml-2">Explore all services</Link>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Spray Foam */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    <Link to="/services/spray-foam" className="hover:text-green-600">Spray Foam Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Premium solution for maximum energy efficiency in Edinburg homes</p>
                  <Link to="/services/spray-foam" className="text-green-600 hover:text-green-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Air & moisture seal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>40% energy savings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Quality guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Attic */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    <Link to="/services/attic" className="hover:text-green-600">Attic Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Critical for Edinburg's intense heat - stop it at the source</p>
                  <Link to="/services/attic" className="text-green-600 hover:text-green-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Reduce attic heat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Lower AC costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Prevent moisture</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Blown-In */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4">
                  <Wind className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    <Link to="/services/blown-in" className="hover:text-green-600">Blown-In Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Fast, affordable solution perfect for older Edinburg homes</p>
                  <Link to="/services/blown-in" className="text-green-600 hover:text-green-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Quick installation</span>
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
                    <Link to="/services/commercial" className="hover:text-green-600">Commercial Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Serving UTRGV, offices, and Edinburg businesses</p>
                  <Link to="/services/commercial" className="text-green-600 hover:text-green-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Weekend service</span>
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
            <h2 className="text-3xl font-bold text-center mb-4">Edinburg Areas We Serve</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              From the UTRGV campus to established neighborhoods, we provide insulation services throughout Edinburg.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-green-600">North Edinburg</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>UTRGV Campus Area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>University Drive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Monte Cristo Road</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Trenton Road Area</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-green-600">Central Edinburg</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Downtown Edinburg</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Courthouse Square</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Business 281 Corridor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Sugar Road Area</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-green-600">South Edinburg</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Veterans Boulevard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Freddy Gonzalez Drive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Schunior Street</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Chapin Road Area</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Also serving nearby: <Link to="/areas/mcallen" className="text-green-600 hover:text-green-700 underline">McAllen</Link>, 
                <Link to="/areas/mission" className="text-green-600 hover:text-green-700 underline">Mission</Link>, 
                <Link to="/areas/pharr" className="text-green-600 hover:text-green-700 underline">Pharr</Link>, 
                San Juan, and Alamo
              </p>
              <Link to="/locations" className="text-green-600 hover:text-green-700 underline font-medium">
                View All Service Areas →
              </Link>
            </div>
          </div>
        </section>

        {/* Why Insulation Section */}
        <section id="why-insulation" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Edinburg Properties Need Quality Insulation</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Sun className="h-6 w-6 text-orange-500" />
                  Edinburg's Climate Challenges
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Growing population:</strong> New construction needs proper insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Student housing:</strong> High turnover requires durable solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>100°F+ summers:</strong> Extreme heat demands superior insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>High humidity:</strong> Moisture control is essential</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                  Benefits for Edinburg Properties
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Lower utility bills:</strong> Save 30-40% on cooling costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Better comfort:</strong> Even temperatures throughout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Property value:</strong> Increase resale and rental value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Noise reduction:</strong> Important for student housing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Edinburg Energy Savings Calculator</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold">$320</div>
                  <div className="text-green-100">Average Monthly Bill (Before)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$192</div>
                  <div className="text-green-100">After Insulation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$1,536</div>
                  <div className="text-green-100">Annual Savings</div>
                </div>
              </div>
              <Link to="/quote" className="inline-block bg-white text-green-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Calculate Your Savings
              </Link>
            </div>
          </div>
        </section>

        {/* Service + Location Links Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Insulation Services Available in Edinburg</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Link to="/services/spray-foam" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Spray Foam in Edinburg</h3>
                <p className="text-gray-600 text-sm">Maximum efficiency for Edinburg homes and UTRGV buildings</p>
                <span className="text-green-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/attic" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Attic Insulation Edinburg</h3>
                <p className="text-gray-600 text-sm">Essential for Edinburg's extreme summer heat</p>
                <span className="text-green-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/blown-in" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Blown-In Insulation Edinburg</h3>
                <p className="text-gray-600 text-sm">Quick installation for Edinburg properties</p>
                <span className="text-green-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/wall" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Wall Insulation in Edinburg</h3>
                <p className="text-gray-600 text-sm">Complete insulation for older Edinburg homes</p>
                <span className="text-green-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/commercial" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Commercial Insulation Edinburg</h3>
                <p className="text-gray-600 text-sm">Serving UTRGV and Edinburg businesses</p>
                <span className="text-green-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services" className="group bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-2 border-green-200">
                <h3 className="font-semibold text-lg mb-2 text-green-600">All Services</h3>
                <p className="text-gray-600 text-sm">Explore our complete insulation solutions</p>
                <span className="text-green-600 text-sm font-bold mt-2 inline-block">View All →</span>
              </Link>
            </div>
            
            {/* Nearby Cities */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">We Also Serve These Nearby Cities</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/areas/mcallen" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="font-medium group-hover:text-green-600">McAllen</span>
                  </div>
                  <span className="text-sm text-gray-500">10 miles</span>
                </Link>
                <Link to="/areas/mission" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="font-medium group-hover:text-green-600">Mission</span>
                  </div>
                  <span className="text-sm text-gray-500">12 miles</span>
                </Link>
                <Link to="/areas/pharr" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="font-medium group-hover:text-green-600">Pharr</span>
                  </div>
                  <span className="text-sm text-gray-500">8 miles</span>
                </Link>
                <Link to="/areas/brownsville" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="font-medium group-hover:text-green-600">Brownsville</span>
                  </div>
                  <span className="text-sm text-gray-500">65 miles</span>
                </Link>
                <Link to="/areas/harlingen" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="font-medium group-hover:text-green-600">Harlingen</span>
                  </div>
                  <span className="text-sm text-gray-500">45 miles</span>
                </Link>
                <Link to="/locations" className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg hover:shadow-md transition-all group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-600">View All Locations</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-green-600" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="free-quote" className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Edinburg Property?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of Edinburg homeowners and businesses who have reduced their energy costs with professional 
              insulation. Special rates available for UTRGV community members.
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <Clock className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Fast Service</h3>
                  <p className="text-sm text-gray-600">Same-day quotes for Edinburg</p>
                </div>
                <div>
                  <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Fully Licensed</h3>
                  <p className="text-sm text-gray-600">EPA certified & insured</p>
                </div>
                <div>
                  <Award className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Guaranteed Work</h3>
                  <p className="text-sm text-gray-600">100% satisfaction promise</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${siteConfig.company.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: {siteConfig.company.phone}
                </a>
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 border-2 border-green-500 text-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
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

export default Edinburg