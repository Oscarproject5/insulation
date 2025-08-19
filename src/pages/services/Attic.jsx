import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Sun, 
  Thermometer, 
  Clock, 
  CheckCircle,
  Phone,
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  DollarSign,
  Award,
  Users,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Wind,
  Zap,
  Star,
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

const Attic = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      title: "Complete Attic Insulation",
      description: "Full attic coverage with spray foam or blown-in materials"
    },
    {
      title: "Insulation Removal & Replacement",
      description: "Remove old, damaged insulation and install new materials"
    },
    {
      title: "Radiant Barrier Installation",
      description: "Reflective barriers to block radiant heat from the roof"
    },
    {
      title: "Air Sealing & Ventilation",
      description: "Seal air leaks and ensure proper attic ventilation"
    },
    {
      title: "Attic Energy Audits",
      description: "Comprehensive assessment to identify efficiency issues"
    },
    {
      title: "Insulation Top-Ups",
      description: "Add insulation to meet current R-value standards"
    },
    {
      title: "Ductwork Insulation",
      description: "Insulate HVAC ducts running through the attic"
    },
    {
      title: "Pest & Moisture Protection",
      description: "Treatments to prevent pest infestations and moisture damage"
    }
  ];

  const warningSign = [
    {
      icon: <Thermometer className="w-5 h-5" />,
      title: "Hot Rooms Upstairs",
      description: "Second floor stays uncomfortably warm despite AC running"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "High Energy Bills",
      description: "Cooling costs keep climbing every summer"
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Ice Dams or Moisture",
      description: "Signs of condensation or water damage in attic"
    },
    {
      icon: <Wind className="w-5 h-5" />,
      title: "Drafts & Temperature Swings",
      description: "Rooms feel different temperatures throughout the day"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AC Running Constantly",
      description: "Your HVAC system never seems to shut off"
    }
  ];

  const locations = [
    "Single-family homes",
    "Two-story residences",
    "Ranch-style homes",
    "Historic homes needing upgrades",
    "New construction projects",
    "Commercial buildings with attic space",
    "Warehouses and storage facilities",
    "Churches and community centers"
  ];

  const faqs = [
    {
      question: "How much insulation do I need in my attic?",
      answer: "In the Lower Rio Grande Valley, we recommend R-30 to R-38 for optimal energy efficiency. This typically means 10-14 inches of blown-in insulation or 8-10 inches of spray foam."
    },
    {
      question: "Should I remove old insulation before adding new?",
      answer: "It depends on the condition. If your old insulation is damaged, moldy, or pest-infested, removal is recommended. Otherwise, we can often add new insulation on top of existing material."
    },
    {
      question: "How much can attic insulation reduce my cooling costs?",
      answer: "Proper attic insulation can reduce cooling costs by 30-40% in our hot climate. The attic is where most heat enters your home, so it's the most important area to insulate."
    },
    {
      question: "Do I need a radiant barrier with attic insulation?",
      answer: "Radiant barriers are highly recommended in South Texas. They work with insulation to reflect radiant heat, reducing attic temperatures by up to 30°F on hot days."
    }
  ];

  const serviceAreas = [
    "McAllen",
    "Brownsville",
    "Harlingen",
    "Edinburg",
    "Mission",
    "Pharr",
    "Weslaco",
    "San Benito"
  ];

  return (
    <>
      <SEOHead
        title="Attic Insulation McAllen TX | Professional Installation RGV"
        description="Complete attic insulation solutions for RGV homes. Reduce cooling costs by 30% with proper attic insulation. Serving McAllen, Brownsville, Harlingen, and more."
        keywords="attic insulation, McAllen attic services, RGV insulation, cooling cost reduction"
        canonicalUrl="https://valleyinsulation.com/services/attic"
      />
      {/* Mobile Version */}
      <MobileServiceLayout
        title="Attic Insulation"
        subtitle="Stop heat at the source"
        rating={4.8}
        reviews={287}
        responseTime="Same day"
        heroGradient="from-amber-500 via-orange-500 to-red-500"
        heroIcon={Home}
        heroPattern="grid"
      >
        {({ activeTab }) => (
          <>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="p-4 space-y-4">
                {/* Heat Protection Visual */}
                <div className="bg-gradient-to-b from-red-50 to-blue-50 rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Attic Heat Protection</h3>
                  <div className="space-y-2">
                    <div className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm flex items-center justify-between">
                      <span>Roof Surface</span>
                      <span className="font-bold">150°F+</span>
                    </div>
                    <div className="bg-orange-500 text-white px-3 py-2 rounded-lg text-sm flex items-center justify-between">
                      <span>Uninsulated Attic</span>
                      <span className="font-bold">130°F</span>
                    </div>
                    <div className="bg-green-500 text-white px-3 py-2 rounded-lg text-sm flex items-center justify-between">
                      <span>With Insulation</span>
                      <span className="font-bold">78°F</span>
                    </div>
                  </div>
                </div>

                {/* Warning Signs */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Signs You Need Attic Insulation</h3>
                  <div className="space-y-2">
                    {warningSign.slice(0, 3).map((sign, index) => (
                      <div key={index} className="flex items-start gap-3 p-2 bg-red-50 rounded-lg">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          {sign.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">{sign.title}</p>
                          <p className="text-xs text-gray-600">{sign.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Benefits */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Why Insulate Your Attic?</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <DollarSign className="w-6 h-6 text-green-600 mb-1" />
                      <p className="text-sm font-semibold text-gray-900">40% Savings</p>
                      <p className="text-xs text-gray-500">On cooling costs</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Thermometer className="w-6 h-6 text-blue-600 mb-1" />
                      <p className="text-sm font-semibold text-gray-900">Cooler Home</p>
                      <p className="text-xs text-gray-500">Even temperatures</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <Shield className="w-6 h-6 text-purple-600 mb-1" />
                      <p className="text-sm font-semibold text-gray-900">R-30 to R-38</p>
                      <p className="text-xs text-gray-500">Recommended</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-orange-600 mb-1" />
                      <p className="text-sm font-semibold text-gray-900">1 Day Install</p>
                      <p className="text-xs text-gray-500">Quick & clean</p>
                    </div>
                  </div>
                </div>

                {/* Related Services */}
                <RelatedServices currentService="/services/attic" isMobile={true} />
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="p-4 space-y-3">
                <MobileServiceCard
                  icon={<Home className="w-6 h-6" />}
                  title="Complete Attic Insulation"
                  description="Full coverage with spray foam or blown-in"
                  badge="Most Popular"
                />
                <MobileServiceCard
                  icon={<AlertTriangle className="w-6 h-6" />}
                  title="Insulation Removal"
                  description="Remove old, damaged insulation"
                />
                <MobileServiceCard
                  icon={<Sun className="w-6 h-6" />}
                  title="Radiant Barrier"
                  description="Block radiant heat from roof"
                />
                <MobileServiceCard
                  icon={<Wind className="w-6 h-6" />}
                  title="Air Sealing"
                  description="Seal leaks & improve ventilation"
                />
                <MobileServiceCard
                  icon={<Thermometer className="w-6 h-6" />}
                  title="Energy Audits"
                  description="Find efficiency issues"
                />
                <MobileServiceCard
                  icon={<Shield className="w-6 h-6" />}
                  title="Pest Protection"
                  description="Prevent infestations"
                />
              </div>
            )}

            {/* Savings Tab */}
            {activeTab === 'savings' && (
              <div className="p-4 space-y-4">
                {/* ROI Calculator */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-3">Attic Insulation ROI</h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Current Bill</span>
                      <span className="text-lg font-bold text-red-500">$320/mo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">After Insulation</span>
                      <span className="text-lg font-bold text-green-500">$192/mo</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-900">Monthly Savings</span>
                        <span className="text-xl font-bold text-green-600">$128</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-500 text-white text-center py-2 rounded-lg">
                    <p className="text-sm font-bold">2-3 Year Full ROI</p>
                  </div>
                </div>

                {/* Attic Savings Options */}
                <div className="space-y-3">
                  <MobileSavingsCard
                    title="Average Attic Savings"
                    savingsAmount="$380"
                    savingsPercent="35"
                    timeFrame="per year"
                    icon={TrendingUp}
                    features={[
                      "Stop heat at the source",
                      "Reduce AC strain",
                      "Even room temperatures",
                      "Year-round comfort"
                    ]}
                    highlight={true}
                  />
                  <MobileSavingsCard
                    title="Premium Attic Package"
                    savingsAmount="$520"
                    savingsPercent="40"
                    timeFrame="per year"
                    icon={Zap}
                    features={[
                      "Spray foam + radiant barrier",
                      "Maximum protection",
                      "Whole-home benefits",
                      "Fastest payback"
                    ]}
                  />
                  <MobileSavingsCard
                    title="Two-Story Home Benefits"
                    savingsAmount="$680"
                    savingsPercent="45"
                    timeFrame="per year"
                    icon={Home}
                    features={[
                      "Eliminate hot upstairs",
                      "Consistent temperatures",
                      "Improved sleep comfort",
                      "Lower HVAC replacement"
                    ]}
                  />
                </div>
              </div>
            )}

            {/* Areas Tab */}
            {activeTab === 'areas' && (
              <div className="p-4 space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Service Areas</h3>
                  <div className="space-y-2">
                    {serviceAreas.map((area, index) => (
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
                </div>

                {/* Coverage Info */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Lower RGV Coverage</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Professional attic insulation throughout Hidalgo, Cameron, Willacy & Starr Counties
                  </p>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <p className="text-xs text-gray-700">
                      <span className="font-semibold">Free Assessment:</span> Schedule your attic inspection today
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
            <span className="text-gray-900 font-medium">Attic Insulation</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">
            ATTIC INSULATION IN LOWER RIO GRANDE VALLEY
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional Attic Insulation Services to Stop Heat at the Source - Serving McAllen, Brownsville, Harlingen, and All RGV
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
              <h2 className="text-3xl font-bold mb-4">Attic Insulation Services in Lower Rio Grande Valley</h2>
              <p className="text-gray-700 mb-4">
                Your attic is the frontline defense against the brutal South Texas heat. With summer temperatures regularly 
                exceeding 100°F, an under-insulated attic turns your home into an oven, forcing your AC to work overtime and 
                sending energy bills through the roof. Valley Insulation Pros specializes in attic insulation solutions designed 
                specifically for the Lower Rio Grande Valley climate, helping homeowners reduce cooling costs by up to 40% while 
                maintaining comfortable indoor temperatures year-round.
              </p>
              <p className="text-gray-700 mb-4">
                We provide comprehensive attic insulation services throughout <Link to="/areas/mcallen" className="text-orange-500 hover:text-orange-600 font-medium">McAllen</Link>, 
                <Link to="/areas/brownsville" className="text-orange-500 hover:text-orange-600 font-medium"> Brownsville</Link>, 
                <Link to="/areas/harlingen" className="text-orange-500 hover:text-orange-600 font-medium"> Harlingen</Link>, 
                <Link to="/areas/edinburg" className="text-orange-500 hover:text-orange-600 font-medium"> Edinburg</Link>, 
                and the entire <Link to="/locations" className="text-orange-500 hover:text-orange-600 font-medium">Lower Rio Grande Valley</Link>. 
                Our certified technicians assess your attic's current condition, recommend the best insulation type for your needs, 
                and ensure proper ventilation for maximum efficiency and longevity.
              </p>
            </div>

            {/* Warning Signs Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Signs Your Attic Needs Better Insulation</h2>
              <p className="text-gray-700 mb-6">
                Don't wait for a complete insulation failure. These warning signs indicate your attic insulation needs attention:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {warningSign.map((sign, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                    <div className="bg-red-100 p-2 rounded-lg text-red-600 flex-shrink-0">
                      {sign.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{sign.title}</h3>
                      <p className="text-sm text-gray-600">{sign.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services We Provide */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Complete Attic Insulation Services</h2>
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

            {/* Insulation Options */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Attic Insulation Options for RGV Homes</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Spray Foam Attic Insulation</h3>
                  <p className="text-gray-600 mb-2">
                    The premium choice for maximum efficiency. <Link to="/services/spray-foam" className="text-orange-500 hover:text-orange-600 font-medium">Spray foam</Link> creates 
                    an airtight seal, stopping heat transfer and moisture infiltration. Perfect for our humid climate.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• R-value: 6.0-7.0 per inch (closed cell)</li>
                    <li>• Creates complete air barrier</li>
                    <li>• Prevents moisture and mold</li>
                    <li>• Adds structural strength</li>
                    <li>• Energy savings: Up to 40%</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Blown-In Attic Insulation</h3>
                  <p className="text-gray-600 mb-2">
                    Cost-effective solution providing excellent coverage. <Link to="/services/blown-in" className="text-orange-500 hover:text-orange-600 font-medium">Blown-in insulation</Link> fills 
                    every gap and corner, creating a thick blanket of protection against heat.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• R-value: 2.2-3.8 per inch</li>
                    <li>• Quick installation (4-6 hours)</li>
                    <li>• Great for existing homes</li>
                    <li>• Fire resistant materials</li>
                    <li>• Energy savings: Up to 30%</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Radiant Barrier + Insulation Combo</h3>
                  <p className="text-gray-600 mb-2">
                    The ultimate solution for South Texas heat. Combining traditional insulation with radiant barriers 
                    provides maximum protection against our intense sun.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Reflects up to 97% of radiant heat</li>
                    <li>• Reduces attic temps by 30°F</li>
                    <li>• Works with any insulation type</li>
                    <li>• Extends roof life</li>
                    <li>• Combined savings: Up to 45%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Heat Map Visual */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">How Attic Insulation Protects Your Home</h2>
              <div className="bg-gradient-to-b from-red-100 to-blue-100 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="bg-red-500 text-white p-4 rounded-lg text-center">
                    <Sun className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-bold">Roof Surface: 150°F+</p>
                    <p className="text-sm">Direct sun exposure on dark shingles</p>
                  </div>
                  <div className="bg-orange-500 text-white p-4 rounded-lg text-center">
                    <p className="font-bold">Uninsulated Attic: 130°F</p>
                    <p className="text-sm">Heat radiates into living space</p>
                  </div>
                  <div className="bg-yellow-500 text-white p-4 rounded-lg text-center">
                    <p className="font-bold">With Basic Insulation: 95°F</p>
                    <p className="text-sm">Some heat still transfers through</p>
                  </div>
                  <div className="bg-green-500 text-white p-4 rounded-lg text-center">
                    <p className="font-bold">Properly Insulated: 78°F</p>
                    <p className="text-sm">Comfortable living space maintained</p>
                  </div>
                  <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
                    <Home className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-bold">Your Living Space: 72°F</p>
                    <p className="text-sm">AC runs efficiently, lower bills</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Locations */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Properties We Insulate</h2>
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
              <h2 className="text-2xl font-bold mb-4">Attic Insulation Throughout Lower Rio Grande Valley</h2>
              <p className="text-gray-700 mb-4">
                Valley Insulation Pros provides professional attic insulation services across the entire Lower Rio Grande Valley, 
                including <Link to="/areas/mcallen" className="text-orange-500 hover:text-orange-600 font-medium">McAllen</Link> (North McAllen, South McAllen, West McAllen), 
                <Link to="/areas/brownsville" className="text-orange-500 hover:text-orange-600 font-medium"> Brownsville</Link> (Downtown, Southmost, North Brownsville), 
                <Link to="/areas/harlingen" className="text-orange-500 hover:text-orange-600 font-medium"> Harlingen</Link> (Downtown, Treasure Hills, Dixieland), 
                <Link to="/areas/edinburg" className="text-orange-500 hover:text-orange-600 font-medium"> Edinburg</Link> (UTRGV campus area), 
                <Link to="/areas/mission" className="text-orange-500 hover:text-orange-600 font-medium"> Mission</Link>, 
                <Link to="/areas/pharr" className="text-orange-500 hover:text-orange-600 font-medium"> Pharr</Link>, 
                Weslaco, San Benito, Mercedes, La Feria, Donna, Alamo, San Juan, Raymondville, Port Isabel, and South Padre Island.
              </p>
              <p className="text-gray-700">
                We also service rural communities throughout Hidalgo County, Cameron County, Willacy County, and Starr County. 
                No matter where you are in South Texas, we'll help you beat the heat with proper attic insulation.
              </p>
            </div>

            {/* Savings Calculator */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Attic Insulation ROI Calculator</h2>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Current Monthly Bill</p>
                    <div className="text-3xl font-bold text-red-500">$320</div>
                    <p className="text-xs text-gray-500 mt-1">Hot attic = high bills</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">After Attic Insulation</p>
                    <div className="text-3xl font-bold text-green-500">$192</div>
                    <p className="text-xs text-gray-500 mt-1">40% reduction</p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-block bg-green-500 text-white rounded-full px-6 py-3">
                    <span className="text-2xl font-bold">Save $128/month</span>
                  </div>
                </div>
              </div>

              {/* Annual Savings */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <DollarSign className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">$1,536</div>
                  <p className="text-sm text-gray-600">First Year Savings</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">$7,680</div>
                  <p className="text-sm text-gray-600">5-Year Savings</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">2-3 Years</div>
                  <p className="text-sm text-gray-600">Full ROI Period</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Attic Insulation FAQs</h2>
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
              <RelatedServices currentService="/services/attic" />
            </div>

            {/* Service Areas Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Attic Insulation by City</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Link to="/services/attic/mcallen" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Attic Insulation McAllen
                </Link>
                <Link to="/services/attic/brownsville" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Attic Insulation Brownsville
                </Link>
                <Link to="/services/attic/harlingen" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Attic Insulation Harlingen
                </Link>
                <Link to="/services/attic/edinburg" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Attic Insulation Edinburg
                </Link>
                <Link to="/services/attic/mission" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Attic Insulation Mission
                </Link>
                <Link to="/services/attic/pharr" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Attic Insulation Pharr
                </Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Stop the Heat at Its Source</h2>
              <p className="text-xl mb-6 text-white/90">
                Your attic is the key to a comfortable, energy-efficient home. Don't let another summer pass with sky-high 
                cooling bills and uncomfortable rooms. Our attic insulation experts will assess your needs, recommend the 
                best solution, and transform your home's efficiency. Call now for a free attic inspection and estimate.
              </p>
              <div className="text-3xl font-bold">
                Free Attic Assessment: (956) 854-0899
              </div>
              <Link to="/quote" className="inline-block mt-6 bg-white text-orange-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                Schedule Your Free Inspection
              </Link>
            </div>
          </div>

          {/* Side Panel - Sticky */}
          <div className="w-80 flex-shrink-0 hidden lg:block">
            <div className="sticky top-4">
              {/* CTA Card */}
              <Card className="mb-6 shadow-lg border-2 border-orange-500">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <CardTitle className="text-xl text-center">BEAT THE HEAT</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <Link to="/quote" className="block">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-bold">
                      <Calendar className="mr-2 h-5 w-5" />
                      FREE ATTIC INSPECTION
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

              {/* Quick Stats Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ATTIC FACTS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Sun className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">150°F+ Roof Temp</p>
                        <p className="text-xs text-gray-600">Summer peak heat</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Thermometer className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">40% Heat Source</p>
                        <p className="text-xs text-gray-600">Attic heat infiltration</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <DollarSign className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">35-40% Savings</p>
                        <p className="text-xs text-gray-600">With proper insulation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Home className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">R-30 to R-38</p>
                        <p className="text-xs text-gray-600">Recommended for RGV</p>
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

export default Attic;