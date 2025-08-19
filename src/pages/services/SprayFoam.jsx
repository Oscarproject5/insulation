import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Droplets, 
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
  Zap,
  Layers,
  Star,
  Sparkles,
  Building2
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

const SprayFoam = () => {
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

  const serviceAreas = [
    "McAllen",
    "Edinburg", 
    "Mission",
    "Pharr",
    "Brownsville",
    "Harlingen",
    "Weslaco",
    "San Juan",
    "Mercedes",
    "La Feria",
    "Donna",
    "Alamo"
  ];

  const services = [
    {
      title: "Residential Spray Foam",
      description: "Complete home insulation for maximum energy efficiency"
    },
    {
      title: "Attic Insulation",
      description: "Heat barrier installation to reduce cooling costs by 40%"
    },
    {
      title: "Wall Cavity Filling",
      description: "Interior and exterior wall insulation without demolition"
    },
    {
      title: "Crawl Space Sealing",
      description: "Moisture barrier and insulation for under-home protection"
    },
    {
      title: "Commercial Insulation",
      description: "Large-scale spray foam for warehouses and offices"
    },
    {
      title: "Metal Building Insulation",
      description: "Specialized application for steel structures and shops"
    },
    {
      title: "Retrofit Installation",
      description: "Upgrade existing homes with minimal disruption"
    },
    {
      title: "Emergency Repair Service",
      description: "24/7 response for damaged or failing insulation"
    }
  ];

  const whyChooseUs = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Local RGV Experts",
      description: "Deep understanding of South Texas climate challenges"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Same-Day Quotes",
      description: "Fast response with installation within 48 hours"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Fair, Transparent Pricing",
      description: "No hidden fees, financing options available"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "EPA Certified",
      description: "Licensed, insured, and certified installers"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Builder Accounts",
      description: "Special rates for contractors and property managers"
    }
  ];

  const locations = [
    "Residential neighborhoods throughout RGV",
    "Commercial properties and office buildings",
    "Industrial facilities and warehouses",
    "Agricultural buildings and storage",
    "Schools and government buildings",
    "Medical facilities and hospitals",
    "Retail centers and shopping areas",
    "New construction sites"
  ];

  const faqs = [
    {
      question: "How long does spray foam installation take?",
      answer: "Most residential projects are completed in 1 day. The foam expands within seconds and is fully cured in 24 hours."
    },
    {
      question: "Is spray foam insulation safe?",
      answer: "Yes! Once cured (24 hours), spray foam is completely safe and non-toxic. We use EPA-approved products and follow all safety protocols."
    },
    {
      question: "What's the ROI on spray foam insulation?",
      answer: "Most installations pay for themselves in 3-5 years through energy savings. Plus, spray foam adds value to your home."
    },
    {
      question: "Can spray foam be installed in existing homes?",
      answer: "Absolutely! We specialize in retrofitting existing homes through small access points or direct application in accessible areas."
    }
  ];

  return (
    <>
      <SEOHead
        title="Spray Foam Insulation McAllen TX | Valley Insulation RGV"
        description="Professional spray foam insulation services in McAllen, Brownsville, and RGV. Save 40% on energy bills with our EPA-certified installation. Same-day service available."
        keywords="spray foam insulation, McAllen insulation, RGV spray foam, energy savings, attic insulation"
        canonicalUrl="https://valleyinsulation.com/services/spray-foam"
      />
      {/* Mobile Version */}
      <MobileServiceLayout
        title="Spray Foam"
        subtitle="Maximum efficiency insulation"
        heroGradient="from-purple-600 via-pink-500 to-orange-500"
        heroIcon={Sparkles}
        heroPattern="dots"
        rating={4.9}
        reviews={312}
        responseTime="Same day"
        accentColor="purple"
      >
        {({ activeTab }) => (
          <>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="p-4 space-y-4">
                {/* Quick Benefits */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Why Choose Spray Foam?</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">40% Savings</p>
                        <p className="text-xs text-gray-500">On energy bills</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Air Seal</p>
                        <p className="text-xs text-gray-500">Complete barrier</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Droplets className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Moisture</p>
                        <p className="text-xs text-gray-500">Protection</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">24hr</p>
                        <p className="text-xs text-gray-500">Quick cure</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Card */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Professional Spray Foam Insulation</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Beat the RGV heat with premium spray foam insulation. Our EPA-certified technicians 
                    create an airtight seal that stops energy loss and prevents moisture damage.
                  </p>
                  <div className="flex items-center gap-2 text-orange-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">Trusted by 2,000+ RGV homes</span>
                  </div>
                </div>

                {/* Emergency Service Alert */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                  <div className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">24/7 Emergency Service</p>
                      <p className="text-xs text-gray-600">Same-day quotes • Fast installation</p>
                    </div>
                  </div>
                </div>

                {/* How It Works */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">How It Works</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Free Assessment</p>
                        <p className="text-xs text-gray-600">We evaluate your insulation needs</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Professional Installation</p>
                        <p className="text-xs text-gray-600">Complete in 1 day, cured in 24 hours</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Start Saving</p>
                        <p className="text-xs text-gray-600">See immediate energy savings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="p-4 space-y-3">
                <MobileServiceCard
                  icon={<Home className="w-6 h-6" />}
                  title="Residential Spray Foam"
                  description="Complete home insulation"
                  badge="Popular"
                />
                <MobileServiceCard
                  icon={<Layers className="w-6 h-6" />}
                  title="Attic Insulation"
                  description="Reduce cooling by 40%"
                />
                <MobileServiceCard
                  icon={<Shield className="w-6 h-6" />}
                  title="Wall Cavity Filling"
                  description="No demolition needed"
                />
                <MobileServiceCard
                  icon={<Droplets className="w-6 h-6" />}
                  title="Crawl Space Sealing"
                  description="Moisture protection"
                />
                <MobileServiceCard
                  icon={<Award className="w-6 h-6" />}
                  title="Commercial Insulation"
                  description="Warehouses & offices"
                />
                <MobileServiceCard
                  icon={<Zap className="w-6 h-6" />}
                  title="Emergency Service"
                  description="24/7 response available"
                  badge="24/7"
                />
              </div>
            )}

            {/* Savings Tab */}
            {activeTab === 'savings' && (
              <div className="p-4 space-y-4">
                {/* Savings Calculator */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-3">Your Potential Savings</h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Current Bill</span>
                      <span className="text-lg font-bold text-red-500">$350/mo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">After Spray Foam</span>
                      <span className="text-lg font-bold text-green-500">$210/mo</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-900">Monthly Savings</span>
                        <span className="text-xl font-bold text-green-600">$140</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-500 text-white text-center py-2 rounded-lg">
                    <p className="text-sm font-bold">$1,680 First Year Savings</p>
                  </div>
                </div>

                {/* Home Size Savings */}
                <div className="space-y-3">
                  <MobileSavingsCard
                    title="Average Home Savings"
                    savingsAmount="$450"
                    savingsPercent="40"
                    timeFrame="per year"
                    icon={TrendingUp}
                    features={[
                      "Lower cooling bills year-round",
                      "Reduced AC runtime",
                      "Fewer repairs needed",
                      "Increased home value"
                    ]}
                    highlight={true}
                  />
                  <MobileSavingsCard
                    title="Large Home Savings"
                    savingsAmount="$750+"
                    savingsPercent="45"
                    timeFrame="per year"
                    icon={Zap}
                    features={[
                      "3000+ sq ft homes",
                      "Multi-story benefits",
                      "Zone control improvements",
                      "Peak demand reduction"
                    ]}
                  />
                  <MobileSavingsCard
                    title="Business Savings"
                    savingsAmount="$2,400+"
                    savingsPercent="50"
                    timeFrame="per year"
                    icon={Building2}
                    features={[
                      "Commercial properties",
                      "Warehouse applications",
                      "Tax incentives available",
                      "Utility rebates eligible"
                    ]}
                  />
                </div>

                {/* Related Services */}
                <RelatedServices currentService="/services/spray-foam" isMobile={true} />
              </div>
            )}

            {/* Areas Tab */}
            {activeTab === 'areas' && (
              <div className="p-4 space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Service Areas</h3>
                  <div className="space-y-2">
                    {serviceAreas.slice(0, 6).map((area, index) => (
                      <Link
                        key={index}
                        to={`/areas/${area.toLowerCase().replace(' ', '-')}`}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-orange-500" />
                          <span className="text-sm font-medium text-gray-900">{area}</span>
                        </div>
                        <ChevronDown className="w-5 h-5 text-gray-400 rotate-[-90deg]" />
                      </Link>
                    ))}
                  </div>
                  <button className="w-full mt-3 text-center text-sm text-orange-500 font-medium">
                    View all {serviceAreas.length} areas →
                  </button>
                </div>

                {/* Coverage Map */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Full RGV Coverage</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    We serve all of Hidalgo, Cameron, Willacy, and Starr Counties
                  </p>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <p className="text-xs text-gray-700">
                      <span className="font-semibold">Fast Response:</span> Most areas within 30-45 minutes
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </MobileServiceLayout>

      {/* Desktop Version */}
      <div className="hidden lg:block min-h-screen bg-gray-50">
        {/* Header */}
        <PageHeader />
        
        {/* Spacer for fixed header - increased to prevent overlap */}
        <div className="h-24 lg:h-28"></div>
        
        {/* Clean Header with Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Spray Foam Insulation</span>
            </nav>
          </div>
        </div>

        {/* Hero Section - Cleaner Design */}
        <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl font-bold mb-4">
              SPRAY FOAM INSULATION IN RIO GRANDE VALLEY, TX
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Spray Foam Insulation Services in McAllen, Edinburg, Mission, and Surrounding Areas
            </p>
          </div>
        </section>

        {/* Main Content with Side Panel */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Main Content Area */}
            <div className="flex-1">
            {/* Introduction Section - Following Template */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Spray Foam Insulation in Rio Grande Valley, Texas</h2>
              <p className="text-gray-700 mb-4">
                Living in the Rio Grande Valley means dealing with extreme heat that can send your energy bills soaring. 
                With temperatures regularly exceeding 100°F and humidity that makes your AC work overtime, proper insulation 
                isn't just a luxury—it's a necessity. Valley Insulation Pros provides professional spray foam insulation 
                services that can reduce your cooling costs by up to 40% while keeping your home comfortable year-round.
              </p>
              <p className="text-gray-700 mb-4">
                We offer 24/7 emergency service and scheduled installations throughout <Link to="/areas/mcallen" className="text-orange-500 hover:text-orange-600 font-medium">McAllen</Link>, 
                <Link to="/areas/edinburg" className="text-orange-500 hover:text-orange-600 font-medium">Edinburg</Link>, 
                <Link to="/areas/mission" className="text-orange-500 hover:text-orange-600 font-medium">Mission</Link>, 
                <Link to="/areas/pharr" className="text-orange-500 hover:text-orange-600 font-medium">Pharr</Link>, 
                and the entire <Link to="/locations" className="text-orange-500 hover:text-orange-600 font-medium">Rio Grande Valley region</Link>. Our EPA-certified technicians use the latest spray foam technology 
                to create an airtight seal that stops energy loss, prevents moisture damage, and eliminates hot spots in your home.
              </p>
            </div>

            {/* Emergency Service Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Emergency Insulation Service in Rio Grande Valley</h2>
              <p className="text-gray-700 mb-4">
                Our team is strategically positioned throughout the RGV to respond quickly when insulation failures lead to 
                emergency situations. Whether you're dealing with skyrocketing energy bills, moisture damage from failed 
                insulation, uncomfortable hot spots making rooms unbearable, or preparing for extreme weather, we're here to help. 
                We provide immediate assessments at residential properties, <Link to="/services/commercial" className="text-orange-500 hover:text-orange-600 font-medium">commercial buildings</Link>, 
                industrial facilities, and new construction sites throughout the Valley.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <p className="text-orange-900 font-semibold">
                  Response time: Fast response – call for current availability. Same-day quotes available.
                </p>
              </div>
            </div>

            {/* Services We Provide */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Services We Provide in Rio Grande Valley</h2>
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

            {/* Why Choose Us */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Why Choose Valley Insulation Pros in Rio Grande Valley?</h2>
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
              <h2 className="text-2xl font-bold mb-6">Common Locations We Service</h2>
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
              <h2 className="text-2xl font-bold mb-4">Serving All of Rio Grande Valley and Nearby Areas</h2>
              <p className="text-gray-700 mb-4">
                Valley Insulation Pros proudly serves the entire Rio Grande Valley region, including <Link to="/areas/mcallen" className="text-orange-500 hover:text-orange-600 font-medium">McAllen</Link> and its 
                neighborhoods (North McAllen, South McAllen, West McAllen), <Link to="/areas/edinburg" className="text-orange-500 hover:text-orange-600 font-medium">Edinburg</Link> (including UTRGV campus area), 
                <Link to="/areas/mission" className="text-orange-500 hover:text-orange-600 font-medium">Mission</Link>, <Link to="/areas/pharr" className="text-orange-500 hover:text-orange-600 font-medium">Pharr</Link>, 
                <Link to="/areas/brownsville" className="text-orange-500 hover:text-orange-600 font-medium">Brownsville</Link> (including Port of Brownsville area), 
                <Link to="/areas/harlingen" className="text-orange-500 hover:text-orange-600 font-medium">Harlingen</Link> (including Valley International Airport area), 
                Weslaco, San Juan, Mercedes, La Feria, Donna, Alamo, San Benito, Los Fresnos, Port Isabel, and South Padre Island.
              </p>
              <p className="text-gray-700">
                We also service rural communities throughout Hidalgo County, Cameron County, Willacy County, and Starr County, 
                ensuring everyone in South Texas has access to quality spray foam insulation services.
              </p>
            </div>

            {/* Savings Calculator Visual */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">See How Much You Can Save</h2>
              
              {/* Monthly Savings Display */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Current Monthly Bill</p>
                    <div className="text-3xl font-bold text-red-500">$350</div>
                    <p className="text-xs text-gray-500 mt-1">Average RGV home</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">After Spray Foam</p>
                    <div className="text-3xl font-bold text-green-500">$210</div>
                    <p className="text-xs text-gray-500 mt-1">40% reduction</p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-block bg-green-500 text-white rounded-full px-6 py-3">
                    <span className="text-2xl font-bold">Save $140/month</span>
                  </div>
                </div>
              </div>

              {/* Annual and Lifetime Savings */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <DollarSign className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">$1,680</div>
                  <p className="text-sm text-gray-600">First Year Savings</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">$8,400</div>
                  <p className="text-sm text-gray-600">5-Year Savings</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">$25,200</div>
                  <p className="text-sm text-gray-600">15-Year Savings</p>
                </div>
              </div>

              {/* Home Size Comparison */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Estimated Savings by Home Size</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Home className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">Small Home (1,000-1,500 sq ft)</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-green-600">$80-120/mo</span>
                      <p className="text-xs text-gray-500">Typical savings</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Home className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">Medium Home (1,500-2,500 sq ft)</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-green-600">$120-180/mo</span>
                      <p className="text-xs text-gray-500">Typical savings</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Home className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">Large Home (2,500+ sq ft)</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-green-600">$180-300/mo</span>
                      <p className="text-xs text-gray-500">Typical savings</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Timeline */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Return on Investment</h4>
                    <p className="text-sm text-gray-600">Most installations pay for themselves in</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">3-5 Years</div>
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
              <RelatedServices currentService="/services/spray-foam" />
            </div>

            {/* Service Areas Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Spray Foam Insulation by City</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Link to="/services/spray-foam/mcallen" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Spray Foam in McAllen
                </Link>
                <Link to="/services/spray-foam/edinburg" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Spray Foam in Edinburg
                </Link>
                <Link to="/services/spray-foam/brownsville" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Spray Foam in Brownsville
                </Link>
                <Link to="/services/spray-foam/harlingen" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Spray Foam in Harlingen
                </Link>
                <Link to="/services/spray-foam/mission" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Spray Foam in Mission
                </Link>
                <Link to="/services/spray-foam/pharr" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Spray Foam in Pharr
                </Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Save on Energy Bills Today</h2>
              <p className="text-xl mb-6 text-white/90">
                Don't let another day pass with inefficient insulation draining your wallet. Our expert team is ready 
                to transform your home's energy efficiency with professional spray foam installation. With same-day quotes 
                and fast installation, you could be saving money within 48 hours. Call now to schedule your free inspection 
                and see why thousands of RGV homeowners trust Valley Insulation Pros.
              </p>
              <div className="text-3xl font-bold">
                24/7 Emergency Service: (956) 854-0899
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
                  <CardTitle className="text-xl text-center">GET IMMEDIATE HELP</CardTitle>
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
                      CALL NOW: (956) 854-0899
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
                      <Link to="/areas/brownsville" className="text-sm hover:text-orange-500">Brownsville</Link>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <Link to="/areas/harlingen" className="text-sm hover:text-orange-500">Harlingen</Link>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">Weslaco</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">San Juan</span>
                    </li>
                    <li className="text-sm text-gray-500 pl-6">+ more areas</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">SPRAY FOAM BENEFITS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Thermometer className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">40% Energy Savings</p>
                        <p className="text-xs text-gray-600">Lower cooling bills</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Complete Air Seal</p>
                        <p className="text-xs text-gray-600">No more drafts</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Droplets className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Moisture Barrier</p>
                        <p className="text-xs text-gray-600">Prevents mold growth</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Home className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Added Structure</p>
                        <p className="text-xs text-gray-600">30% stronger walls</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      {/* Footer and Mobile Navigation */}
      <PageFooter />
      <FloatingMenu />
      <MobileBottomNav />
    </>
  );
};

export default SprayFoam;