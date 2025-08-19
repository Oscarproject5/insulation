import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Volume2, 
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
  Shield,
  ArrowRight,
  TrendingUp,
  Droplets,
  Wind,
  Star,
  Hammer
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

const Wall = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      title: "Exterior Wall Insulation",
      description: "Complete insulation for all exterior-facing walls"
    },
    {
      title: "Interior Wall Soundproofing",
      description: "Reduce noise transmission between rooms"
    },
    {
      title: "Retrofit Wall Insulation",
      description: "Add insulation to existing walls without demolition"
    },
    {
      title: "Dense-Pack Wall Filling",
      description: "Maximum density for superior thermal performance"
    },
    {
      title: "Injection Foam Insulation",
      description: "Expanding foam for complete cavity coverage"
    },
    {
      title: "Vapor Barrier Installation",
      description: "Moisture protection for humid climates"
    },
    {
      title: "Thermal Bridging Solutions",
      description: "Eliminate cold spots and heat transfer points"
    },
    {
      title: "New Construction Walls",
      description: "Complete insulation for new builds"
    }
  ];

  const benefits = [
    {
      icon: <Thermometer className="w-5 h-5" />,
      title: "Eliminate Drafts",
      description: "Stop air infiltration and maintain consistent temperatures"
    },
    {
      icon: <Volume2 className="w-5 h-5" />,
      title: "Noise Reduction",
      description: "Reduce sound transmission by up to 75%"
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Moisture Control",
      description: "Prevent condensation and mold growth in walls"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Energy Savings",
      description: "Reduce heating and cooling costs by 20-25%"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Increased Comfort",
      description: "Even temperatures throughout your home"
    }
  ];

  const locations = [
    "Single-family homes",
    "Multi-family buildings",
    "Historic home renovations",
    "Room additions",
    "Converted garages",
    "Mobile homes",
    "Commercial offices",
    "Retail spaces"
  ];

  const faqs = [
    {
      question: "Can you insulate walls without tearing them down?",
      answer: "Yes! We use injection foam and dense-pack techniques to fill wall cavities through small access holes. These are then patched and painted, leaving your walls looking untouched."
    },
    {
      question: "How much difference does wall insulation make?",
      answer: "Wall insulation can reduce energy loss by 20-25% and significantly improve comfort. Combined with attic insulation, you can see total savings of 35-45% on energy bills."
    },
    {
      question: "What's the best insulation for walls in humid climates?",
      answer: "Closed-cell spray foam or injection foam are ideal for the RGV's humidity. They create an air and moisture barrier while providing excellent thermal resistance."
    },
    {
      question: "How long does wall insulation installation take?",
      answer: "Most homes can be completed in 1-2 days depending on size and access. Retrofit installations typically take longer than new construction."
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
        title="Wall Insulation Services RGV | Interior & Exterior Solutions"
        description="Professional wall insulation for existing homes in Rio Grande Valley. Dense-pack installation without wall damage. Improve comfort and reduce noise."
        keywords="wall insulation, interior wall insulation, exterior insulation, RGV wall services"
        canonicalUrl="https://valleyinsulation.com/services/wall"
      />
      {/* Mobile Version */}
      <MobileServiceLayout
        title="Wall Insulation"
        subtitle="Complete thermal envelope"
        rating={4.7}
        reviews={198}
        responseTime="Next day"
        heroGradient="from-blue-600 via-indigo-500 to-purple-500"
        heroIcon={Layers}
        heroPattern="dots"
      >
        {({ activeTab }) => (
          <>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="p-4 space-y-4">
                {/* No Demolition Alert */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                  <div className="flex items-start gap-2">
                    <Hammer className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">No Wall Removal Needed</p>
                      <p className="text-xs text-gray-600">Retrofit existing walls without demolition</p>
                    </div>
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Wall Insulation Benefits</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <Wind className="w-6 h-6 text-orange-600 mb-1" />
                      <p className="text-sm font-semibold text-gray-900">No Drafts</p>
                      <p className="text-xs text-gray-500">Stop air leaks</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <Volume2 className="w-6 h-6 text-purple-600 mb-1" />
                      <p className="text-sm font-semibold text-gray-900">75% Quieter</p>
                      <p className="text-xs text-gray-500">Reduce noise</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <DollarSign className="w-6 h-6 text-green-600 mb-1" />
                      <p className="text-sm font-semibold text-gray-900">25% Savings</p>
                      <p className="text-xs text-gray-500">Energy costs</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Droplets className="w-6 h-6 text-blue-600 mb-1" />
                      <p className="text-sm font-semibold text-gray-900">Moisture</p>
                      <p className="text-xs text-gray-500">Protection</p>
                    </div>
                  </div>
                </div>

                {/* Before/After Comparison */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">See the Difference</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-red-600 mb-2">Before</p>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-700">• Hot/cold spots</p>
                        <p className="text-xs text-gray-700">• 5-10°F variance</p>
                        <p className="text-xs text-gray-700">• High bills</p>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-green-600 mb-2">After</p>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-700">• Even temps</p>
                        <p className="text-xs text-gray-700">• Consistent comfort</p>
                        <p className="text-xs text-gray-700">• Lower costs</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* How It Works */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Retrofit Process</h3>
                  <div className="space-y-2">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <p className="text-sm text-gray-700">Small access holes drilled</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <p className="text-sm text-gray-700">Inject insulation material</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <p className="text-sm text-gray-700">Patch & paint to match</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <p className="text-sm text-gray-700">Enjoy comfort & savings</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="p-4 space-y-3">
                <MobileServiceCard
                  icon={<Layers className="w-6 h-6" />}
                  title="Exterior Wall Insulation"
                  description="All exterior-facing walls"
                  badge="Essential"
                />
                <MobileServiceCard
                  icon={<Volume2 className="w-6 h-6" />}
                  title="Interior Soundproofing"
                  description="Reduce noise between rooms"
                />
                <MobileServiceCard
                  icon={<Hammer className="w-6 h-6" />}
                  title="Retrofit Insulation"
                  description="No demolition needed"
                  badge="Popular"
                />
                <MobileServiceCard
                  icon={<Shield className="w-6 h-6" />}
                  title="Dense-Pack Filling"
                  description="Maximum thermal performance"
                />
                <MobileServiceCard
                  icon={<Droplets className="w-6 h-6" />}
                  title="Vapor Barrier"
                  description="Moisture protection"
                />
                <MobileServiceCard
                  icon={<Home className="w-6 h-6" />}
                  title="New Construction"
                  description="Complete wall systems"
                />
              </div>
            )}

            {/* Savings Tab */}
            {activeTab === 'savings' && (
              <div className="p-4 space-y-4">
                {/* Investment Returns */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-3">Investment Returns</h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Current Bill</span>
                      <span className="text-lg font-bold text-red-500">$260/mo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">After Walls</span>
                      <span className="text-lg font-bold text-green-500">$195/mo</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-900">Monthly Savings</span>
                        <span className="text-xl font-bold text-green-600">$65</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-100 text-blue-700 text-center py-2 rounded-lg">
                    <p className="text-xs font-semibold">Wall + Attic = 35-45% Total Savings</p>
                  </div>
                </div>

                {/* Wall Insulation Savings */}
                <div className="space-y-3">
                  <MobileSavingsCard
                    title="Typical Wall Savings"
                    savingsAmount="$320"
                    savingsPercent="25"
                    timeFrame="per year"
                    icon={TrendingUp}
                    features={[
                      "Eliminate drafts and cold spots",
                      "Reduce heating/cooling costs",
                      "Improved noise reduction",
                      "Better indoor comfort"
                    ]}
                    highlight={true}
                  />
                  <MobileSavingsCard
                    title="Whole-Home Wall Package"
                    savingsAmount="$480"
                    savingsPercent="30"
                    timeFrame="per year"
                    icon={Home}
                    features={[
                      "All exterior walls insulated",
                      "Maximum energy efficiency",
                      "Significant noise reduction",
                      "Even temperatures year-round"
                    ]}
                  />
                  <MobileSavingsCard
                    title="Soundproofing Benefits"
                    savingsAmount="$200"
                    savingsPercent="15"
                    timeFrame="per year"
                    icon={Volume2}
                    features={[
                      "Interior wall insulation",
                      "75% noise reduction",
                      "Privacy enhancement",
                      "Energy savings bonus"
                    ]}
                  />
                </div>

                {/* Related Services */}
                <RelatedServices currentService="/services/wall" isMobile={true} />
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

                {/* Property Types */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Properties We Service</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {locations.slice(0, 6).map((loc, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        <span className="text-gray-700">{loc}</span>
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
            <span className="text-gray-900 font-medium">Wall Insulation</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">
            WALL INSULATION IN LOWER RIO GRANDE VALLEY
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete Thermal Envelope Protection - Professional Wall Insulation Services in McAllen, Brownsville, and All RGV
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
              <h2 className="text-3xl font-bold mb-4">Wall Insulation Services in Lower Rio Grande Valley</h2>
              <p className="text-gray-700 mb-4">
                Your walls are the largest surface area of your home, and uninsulated walls can account for up to 25% of your 
                total energy loss. In the Lower Rio Grande Valley's extreme climate, proper wall insulation is essential for 
                maintaining comfortable indoor temperatures and controlling energy costs. Valley Insulation Pros specializes in 
                wall insulation solutions that create a complete thermal envelope, eliminating drafts, reducing noise, and 
                protecting against our humid climate.
              </p>
              <p className="text-gray-700 mb-4">
                We provide comprehensive wall insulation services throughout <Link to="/areas/mcallen" className="text-orange-500 hover:text-orange-600 font-medium">McAllen</Link>, 
                <Link to="/areas/brownsville" className="text-orange-500 hover:text-orange-600 font-medium"> Brownsville</Link>, 
                <Link to="/areas/harlingen" className="text-orange-500 hover:text-orange-600 font-medium"> Harlingen</Link>, 
                <Link to="/areas/edinburg" className="text-orange-500 hover:text-orange-600 font-medium"> Edinburg</Link>, 
                and the entire <Link to="/locations" className="text-orange-500 hover:text-orange-600 font-medium">Lower Rio Grande Valley</Link>. 
                Whether you're dealing with drafty rooms, high energy bills, or noise issues, our expert technicians have the 
                solution to transform your walls into an efficient barrier against heat, cold, and sound.
              </p>
            </div>

            {/* Retrofit Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Retrofit Wall Insulation Without Demolition</h2>
              <p className="text-gray-700 mb-4">
                Many RGV homes built before modern energy codes have little to no wall insulation. Our retrofit insulation 
                services allow us to insulate your existing walls without the mess and expense of tearing down drywall. 
                Using advanced injection techniques, we can fill wall cavities completely, dramatically improving your 
                home's efficiency and comfort.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-blue-900 font-semibold">
                  Retrofit Process: Small access holes → Inject insulation → Patch & paint → Enjoy comfort!
                </p>
              </div>
            </div>

            {/* Services We Provide */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Wall Insulation Services We Offer</h2>
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

            {/* Insulation Types */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Wall Insulation Options</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Injection Foam Insulation</h3>
                  <p className="text-gray-600 mb-2">
                    The best choice for existing walls. Injection foam expands to fill every gap and cavity, creating a 
                    seamless barrier against heat and moisture. Perfect for our humid RGV climate.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• R-value: 4.0-5.0 per inch</li>
                    <li>• No wall removal needed</li>
                    <li>• Excellent air sealing</li>
                    <li>• Moisture resistant</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Dense-Pack Cellulose</h3>
                  <p className="text-gray-600 mb-2">
                    Eco-friendly option that provides excellent thermal and sound insulation. Dense-packing prevents settling 
                    and ensures complete coverage. Great for <Link to="/services/blown-in" className="text-orange-500 hover:text-orange-600 font-medium">retrofit applications</Link>.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• R-value: 3.2-3.8 per inch</li>
                    <li>• Superior soundproofing</li>
                    <li>• Fire resistant treatment</li>
                    <li>• Made from recycled materials</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Spray Foam for New Construction</h3>
                  <p className="text-gray-600 mb-2">
                    For new builds or major renovations, <Link to="/services/spray-foam" className="text-orange-500 hover:text-orange-600 font-medium">spray foam</Link> provides 
                    the ultimate wall insulation with superior air sealing and moisture control.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• R-value: 6.0-7.0 per inch</li>
                    <li>• Complete air barrier</li>
                    <li>• Adds structural strength</li>
                    <li>• Lifetime performance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Benefits of Wall Insulation</h2>
              <div className="space-y-4">
                {benefits.map((item, index) => (
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

            {/* Thermal Imaging Visual */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">See the Difference Wall Insulation Makes</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-100 to-yellow-100 rounded-lg p-6">
                  <h3 className="font-semibold text-center mb-4">Before Wall Insulation</h3>
                  <div className="space-y-3">
                    <div className="bg-red-500 text-white p-3 rounded text-sm">
                      <Wind className="w-4 h-4 inline mr-2" />
                      Hot/cold spots visible on walls
                    </div>
                    <div className="bg-orange-500 text-white p-3 rounded text-sm">
                      <Thermometer className="w-4 h-4 inline mr-2" />
                      Temperature varies 5-10°F room to room
                    </div>
                    <div className="bg-yellow-500 text-white p-3 rounded text-sm">
                      <DollarSign className="w-4 h-4 inline mr-2" />
                      High energy bills from heat transfer
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-6">
                  <h3 className="font-semibold text-center mb-4">After Wall Insulation</h3>
                  <div className="space-y-3">
                    <div className="bg-green-500 text-white p-3 rounded text-sm">
                      <Shield className="w-4 h-4 inline mr-2" />
                      Uniform wall temperature
                    </div>
                    <div className="bg-blue-500 text-white p-3 rounded text-sm">
                      <Home className="w-4 h-4 inline mr-2" />
                      Consistent comfort throughout
                    </div>
                    <div className="bg-green-600 text-white p-3 rounded text-sm">
                      <TrendingUp className="w-4 h-4 inline mr-2" />
                      20-25% energy savings
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Locations */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Where We Install Wall Insulation</h2>
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
              <h2 className="text-2xl font-bold mb-4">Wall Insulation Services Throughout Lower Rio Grande Valley</h2>
              <p className="text-gray-700 mb-4">
                Valley Insulation Pros provides professional wall insulation services across the entire Lower Rio Grande Valley, 
                including <Link to="/areas/mcallen" className="text-orange-500 hover:text-orange-600 font-medium">McAllen</Link>, 
                <Link to="/areas/brownsville" className="text-orange-500 hover:text-orange-600 font-medium"> Brownsville</Link>, 
                <Link to="/areas/harlingen" className="text-orange-500 hover:text-orange-600 font-medium"> Harlingen</Link>, 
                <Link to="/areas/edinburg" className="text-orange-500 hover:text-orange-600 font-medium"> Edinburg</Link>, 
                <Link to="/areas/mission" className="text-orange-500 hover:text-orange-600 font-medium"> Mission</Link>, 
                <Link to="/areas/pharr" className="text-orange-500 hover:text-orange-600 font-medium"> Pharr</Link>, 
                Weslaco, San Benito, Mercedes, La Feria, Donna, Alamo, San Juan, Raymondville, Port Isabel, and South Padre Island.
              </p>
              <p className="text-gray-700">
                We serve all of Hidalgo County, Cameron County, Willacy County, and Starr County, ensuring every home and 
                business in South Texas has access to professional wall insulation services.
              </p>
            </div>

            {/* Savings Calculator */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Wall Insulation Investment Returns</h2>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Current Monthly Bill</p>
                    <div className="text-3xl font-bold text-red-500">$260</div>
                    <p className="text-xs text-gray-500 mt-1">Uninsulated walls</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">After Wall Insulation</p>
                    <div className="text-3xl font-bold text-green-500">$195</div>
                    <p className="text-xs text-gray-500 mt-1">25% reduction</p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-block bg-green-500 text-white rounded-full px-6 py-3">
                    <span className="text-2xl font-bold">Save $65/month</span>
                  </div>
                </div>
              </div>

              {/* Combined Savings */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Combined with Attic Insulation:</h4>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Wall + <Link to="/services/attic" className="text-orange-500 hover:text-orange-600 font-medium">Attic Insulation</Link></span>
                  <span className="text-2xl font-bold text-blue-600">Save 35-45%</span>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Wall Insulation FAQs</h2>
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
              <RelatedServices currentService="/services/wall" />
            </div>

            {/* Service Areas Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Wall Insulation by City</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Link to="/services/wall/mcallen" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Wall Insulation McAllen
                </Link>
                <Link to="/services/wall/brownsville" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Wall Insulation Brownsville
                </Link>
                <Link to="/services/wall/harlingen" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Wall Insulation Harlingen
                </Link>
                <Link to="/services/wall/edinburg" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Wall Insulation Edinburg
                </Link>
                <Link to="/services/wall/mission" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Wall Insulation Mission
                </Link>
                <Link to="/services/wall/pharr" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Wall Insulation Pharr
                </Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Complete Your Home's Thermal Envelope</h2>
              <p className="text-xl mb-6 text-white/90">
                Don't let uninsulated walls continue draining your energy budget. Our wall insulation experts can transform 
                your home's comfort and efficiency without the mess of major renovation. With our retrofit techniques, you'll 
                enjoy lower bills, consistent temperatures, and a quieter home. Call now for your free wall insulation assessment.
              </p>
              <div className="text-3xl font-bold">
                Free Wall Assessment: (956) 854-0899
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
                  <CardTitle className="text-xl text-center">RETROFIT EXPERTS</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <Link to="/quote" className="block">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-bold">
                      <Calendar className="mr-2 h-5 w-5" />
                      FREE ASSESSMENT
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

              {/* Wall Benefits Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">WALL BENEFITS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Layers className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">No Demolition</p>
                        <p className="text-xs text-gray-600">Retrofit existing walls</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Volume2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">75% Quieter</p>
                        <p className="text-xs text-gray-600">Reduce noise transfer</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Wind className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">No More Drafts</p>
                        <p className="text-xs text-gray-600">Complete air sealing</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <DollarSign className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">25% Savings</p>
                        <p className="text-xs text-gray-600">Lower energy bills</p>
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

export default Wall;