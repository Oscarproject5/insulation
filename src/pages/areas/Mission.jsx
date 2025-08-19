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
  Trees,
  Landmark,
  ShoppingBag
} from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import PageFooter from '../../components/layout/PageFooter'
import MobileBottomNav from '../../components/common/MobileBottomNav'
import FloatingMenu from '../../components/common/FloatingMenu'
import MobileLocationLayout from '../../components/common/MobileLocationLayout'
import SEOHead from '../../components/common/SEOHead'
import { NearbyLocations, RelatedServices } from '../../components/common/InternalLinks'
import { siteConfig } from '../../data/siteConfig'

const Mission = () => {
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
        cityName="Mission"
        subtitle="Home of the Texas Citrus Fiesta"
        population="85,000"
        heroGradient="from-lime-500 via-green-500 to-emerald-500"
        heroIcon={Trees}
        heroPattern="dots"
      >
        {({ activeTab }) => {
          switch (activeTab) {
            case 'overview':
              return (
                <div className="p-4 space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-600">About Mission</h3>
                    <p className="text-gray-700 mb-4">
                      Mission is home to the Texas Citrus Fiesta with a population of 85,000. Known for its historic 
                      downtown and growing residential areas like Sharyland, it combines small-town charm with modern amenities.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The city experiences extreme heat with 102°F+ summers and high humidity. Agricultural dust and 
                      the long cooling season make proper insulation essential for comfort and energy efficiency.
                    </p>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700 mb-2">Climate Challenges:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 102°F+ summers require superior insulation</li>
                        <li>• High humidity: 70%+ needs moisture control</li>
                        <li>• Agricultural dust infiltration</li>
                        <li>• Long cooling season: AC runs 9+ months</li>
                      </ul>
                    </div>
                  </div>
                  <NearbyLocations currentLocation="/areas/mission" isMobile={true} />
                  <RelatedServices currentService="" isMobile={true} />
                </div>
              )
            case 'services':
              return (
                <div className="p-4 space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-600">Our Mission Services</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-lg">Spray Foam Insulation</h4>
                        <p className="text-gray-600 text-sm">Perfect air sealing for Mission's humidity challenges</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-lg">Attic Insulation</h4>
                        <p className="text-gray-600 text-sm">Essential for Mission's intense summer heat</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-lg">Blown-In Insulation</h4>
                        <p className="text-gray-600 text-sm">Affordable upgrade for Mission attics</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-lg">Commercial Insulation</h4>
                        <p className="text-gray-600 text-sm">Professional solutions for Mission businesses</p>
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
                        <h4 className="font-semibold text-green-600 mb-2">North Mission</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Sharyland Plantation</li>
                          <li>• Cimarron</li>
                          <li>• Las Misiones</li>
                          <li>• Inspiration Point</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Central Mission</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Downtown Historic District</li>
                          <li>• Mission Gardens</li>
                          <li>• Los Ebanos</li>
                          <li>• Conway Avenue Area</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">South Mission</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Madero</li>
                          <li>• Palmview South</li>
                          <li>• Mission Bend</li>
                          <li>• Bryan Road Area</li>
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
                        <h4 className="font-semibold mb-2">Mission Office</h4>
                        <p className="text-gray-700 text-sm mb-1">Serving Mission & West Hidalgo County</p>
                        <p className="text-gray-700 text-sm">Phone: (956) 854-0899</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Response Time</h4>
                        <p className="text-gray-700 text-sm">Same-day quotes • 30-minute response</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Service Areas</h4>
                        <p className="text-gray-700 text-sm">Historic properties • New developments • Commercial districts</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-700 mb-2">Why Choose Us?</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 350+ projects in Mission</li>
                          <li>• Historic home specialists</li>
                          <li>• EPA certified professionals</li>
                          <li>• Energy rebate support</li>
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
        title="Insulation Contractors Mission TX | Home Energy Solutions"
        description="Trusted insulation services in Mission, TX. Historic home specialists, citrus warehouse insulation, and residential upgrades. Free energy audits available."
        keywords="Mission TX insulation, insulation Mission Texas, historic home insulation, Mission contractors"
        canonicalUrl="https://valleyinsulation.com/areas/mission"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Valley Insulation - Mission",
          "description": "Trusted insulation services in Mission, TX. Historic home specialists, citrus warehouse insulation, and residential upgrades.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mission",
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
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-green-50 via-white to-orange-50">
          <div className="container mx-auto max-w-7xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link to="/" className="hover:text-green-600">Home</Link>
              <span>/</span>
              <Link to="/locations" className="hover:text-green-600">Locations</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Mission, TX</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <MapPin className="h-4 w-4" />
                  Serving Mission & West Hidalgo County
                </div>

                {/* H1 - Primary Keyword + Location */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Insulation Services in Mission, TX
                </h1>

                {/* Intro Paragraph */}
                <p className="text-xl text-gray-600 mb-8">
                  Valley Insulation Pros delivers top-quality insulation solutions to Mission homes and businesses. 
                  From historic Downtown to growing Sharyland, we help Mission residents combat extreme heat and 
                  humidity while reducing energy costs by up to 40%. Our EPA-certified team specializes in spray foam, 
                  blown-in, and comprehensive attic insulation.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`tel:${siteConfig.company.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
                    <span className="font-semibold">350+</span> Projects in Mission
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <a href="#services" className="text-green-600 hover:text-green-700 underline">View Services</a>
                  <span className="text-gray-400">•</span>
                  <a href="#neighborhoods" className="text-green-600 hover:text-green-700 underline">Neighborhoods We Serve</a>
                  <span className="text-gray-400">•</span>
                  <a href="#why-insulation" className="text-green-600 hover:text-green-700 underline">Why Insulation?</a>
                  <span className="text-gray-400">•</span>
                  <a href="#free-quote" className="text-green-600 hover:text-green-700 underline">Get Free Quote</a>
                </div>
              </div>

              {/* Hero Image/Visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-500 p-1 rounded-2xl">
                  <div className="bg-white rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-xl p-4 text-center">
                        <Thermometer className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold">Save 40%</div>
                        <div className="text-sm text-gray-600">On Energy Bills</div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4 text-center">
                        <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <div className="font-semibold">Same Day</div>
                        <div className="text-sm text-gray-600">Service Available</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 text-center">
                        <Trees className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold">Eco-Friendly</div>
                        <div className="text-sm text-gray-600">Solutions</div>
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
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Mission Residents Trust Valley Insulation Pros</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Mission's Local Choice</h3>
                <p className="text-gray-600">Trusted by Mission families since 2010 with deep local expertise</p>
                <Link to="/services" className="text-green-600 hover:text-green-700 text-sm underline mt-2 inline-block">View All Services →</Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Landmark className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Historic Home Specialists</h3>
                <p className="text-gray-600">Expert insulation for Mission's historic and heritage properties</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Commercial Expertise</h3>
                <p className="text-gray-600">Serving Mission's growing retail and business districts</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Energy Rebate Support</h3>
                <p className="text-gray-600">We help navigate Mission's utility rebate programs</p>
                <a href="#free-quote" className="text-green-600 hover:text-green-700 text-sm underline mt-2 inline-block">Get Your Free Quote →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4">Insulation Services We Offer in Mission</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Comprehensive insulation solutions designed for Mission's unique climate and architectural styles.
              <Link to="/services" className="text-green-600 hover:text-green-700 underline ml-2">Explore all our services</Link>
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
                  <p className="text-gray-600 mb-4">Perfect air sealing for Mission's humidity challenges</p>
                  <Link to="/services/spray-foam" className="text-green-600 hover:text-green-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Complete moisture barrier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Maximum energy savings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Pest deterrent</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Attic Insulation */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    <Link to="/services/attic" className="hover:text-green-600">Attic Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Essential for Mission's intense summer heat</p>
                  <Link to="/services/attic" className="text-green-600 hover:text-green-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>40% cooling cost reduction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Prevent heat buildup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Extend HVAC life</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Blown-In */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4">
                  <Wind className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    <Link to="/services/blown-in" className="hover:text-green-600">Blown-In Insulation</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">Affordable upgrade for Mission attics</p>
                  <Link to="/services/blown-in" className="text-green-600 hover:text-green-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Half-day installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>No demolition needed</span>
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
                  <p className="text-gray-600 mb-4">Professional solutions for Mission businesses</p>
                  <Link to="/services/commercial" className="text-green-600 hover:text-green-700 text-sm font-medium">Learn More →</Link>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Commercial warranties</span>
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
            <h2 className="text-3xl font-bold text-center mb-4">Mission Neighborhoods We Serve</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              From historic Downtown Mission to the growing Sharyland area, we provide professional 
              insulation services throughout the entire city.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-green-600">North Mission</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Sharyland Plantation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Cimarron</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Las Misiones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Inspiration Point</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-green-600">Central Mission</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Downtown Historic District</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Mission Gardens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Los Ebanos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Conway Avenue Area</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-green-600">South Mission</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Madero</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Palmview South</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Mission Bend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Bryan Road Area</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Also serving nearby areas: <Link to="/areas/mcallen" className="text-green-600 hover:text-green-700 underline">McAllen</Link>, 
                <Link to="/areas/pharr" className="text-green-600 hover:text-green-700 underline"> Pharr</Link>, 
                <Link to="/areas/edinburg" className="text-green-600 hover:text-green-700 underline"> Edinburg</Link>, 
                Palmview, Alton, and Palmhurst
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Mission Properties Need Professional Insulation</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Sun className="h-6 w-6 text-orange-500" />
                  Mission's Climate Challenges
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>102°F+ summers:</strong> Extreme heat requires superior insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>High humidity:</strong> 70%+ humidity needs moisture control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Agricultural dust:</strong> Proper sealing prevents infiltration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Long cooling season:</strong> AC runs 9+ months annually</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                  Benefits for Mission Homeowners
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Energy savings:</strong> Reduce cooling costs up to 40%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Consistent comfort:</strong> Even temperatures throughout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Quieter home:</strong> Reduce outside noise significantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span><strong>Home value:</strong> Increase resale appeal and value</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Mission Energy Savings Calculator</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold">$340</div>
                  <div className="text-green-100">Average Monthly Bill (Before)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$204</div>
                  <div className="text-green-100">After Insulation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$1,632</div>
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
            <h2 className="text-3xl font-bold text-center mb-12">Explore Our Mission Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Link to="/services/spray-foam" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Spray Foam in Mission</h3>
                <p className="text-gray-600 text-sm">Premium insulation for Mission's extreme climate</p>
                <span className="text-green-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/attic" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Attic Insulation in Mission</h3>
                <p className="text-gray-600 text-sm">Stop heat at its source in your Mission home</p>
                <span className="text-green-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/blown-in" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Blown-In Insulation Mission</h3>
                <p className="text-gray-600 text-sm">Fast, affordable attic insulation upgrade</p>
                <span className="text-green-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/wall" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Wall Insulation in Mission</h3>
                <p className="text-gray-600 text-sm">Complete thermal barrier for Mission homes</p>
                <span className="text-green-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services/commercial" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Commercial Insulation Mission</h3>
                <p className="text-gray-600 text-sm">Professional solutions for Mission businesses</p>
                <span className="text-green-600 text-sm font-medium mt-2 inline-block">Learn More →</span>
              </Link>
              <Link to="/services" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-2 border-green-200">
                <h3 className="font-semibold text-lg mb-2 text-green-600">All Insulation Services</h3>
                <p className="text-gray-600 text-sm">View our complete range of solutions</p>
                <span className="text-green-600 text-sm font-bold mt-2 inline-block">View All Services →</span>
              </Link>
            </div>
            
            {/* Nearby Cities */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Insulation Services in Nearby Cities</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/areas/mcallen" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="font-medium group-hover:text-green-600">McAllen</span>
                  </div>
                  <span className="text-sm text-gray-500">6 miles</span>
                </Link>
                <Link to="/areas/pharr" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="font-medium group-hover:text-green-600">Pharr</span>
                  </div>
                  <span className="text-sm text-gray-500">8 miles</span>
                </Link>
                <Link to="/areas/edinburg" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="font-medium group-hover:text-green-600">Edinburg</span>
                  </div>
                  <span className="text-sm text-gray-500">12 miles</span>
                </Link>
                <Link to="/areas/harlingen" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="font-medium group-hover:text-green-600">Harlingen</span>
                  </div>
                  <span className="text-sm text-gray-500">46 miles</span>
                </Link>
                <Link to="/areas/brownsville" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="font-medium group-hover:text-green-600">Brownsville</span>
                  </div>
                  <span className="text-sm text-gray-500">64 miles</span>
                </Link>
                <Link to="/locations" className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:shadow-md transition-all group">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-600">All Locations</span>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Save on Energy Bills?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of Mission property owners who have reduced their cooling costs with professional insulation. 
              Get your free, no-obligation quote today.
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <Clock className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Quick Response</h3>
                  <p className="text-sm text-gray-600">Same-day quotes for Mission</p>
                </div>
                <div>
                  <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Licensed & Insured</h3>
                  <p className="text-sm text-gray-600">EPA certified professionals</p>
                </div>
                <div>
                  <Award className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Guaranteed Quality</h3>
                  <p className="text-sm text-gray-600">100% satisfaction promise</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${siteConfig.company.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
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

export default Mission