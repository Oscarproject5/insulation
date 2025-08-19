import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wind, 
  Leaf, 
  Home, 
  Clock, 
  CheckCircle,
  Phone,
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  Thermometer,
  DollarSign,
  Award,
  Users,
  ArrowRight,
  TrendingUp,
  Gauge,
  Shield
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageHeader from '../../components/layout/PageHeader';
import PageFooter from '../../components/layout/PageFooter';
import MobileBottomNav from '../../components/common/MobileBottomNav';
import FloatingMenu from '../../components/common/FloatingMenu';
import MobileServiceLayout from '../../components/common/MobileServiceLayout';
import MobileServiceCard from '../../components/common/MobileServiceCard';
import MobileSavingsCard from '../../components/common/MobileSavingsCard';
import SEOHead from '../../components/common/SEOHead';
import { RelatedServices } from '../../components/common/InternalLinks';

const BlownIn = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      title: "Attic Blown-In Insulation",
      description: "Complete attic coverage with cellulose or fiberglass materials"
    },
    {
      title: "Wall Cavity Filling",
      description: "Dense-pack insulation for existing walls without demolition"
    },
    {
      title: "Crawl Space Insulation",
      description: "Moisture-resistant blown-in solutions for under-home areas"
    },
    {
      title: "Garage Insulation",
      description: "Temperature control for attached and detached garages"
    },
    {
      title: "Commercial Blown-In",
      description: "Large-scale applications for offices and warehouses"
    },
    {
      title: "Top-Up Services",
      description: "Adding insulation to existing inadequate coverage"
    },
    {
      title: "Soundproofing Applications",
      description: "Dense-pack insulation for noise reduction between rooms"
    },
    {
      title: "Emergency Installation",
      description: "Quick response for insulation failures and damage"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Gauge className="w-5 h-5" />,
      title: "Quick Installation",
      description: "Most homes completed in just 4-6 hours"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Cost-Effective Solution",
      description: "30-50% less expensive than spray foam with great results"
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Eco-Friendly Materials",
      description: "Recycled materials and sustainable options available"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Fire Resistant",
      description: "Class A fire rating for maximum safety"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "No Settling Guarantee",
      description: "Professional installation prevents future settling"
    }
  ];

  const locations = [
    "Attics and loft spaces",
    "Existing wall cavities",
    "New construction walls",
    "Crawl spaces and basements",
    "Garages and workshops",
    "Commercial buildings",
    "Mobile and manufactured homes",
    "Hard-to-reach spaces"
  ];

  const faqs = [
    {
      question: "How long does blown-in insulation installation take?",
      answer: "Most residential attics can be insulated in 4-6 hours. The material settles immediately, and you'll notice improved comfort right away."
    },
    {
      question: "Is blown-in insulation as good as spray foam?",
      answer: "While spray foam offers superior air sealing, blown-in insulation provides excellent thermal resistance at a lower cost. It's perfect for attics and can reduce energy bills by 20-30%."
    },
    {
      question: "Can blown-in insulation be installed in existing walls?",
      answer: "Yes! We use dense-pack techniques to fill wall cavities through small access holes, which are then patched and painted. No need for major demolition."
    },
    {
      question: "Will blown-in insulation settle over time?",
      answer: "When professionally installed at the correct density, modern blown-in insulation has minimal settling. We guarantee our installation against excessive settling."
    }
  ];

  return (
    <>
      <SEOHead
        title="Blown-In Insulation Services RGV | Attic & Wall Insulation"
        description="Cost-effective blown-in cellulose and fiberglass insulation in Rio Grande Valley. R-38 rating, no demolition required. Free estimates for McAllen, Edinburg, and surrounding areas."
        keywords="blown in insulation, cellulose insulation, fiberglass insulation, attic insulation RGV"
        canonicalUrl="https://valleyinsulation.com/services/blown-in"
      />
      {/* Mobile Version */}
      <MobileServiceLayout
        title="Blown-In Insulation"
        subtitle="Cost-effective coverage"
        rating={4.8}
        reviews={289}
        responseTime="Same day"
        heroGradient="from-green-500 via-teal-500 to-blue-500"
        heroIcon={Wind}
        heroPattern="waves"
        className="lg:hidden"
      >
        {({ activeTab }) => (
          <>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="p-4 space-y-4">
                {/* Quick Benefits */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Why Choose Blown-In?</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Cost-Effective</p>
                        <p className="text-xs text-gray-500">Best value option</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Gauge className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">R-38 Rating</p>
                        <p className="text-xs text-gray-500">High efficiency</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Wind className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Quick Install</p>
                        <p className="text-xs text-gray-500">1-day completion</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Eco-Friendly</p>
                        <p className="text-xs text-gray-500">Recycled materials</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Card */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Professional Blown-In Insulation</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Cost-effective insulation for RGV homes. Our blown-in cellulose and fiberglass 
                    solutions provide excellent coverage for attics, walls, and hard-to-reach spaces.
                  </p>
                  <div className="flex items-center gap-2 text-orange-500">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">No demolition required</span>
                  </div>
                </div>

                {/* Service Types */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Service Types</h3>
                  <div className="space-y-3">
                    {services.slice(0, 4).map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-orange-600">{index + 1}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{service.title}</p>
                          <p className="text-xs text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Services */}
                <RelatedServices currentService="/services/blown-in" isMobile={true} />
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="p-4 space-y-3">
                {services.map((service, index) => (
                  <MobileServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={Wind}
                  />
                ))}
              </div>
            )}

            {/* Savings Tab */}
            {activeTab === 'savings' && (
              <div className="p-4 space-y-3">
                <MobileSavingsCard
                  title="Typical Attic Project"
                  savingsAmount="$280"
                  savingsPercent="30"
                  timeFrame="per year"
                  icon={Home}
                  features={[
                    "1500-2000 sq ft attic",
                    "Energy bill reduction",
                    "More consistent temps",
                    "Quick installation"
                  ]}
                  highlight={true}
                />
                <MobileSavingsCard
                  title="Complete Coverage"
                  savingsAmount="$420"
                  savingsPercent="35"
                  timeFrame="per year"
                  icon={Shield}
                  features={[
                    "Attic + wall insulation",
                    "Whole-home comfort",
                    "Noise reduction bonus",
                    "One-day completion"
                  ]}
                />
              </div>
            )}

            {/* Areas Tab */}
            {activeTab === 'areas' && (
              <div className="p-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Service Areas</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "McAllen", "Edinburg", "Mission", "Pharr",
                      "Brownsville", "Harlingen", "Weslaco", "San Juan",
                      "Mercedes", "La Feria", "Donna", "Alamo"
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <MapPin className="w-3 h-3 text-orange-500" />
                        <span className="text-sm text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </>
        )}
      </MobileServiceLayout>

      {/* Desktop Version */}
      <div className="hidden lg:block min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <PageHeader />
      
      {/* Spacer for fixed header */}
      <div className="h-24 lg:h-28"></div>
      
      {/* Clean Header with Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Blown-In Insulation</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - Cleaner Design */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">
            BLOWN-IN INSULATION IN LOWER RIO GRANDE VALLEY
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cost-Effective Blown-In Insulation Services in McAllen, Brownsville, Harlingen, and Surrounding Areas
          </p>
        </div>
      </section>

      {/* Main Content with Side Panel */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* Introduction Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Blown-In Insulation in Lower Rio Grande Valley</h2>
              <p className="text-gray-700 mb-4">
                When it comes to insulating your home quickly and affordably in the Lower Rio Grande Valley, blown-in insulation 
                is the smart choice. Perfect for our hot, humid climate, blown-in insulation fills every gap and corner in your 
                attic, creating a complete thermal barrier that can reduce your cooling costs by up to 30%. Valley Insulation Pros 
                specializes in professional blown-in insulation installation that transforms uncomfortable, energy-wasting homes 
                into cool, efficient living spaces.
              </p>
              <p className="text-gray-700 mb-4">
                We provide fast, clean installation services throughout <Link to="/areas/mcallen" className="text-orange-500 hover:text-orange-600 font-medium">McAllen</Link>, 
                <Link to="/areas/brownsville" className="text-orange-500 hover:text-orange-600 font-medium"> Brownsville</Link>, 
                <Link to="/areas/harlingen" className="text-orange-500 hover:text-orange-600 font-medium"> Harlingen</Link>, 
                <Link to="/areas/edinburg" className="text-orange-500 hover:text-orange-600 font-medium"> Edinburg</Link>, 
                and the entire <Link to="/locations" className="text-orange-500 hover:text-orange-600 font-medium">Lower Rio Grande Valley region</Link>. 
                Our experienced technicians use advanced equipment to ensure complete, even coverage that won't settle or leave gaps. 
                Whether you need to upgrade existing insulation or insulate a new construction, we have the solution.
              </p>
            </div>

            {/* Emergency Service Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Quick Installation Service in Lower Rio Grande Valley</h2>
              <p className="text-gray-700 mb-4">
                Blown-in insulation is the fastest way to improve your home's energy efficiency. Our crews can complete most 
                attic installations in just 4-6 hours, providing immediate relief from high energy bills and uncomfortable 
                temperatures. We serve residential properties, <Link to="/services/commercial" className="text-orange-500 hover:text-orange-600 font-medium">commercial buildings</Link>, 
                new construction sites, and renovation projects throughout the Valley. With our strategic location and multiple 
                crews, we offer same-day service for urgent insulation needs.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <p className="text-orange-900 font-semibold">
                  Installation time: Most homes completed in 4-6 hours. Same-day service available.
                </p>
              </div>
            </div>

            {/* Services We Provide */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Blown-In Insulation Services We Provide</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Material Options */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Blown-In Insulation Material Options</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Fiberglass Blown-In</h3>
                  <p className="text-gray-600 mb-2">
                    The most popular choice for Lower Rio Grande Valley homes. Fiberglass blown-in insulation is non-combustible, 
                    won't absorb moisture, and provides excellent thermal resistance. R-value: 2.2-2.7 per inch.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cost-effective solution</li>
                    <li>• Excellent for attics</li>
                    <li>• Fire resistant</li>
                    <li>• Won't support mold growth</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Cellulose Insulation</h3>
                  <p className="text-gray-600 mb-2">
                    Eco-friendly option made from recycled paper products. Treated with fire retardants and provides superior 
                    soundproofing. Perfect for our humid climate when properly installed. R-value: 3.2-3.8 per inch.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Made from recycled materials</li>
                    <li>• Better soundproofing</li>
                    <li>• Higher R-value per inch</li>
                    <li>• Pest resistant treatment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Why Choose Valley Insulation Pros?</h2>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg text-orange-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Locations */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Where We Install Blown-In Insulation</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{location}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Serving All of Lower Rio Grande Valley</h2>
              <p className="text-gray-700 mb-4">
                Valley Insulation Pros provides blown-in insulation services throughout the Lower Rio Grande Valley, including 
                <Link to="/areas/mcallen" className="text-orange-500 hover:text-orange-600 font-medium"> McAllen</Link> (North McAllen, South McAllen, West McAllen), 
                <Link to="/areas/brownsville" className="text-orange-500 hover:text-orange-600 font-medium"> Brownsville</Link> (Downtown, Southmost, North Brownsville), 
                <Link to="/areas/harlingen" className="text-orange-500 hover:text-orange-600 font-medium"> Harlingen</Link> (Downtown, Treasure Hills, Dixieland), 
                <Link to="/areas/edinburg" className="text-orange-500 hover:text-orange-600 font-medium"> Edinburg</Link> (UTRGV area), 
                <Link to="/areas/mission" className="text-orange-500 hover:text-orange-600 font-medium"> Mission</Link>, 
                <Link to="/areas/pharr" className="text-orange-500 hover:text-orange-600 font-medium"> Pharr</Link>, 
                Weslaco, San Benito, Mercedes, La Feria, Donna, Alamo, San Juan, Raymondville, Port Isabel, and South Padre Island.
              </p>
              <p className="text-gray-700">
                We also service rural communities throughout Hidalgo County, Cameron County, Willacy County, and Starr County, 
                ensuring everyone in South Texas has access to quality blown-in insulation services.
              </p>
            </div>

            {/* Savings Calculator Visual */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Blown-In Insulation Savings Calculator</h2>
              
              {/* Monthly Savings Display */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Current Monthly Bill</p>
                    <div className="text-3xl font-bold text-red-500">$280</div>
                    <p className="text-xs text-gray-500 mt-1">Average RGV home</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">After Blown-In</p>
                    <div className="text-3xl font-bold text-green-500">$196</div>
                    <p className="text-xs text-gray-500 mt-1">30% reduction</p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-block bg-green-500 text-white rounded-full px-6 py-3">
                    <span className="text-2xl font-bold">Save $84/month</span>
                  </div>
                </div>
              </div>

              {/* ROI Timeline */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Return on Investment</h4>
                    <p className="text-sm text-gray-600">Blown-in insulation pays for itself in</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">18-24 Months</div>
                    <p className="text-xs text-gray-500">Plus increased home value</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Related Services Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <RelatedServices currentService="/services/blown-in" />
            </div>

            {/* Service Areas Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Blown-In Insulation by City</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Link to="/services/blown-in/mcallen" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Blown-In in McAllen
                </Link>
                <Link to="/services/blown-in/brownsville" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Blown-In in Brownsville
                </Link>
                <Link to="/services/blown-in/harlingen" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Blown-In in Harlingen
                </Link>
                <Link to="/services/blown-in/edinburg" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Blown-In in Edinburg
                </Link>
                <Link to="/services/blown-in/mission" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Blown-In in Mission
                </Link>
                <Link to="/services/blown-in/pharr" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Blown-In in Pharr
                </Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Get Blown-In Insulation Installed Today</h2>
              <p className="text-xl mb-6 text-white/90">
                Don't wait another day with inadequate insulation. Our blown-in insulation service is the fastest, 
                most affordable way to improve your home's comfort and efficiency. With installation completed in just 
                hours, you'll start saving money immediately. Call now for a free estimate and see why Valley residents 
                trust us for all their insulation needs.
              </p>
              <div className="text-3xl font-bold">
                Fast Installation: (956) 854-0899
              </div>
              <Link to="/quote" className="inline-block mt-6 bg-white text-orange-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                Get Your Free Quote Now
              </Link>
            </div>
          </div>

          {/* Side Panel - Sticky */}
          <div className="w-80 flex-shrink-0 hidden lg:block">
            <div className="sticky top-4">
              {/* CTA Card */}
              <Card className="mb-6 shadow-lg border-2 border-orange-500">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <CardTitle className="text-xl text-center">QUICK INSTALLATION</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <Link to="/quote" className="block">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-bold">
                      <Calendar className="mr-2 h-5 w-5" />
                      GET FREE QUOTE
                    </Button>
                  </Link>
                  <a href="tel:9568540899">
                    <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 text-lg font-bold">
                      <Phone className="mr-2 h-5 w-5" />
                      CALL: (956) 854-0899
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Service Areas Card */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">SERVICE AREAS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <Link to="/areas/mcallen" className="text-sm hover:text-orange-500">McAllen</Link>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <Link to="/areas/brownsville" className="text-sm hover:text-orange-500">Brownsville</Link>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <Link to="/areas/harlingen" className="text-sm hover:text-orange-500">Harlingen</Link>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <Link to="/areas/edinburg" className="text-sm hover:text-orange-500">Edinburg</Link>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <Link to="/areas/mission" className="text-sm hover:text-orange-500">Mission</Link>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <Link to="/areas/pharr" className="text-sm hover:text-orange-500">Pharr</Link>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">Weslaco</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">San Benito</span>
                    </li>
                    <li className="text-sm text-gray-500 pl-6">+ more areas</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">BLOWN-IN BENEFITS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Wind className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Quick Install</p>
                        <p className="text-xs text-gray-600">4-6 hours average</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <DollarSign className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">30% Savings</p>
                        <p className="text-xs text-gray-600">Lower energy bills</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Leaf className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Eco-Friendly</p>
                        <p className="text-xs text-gray-600">Recycled materials</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Fire Resistant</p>
                        <p className="text-xs text-gray-600">Class A rating</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer and Mobile Navigation */}
      <PageFooter />
      <FloatingMenu />
      <MobileBottomNav />
    </div>
    </>
  );
};

export default BlownIn;