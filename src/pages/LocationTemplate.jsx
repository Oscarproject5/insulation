import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
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
  Users
} from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import PageFooter from '../components/layout/PageFooter'
import { siteConfig } from '../data/siteConfig'

// This would typically come from props or route params
const locationData = {
  city: 'Brownsville',
  state: 'TX',
  zip: '78520',
  population: '186,738',
  landmarks: [
    'Gladys Porter Zoo',
    'Brownsville South Padre International Airport',
    'Historic Downtown',
    'Sabal Palm Sanctuary',
    'Resaca de la Palma State Park'
  ],
  neighborhoods: [
    'Downtown Brownsville',
    'Southmost',
    'North Brownsville',
    'West Brownsville',
    'Cameron Park'
  ],
  climate: {
    type: 'Humid subtropical',
    avgSummer: '95°F',
    avgWinter: '60°F',
    humidity: 'High (75%)',
    challenges: ['Extreme heat', 'High humidity', 'Coastal weather', 'Hurricane season']
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71844.83657567741!2d-97.5327!3d25.9017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866fb5a7ef2e7b65%3A0x8c296cf557f246f6!2sBrownsville%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890'
}

const LocationTemplate = () => {
  return (
    <>
      <Helmet>
        <title>Insulation Services in {locationData.city}, {locationData.state} | Valley Insulation Pros</title>
        <meta name="description" content={`Professional attic and home insulation services in ${locationData.city}, TX. Energy-efficient solutions for Texas heat. Free quotes. Same-day service. Call ${siteConfig.company.phone}`} />
        <meta name="keywords" content={`insulation ${locationData.city}, spray foam ${locationData.city}, attic insulation ${locationData.city} TX, energy savings, insulation contractors`} />
      </Helmet>

      <PageHeader />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section with H1 */}
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <MapPin className="h-4 w-4" />
                  Serving {locationData.city} & Surrounding Areas
                </div>

                {/* H1 - Primary Keyword + Location */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Insulation Services in {locationData.city}, {locationData.state}
                </h1>

                {/* Intro Paragraph */}
                <p className="text-xl text-gray-600 mb-8">
                  Valley Insulation Pros provides expert attic and home insulation services throughout {locationData.city}, {locationData.state}, 
                  helping you stay cool in the summer and lower your energy bills. Our certified technicians understand the unique challenges 
                  of {locationData.climate.type.toLowerCase()} climate and provide solutions tailored to your home.
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
                    <span className="font-semibold">{siteConfig.company.reviewCount}+</span> Happy Customers
                  </div>
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
                        <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <div className="font-semibold">Lifetime</div>
                        <div className="text-sm text-gray-600">Warranty</div>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-4 text-center">
                        <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="font-semibold">Certified</div>
                        <div className="text-sm text-gray-600">Professionals</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why {locationData.city} Residents Choose Valley Insulation Pros</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">10+ Years Serving {locationData.city}</h3>
                <p className="text-gray-600">Trusted by thousands of local homeowners and businesses</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Texas Heat Experts</h3>
                <p className="text-gray-600">Energy-efficient materials perfect for {locationData.climate.avgSummer} summers</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fast & Clean Installation</h3>
                <p className="text-gray-600">Same-day service with minimal disruption to your home</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Best Value Guarantee</h3>
                <p className="text-gray-600">Competitive pricing with financing options available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4">Insulation Services We Offer in {locationData.city}</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Complete range of insulation solutions designed for {locationData.city}'s {locationData.climate.type.toLowerCase()} climate
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Spray Foam */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Spray Foam Insulation</h3>
                  <p className="text-gray-600 mb-4">Superior air sealing and moisture control - perfect for {locationData.city}'s humid climate</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Highest R-value per inch</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Prevents mold & mildew</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>50% energy savings</span>
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
                  <p className="text-gray-600 mb-4">Cost-effective solution for attics and hard-to-reach spaces</p>
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
                      <span>Fire resistant</span>
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
                  <p className="text-gray-600 mb-4">Traditional, proven insulation for walls and crawl spaces</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Budget-friendly option</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Sound dampening</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Non-combustible</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Radiant Barrier */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Radiant Barrier</h3>
                  <p className="text-gray-600 mb-4">Reflects heat away - essential for Texas summers</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Reduces attic temp by 30°F</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Lower AC costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Extends roof life</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Landmarks & Climate Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Serving Areas */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Serving All of {locationData.city}</h2>
                
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Popular Landmarks We Service Near
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {locationData.landmarks.map((landmark, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{landmark}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Building className="h-5 w-5 text-green-600" />
                    Neighborhoods We Serve
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {locationData.neighborhoods.map((neighborhood, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{neighborhood}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Climate Challenges */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Why {locationData.city} Homes Need Quality Insulation</h2>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-orange-600" />
                    {locationData.city} Climate Facts
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Climate Type</div>
                      <div className="font-semibold">{locationData.climate.type}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Summer Average</div>
                      <div className="font-semibold text-red-600">{locationData.climate.avgSummer}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Winter Average</div>
                      <div className="font-semibold text-blue-600">{locationData.climate.avgWinter}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Humidity Level</div>
                      <div className="font-semibold">{locationData.climate.humidity}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold text-xl mb-4">Climate Challenges We Address</h3>
                  <ul className="space-y-3">
                    {locationData.climate.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-medium">{challenge}</div>
                          <div className="text-sm text-gray-600">
                            {challenge === 'Extreme heat' && 'Our insulation reduces heat transfer by up to 90%'}
                            {challenge === 'High humidity' && 'Spray foam creates a moisture barrier preventing mold'}
                            {challenge === 'Coastal weather' && 'Weather-resistant materials that withstand salt air'}
                            {challenge === 'Hurricane season' && 'Strengthens structure and protects against wind damage'}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4">Our {locationData.city} Service Area</h2>
            <p className="text-center text-gray-600 mb-8">
              Serving all of {locationData.city} and surrounding communities within 30 miles
            </p>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <iframe
                src={locationData.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${locationData.city} Service Area Map`}
              ></iframe>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
                <MapPin className="h-8 w-8 text-blue-500" />
                <div>
                  <div className="font-semibold">ZIP: {locationData.zip}</div>
                  <div className="text-sm text-gray-600">Primary service area</div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
                <Users className="h-8 w-8 text-green-500" />
                <div>
                  <div className="font-semibold">{locationData.population}</div>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-green-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Your Free Insulation Quote Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of {locationData.city} homeowners who are saving money on energy bills
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
                      <span>Detailed quote with savings estimate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>No obligation consultation</span>
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
                  <div className="text-gray-600">Speak with a local {locationData.city} expert</div>
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
          </div>
        </section>
      </div>

      <PageFooter />
    </>
  )
}

export default LocationTemplate