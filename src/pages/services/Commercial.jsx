import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Factory, 
  Store, 
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
  Briefcase,
  FileText,
  Truck,
  Star,
  PiggyBank
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

const Commercial = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      title: "Warehouse Insulation",
      description: "Large-scale spray foam and blown-in for storage facilities"
    },
    {
      title: "Office Building Insulation",
      description: "Complete thermal envelope for multi-story buildings"
    },
    {
      title: "Retail Space Insulation",
      description: "Energy-efficient solutions for stores and shopping centers"
    },
    {
      title: "Industrial Facility Insulation",
      description: "Heavy-duty insulation for manufacturing plants"
    },
    {
      title: "Metal Building Insulation",
      description: "Specialized solutions for steel structures"
    },
    {
      title: "Restaurant & Kitchen Insulation",
      description: "Heat and moisture control for food service"
    },
    {
      title: "School & Institution Insulation",
      description: "Safe, efficient insulation for educational facilities"
    },
    {
      title: "Cold Storage Insulation",
      description: "Temperature control for refrigerated warehouses"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Reduce Operating Costs",
      description: "Cut HVAC expenses by 30-40% annually"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Improve Employee Comfort",
      description: "Better productivity in comfortable environments"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Meet Building Codes",
      description: "Comply with commercial energy standards"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Tax Incentives Available",
      description: "Qualify for energy efficiency rebates"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Minimal Business Disruption",
      description: "Weekend and after-hours installation available"
    }
  ];

  const propertyTypes = [
    "Warehouses & distribution centers",
    "Office buildings & complexes",
    "Retail stores & shopping centers",
    "Manufacturing facilities",
    "Medical offices & clinics",
    "Schools & universities",
    "Churches & community centers",
    "Hotels & hospitality venues"
  ];

  const faqs = [
    {
      question: "How much can commercial insulation save on energy costs?",
      answer: "Commercial properties typically see 30-40% reduction in HVAC costs. For a 10,000 sq ft warehouse, this can mean savings of $500-1,000 per month in the RGV climate."
    },
    {
      question: "Can you work around our business hours?",
      answer: "Yes! We offer weekend and after-hours installation to minimize disruption to your operations. Most projects can be completed over a weekend."
    },
    {
      question: "What's the best insulation for metal buildings?",
      answer: "Closed-cell spray foam is ideal for metal buildings in the RGV. It provides moisture control, prevents condensation, and adds structural strength while offering superior R-value."
    },
    {
      question: "Are there financing options for commercial projects?",
      answer: "Yes, we offer commercial financing and can help you apply for energy efficiency rebates and tax incentives that can offset 20-30% of project costs."
    }
  ];

  const businessDistricts = [
    "McAllen FTZ",
    "Port of Brownsville",
    "Harlingen Industrial",
    "Edinburg Business",
    "Pharr Bridge Area",
    "Mission Commercial"
  ];

  return (
    <>
      <SEOHead
        title="Commercial Insulation McAllen TX | Business & Industrial"
        description="Commercial insulation contractors serving RGV businesses. Warehouses, offices, retail spaces. Energy audits and custom solutions for Texas commercial properties."
        keywords="commercial insulation, business insulation, industrial insulation RGV, warehouse insulation"
        canonicalUrl="https://valleyinsulation.com/services/commercial"
      />
      {/* Mobile Version */}
      <MobileServiceLayout
        title="Commercial"
        subtitle="Business insulation solutions"
        rating={5.0}
        reviews={156}
        responseTime="Priority"
        heroGradient="from-slate-700 via-gray-600 to-zinc-500"
        heroIcon={Building2}
        heroPattern="grid"
      >
        {({ activeTab }) => (
          <>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="p-4 space-y-4">
                {/* Business Benefits Alert */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                  <div className="flex items-start gap-2">
                    <PiggyBank className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">30-40% HVAC Cost Reduction</p>
                      <p className="text-xs text-gray-600">Tax incentives available • Weekend installation</p>
                    </div>
                  </div>
                </div>

                {/* ROI Calculator Preview */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">10,000 sq ft Warehouse Example</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Current HVAC</span>
                      <span className="text-lg font-bold text-red-500">$2,500/mo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">After Insulation</span>
                      <span className="text-lg font-bold text-green-500">$1,500/mo</span>
                    </div>
                    <div className="bg-green-500 text-white text-center py-2 rounded-lg mt-3">
                      <p className="text-sm font-bold">$12,000 Annual Savings</p>
                      <p className="text-xs">18-24 month ROI</p>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Business Benefits</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                      <Truck className="w-5 h-5 text-orange-500" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">Weekend Installation</p>
                        <p className="text-xs text-gray-600">No business disruption</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">Tax Incentives</p>
                        <p className="text-xs text-gray-600">20-30% cost offset available</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                      <Users className="w-5 h-5 text-green-500" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">Employee Comfort</p>
                        <p className="text-xs text-gray-600">Better productivity</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                      <Award className="w-5 h-5 text-purple-500" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">LEED Points</p>
                        <p className="text-xs text-gray-600">Sustainability certification</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Volume Pricing */}
                <div className="bg-orange-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Volume Pricing Available</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Special rates for projects over 5,000 sq ft
                  </p>
                  <div className="flex items-center gap-2 text-orange-600">
                    <Building2 className="w-4 h-4" />
                    <span className="text-xs font-medium">Multiple property discounts</span>
                  </div>
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="p-4 space-y-3">
                <MobileServiceCard
                  icon={<Factory className="w-6 h-6" />}
                  title="Warehouse Insulation"
                  description="Large-scale spray foam & blown-in"
                  badge="Popular"
                />
                <MobileServiceCard
                  icon={<Building2 className="w-6 h-6" />}
                  title="Office Buildings"
                  description="Multi-story thermal envelope"
                />
                <MobileServiceCard
                  icon={<Store className="w-6 h-6" />}
                  title="Retail Spaces"
                  description="Stores & shopping centers"
                />
                <MobileServiceCard
                  icon={<Factory className="w-6 h-6" />}
                  title="Industrial Facilities"
                  description="Manufacturing plants"
                />
                <MobileServiceCard
                  icon={<Building2 className="w-6 h-6" />}
                  title="Metal Buildings"
                  description="Steel structure specialists"
                  badge="Specialty"
                />
                <MobileServiceCard
                  icon={<Briefcase className="w-6 h-6" />}
                  title="Institutions"
                  description="Schools & medical facilities"
                />
              </div>
            )}

            {/* Savings Tab */}
            {activeTab === 'savings' && (
              <div className="p-4 space-y-4">
                {/* Commercial Savings Solutions */}
                <div className="space-y-3">
                  <MobileSavingsCard
                    title="Warehouse Savings"
                    savingsAmount="$12,000"
                    savingsPercent="40"
                    timeFrame="per year"
                    icon={Factory}
                    features={[
                      "Large facility benefits",
                      "Improved worker comfort",
                      "Reduced HVAC strain",
                      "Tax incentives available"
                    ]}
                    highlight={true}
                  />
                  <MobileSavingsCard
                    title="Office Building Savings"
                    savingsAmount="$8,400"
                    savingsPercent="35"
                    timeFrame="per year"
                    icon={Building2}
                    features={[
                      "Multi-zone climate control",
                      "Employee productivity boost",
                      "Noise reduction benefits",
                      "LEED certification support"
                    ]}
                  />
                  <MobileSavingsCard
                    title="Retail & Restaurant Savings"
                    savingsAmount="$5,200"
                    savingsPercent="30"
                    timeFrame="per year"
                    icon={Store}
                    features={[
                      "Enhanced customer comfort",
                      "Kitchen heat management",
                      "Reduced utility costs",
                      "Faster ROI timeline"
                    ]}
                  />
                </div>

                {/* Financing Options */}
                <div className="bg-blue-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Commercial Financing</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 0% interest for 12 months</li>
                    <li>• Tax incentive assistance</li>
                    <li>• Energy rebate applications</li>
                    <li>• Net 30/60/90 terms available</li>
                  </ul>
                </div>

                {/* Related Services */}
                <RelatedServices currentService="/services/commercial" isMobile={true} />
              </div>
            )}

            {/* Areas Tab */}
            {activeTab === 'areas' && (
              <div className="p-4 space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Business Districts</h3>
                  <div className="space-y-2">
                    {businessDistricts.map((district, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Building2 className="w-5 h-5 text-orange-500" />
                          <span className="text-sm font-medium text-gray-900">{district}</span>
                        </div>
                        <span className="text-xs text-green-600 font-medium">Serviced</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Property Types */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Commercial Properties</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {propertyTypes.slice(0, 6).map((type, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 text-xs">{type}</span>
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
            <span className="text-gray-900 font-medium">Commercial Insulation</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">
            COMMERCIAL INSULATION IN LOWER RIO GRANDE VALLEY
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Large-Scale Insulation Solutions for Businesses - Warehouses, Offices, Retail & Industrial in McAllen, Brownsville, and All RGV
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
              <h2 className="text-3xl font-bold mb-4">Commercial Insulation Services in Lower Rio Grande Valley</h2>
              <p className="text-gray-700 mb-4">
                In the competitive business environment of the Lower Rio Grande Valley, controlling operating costs is crucial 
                for success. With our extreme heat and high humidity, commercial HVAC systems work overtime, consuming up to 
                40% of a building's total energy budget. Valley Insulation Pros specializes in commercial insulation solutions 
                that dramatically reduce energy costs, improve employee comfort, and help businesses meet sustainability goals.
              </p>
              <p className="text-gray-700 mb-4">
                We provide comprehensive commercial insulation services throughout <Link to="/areas/mcallen" className="text-orange-500 hover:text-orange-600 font-medium">McAllen</Link>, 
                <Link to="/areas/brownsville" className="text-orange-500 hover:text-orange-600 font-medium"> Brownsville</Link>, 
                <Link to="/areas/harlingen" className="text-orange-500 hover:text-orange-600 font-medium"> Harlingen</Link>, 
                <Link to="/areas/edinburg" className="text-orange-500 hover:text-orange-600 font-medium"> Edinburg</Link>, 
                and the entire <Link to="/locations" className="text-orange-500 hover:text-orange-600 font-medium">Lower Rio Grande Valley</Link>. 
                From warehouses at the Port of Brownsville to office buildings in downtown McAllen, we have the experience and 
                equipment to handle projects of any size.
              </p>
            </div>

            {/* Business Case Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">The Business Case for Commercial Insulation</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Immediate Benefits</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 30-40% reduction in HVAC costs</li>
                    <li>• Improved employee productivity</li>
                    <li>• Better customer comfort</li>
                    <li>• Reduced HVAC maintenance</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Long-Term Value</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Increased property value</li>
                    <li>• Extended HVAC equipment life</li>
                    <li>• LEED certification points</li>
                    <li>• Tax incentives & rebates</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services We Provide */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Commercial Insulation Services</h2>
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

            {/* Solutions by Industry */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Industry-Specific Solutions</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Warehouses & Distribution Centers</h3>
                  <p className="text-gray-600 mb-2">
                    Large-scale <Link to="/services/spray-foam" className="text-orange-500 hover:text-orange-600 font-medium">spray foam</Link> or 
                    <Link to="/services/blown-in" className="text-orange-500 hover:text-orange-600 font-medium"> blown-in insulation</Link> for 
                    massive spaces. Reduce cooling costs while maintaining consistent temperatures for inventory protection.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Typical savings: $800-1,500/month</li>
                    <li>• Installation: Weekend completion available</li>
                    <li>• Special rates for 10,000+ sq ft</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Office Buildings & Medical Facilities</h3>
                  <p className="text-gray-600 mb-2">
                    Professional installation with minimal disruption. Improve employee comfort and patient satisfaction 
                    while reducing operating costs significantly.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Zone-specific comfort control</li>
                    <li>• After-hours installation available</li>
                    <li>• Sound dampening benefits</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Retail & Hospitality</h3>
                  <p className="text-gray-600 mb-2">
                    Create comfortable shopping and dining environments. Reduce energy costs while maintaining optimal 
                    temperatures for customers and staff.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Customer comfort improvement</li>
                    <li>• Kitchen heat management</li>
                    <li>• Noise reduction between units</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Why RGV Businesses Choose Us</h2>
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

            {/* ROI Calculator */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Commercial Insulation ROI</h2>
              
              {/* Example: 10,000 sq ft Warehouse */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                <h3 className="text-center font-semibold mb-4">Example: 10,000 sq ft Warehouse</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Current Monthly HVAC</p>
                    <div className="text-3xl font-bold text-red-500">$2,500</div>
                    <p className="text-xs text-gray-500 mt-1">Uninsulated metal building</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">After Insulation</p>
                    <div className="text-3xl font-bold text-green-500">$1,500</div>
                    <p className="text-xs text-gray-500 mt-1">40% reduction</p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-block bg-green-500 text-white rounded-full px-6 py-3">
                    <span className="text-2xl font-bold">Save $1,000/month</span>
                  </div>
                </div>
              </div>

              {/* Annual Savings Breakdown */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <DollarSign className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">$12,000</div>
                  <p className="text-sm text-gray-600">Annual Savings</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">18-24 mo</div>
                  <p className="text-sm text-gray-600">Typical ROI</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">20-30%</div>
                  <p className="text-sm text-gray-600">Tax Incentives</p>
                </div>
              </div>

              {/* Volume Pricing */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Volume Pricing Available</h4>
                <p className="text-sm text-gray-600">
                  Special rates for projects over 5,000 sq ft. Multiple property discounts available.
                </p>
              </div>
            </div>

            {/* Property Types */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Commercial Properties We Insulate</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {propertyTypes.map((property, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{property}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Commercial Insulation Throughout Lower Rio Grande Valley</h2>
              <p className="text-gray-700 mb-4">
                Valley Insulation Pros serves commercial properties across the entire Lower Rio Grande Valley business corridor, 
                including the <Link to="/areas/mcallen" className="text-orange-500 hover:text-orange-600 font-medium">McAllen</Link> Foreign Trade Zone, 
                <Link to="/areas/brownsville" className="text-orange-500 hover:text-orange-600 font-medium"> Port of Brownsville</Link>, 
                <Link to="/areas/harlingen" className="text-orange-500 hover:text-orange-600 font-medium"> Harlingen</Link> Industrial Park, 
                <Link to="/areas/edinburg" className="text-orange-500 hover:text-orange-600 font-medium"> Edinburg</Link> Business District, 
                <Link to="/areas/mission" className="text-orange-500 hover:text-orange-600 font-medium"> Mission</Link> Commercial Centers, 
                <Link to="/areas/pharr" className="text-orange-500 hover:text-orange-600 font-medium"> Pharr</Link> International Bridge area, 
                Weslaco Business Parks, and all commercial zones throughout the Valley.
              </p>
              <p className="text-gray-700">
                We're equipped to handle large-scale projects at industrial facilities, warehouses, distribution centers, 
                manufacturing plants, and commercial complexes throughout Hidalgo, Cameron, Willacy, and Starr Counties.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Commercial Insulation FAQs</h2>
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
              <RelatedServices currentService="/services/commercial" />
            </div>

            {/* Service Areas Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Commercial Insulation by City</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Link to="/services/commercial/mcallen" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Commercial McAllen
                </Link>
                <Link to="/services/commercial/brownsville" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Commercial Brownsville
                </Link>
                <Link to="/services/commercial/harlingen" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Commercial Harlingen
                </Link>
                <Link to="/services/commercial/edinburg" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Commercial Edinburg
                </Link>
                <Link to="/services/commercial/mission" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Commercial Mission
                </Link>
                <Link to="/services/commercial/pharr" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Commercial Pharr
                </Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Reduce Your Business Operating Costs Today</h2>
              <p className="text-xl mb-6 text-white/90">
                Join hundreds of RGV businesses that have dramatically reduced their energy costs with professional commercial 
                insulation. Our expert team will assess your property, provide a detailed ROI analysis, and deliver a solution 
                that pays for itself while improving your bottom line. Weekend installation available to minimize disruption.
              </p>
              <div className="text-3xl font-bold">
                Free Commercial Assessment: (956) 854-0899
              </div>
              <Link to="/quote" className="inline-block mt-6 bg-white text-orange-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                Get Your Free Commercial Quote
              </Link>
            </div>
          </div>

          {/* Side Panel - Sticky */}
          <div className="w-80 flex-shrink-0 hidden lg:block">
            <div className="sticky top-4">
              {/* CTA Card */}
              <Card className="mb-6 shadow-lg border-2 border-orange-500">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <CardTitle className="text-xl text-center">BUSINESS SOLUTIONS</CardTitle>
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
                  <CardTitle className="text-lg">BUSINESS DISTRICTS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <Link to="/areas/mcallen" className="text-sm hover:text-orange-500">McAllen FTZ</Link>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <Link to="/areas/brownsville" className="text-sm hover:text-orange-500">Port of Brownsville</Link>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <Link to="/areas/harlingen" className="text-sm hover:text-orange-500">Harlingen Industrial</Link>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <Link to="/areas/edinburg" className="text-sm hover:text-orange-500">Edinburg Business</Link>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <Link to="/areas/pharr" className="text-sm hover:text-orange-500">Pharr Bridge Area</Link>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">Weslaco Parks</span>
                    </li>
                    <li className="text-sm text-gray-500 pl-6">+ all RGV areas</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Commercial Benefits Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">BUSINESS BENEFITS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Truck className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Weekend Install</p>
                        <p className="text-xs text-gray-600">No business disruption</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <DollarSign className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">40% Savings</p>
                        <p className="text-xs text-gray-600">Average HVAC reduction</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FileText className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Tax Incentives</p>
                        <p className="text-xs text-gray-600">20-30% cost offset</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Factory className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Volume Pricing</p>
                        <p className="text-xs text-gray-600">5,000+ sq ft rates</p>
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

export default Commercial;