import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEOHead from '../../components/common/SEOHead'
import { RelatedServices } from '../../components/common/InternalLinks'
import { 
  Zap, 
  TrendingDown, 
  Leaf, 
  DollarSign, 
  Thermometer, 
  Shield,
  CheckCircle,
  Phone,
  ArrowRight,
  Star,
  Clock,
  Award,
  Home,
  BarChart3,
  Battery,
  Wind
} from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import PageFooter from '../../components/layout/PageFooter'
import MobileBottomNav from '../../components/common/MobileBottomNav'
import FloatingMenu from '../../components/common/FloatingMenu';
import MobileServiceLayout from '../../components/common/MobileServiceLayout';
import MobileServiceCard from '../../components/common/MobileServiceCard';
import MobileSavingsCard from '../../components/common/MobileSavingsCard';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const EnergyEfficiency = () => {
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
      icon: <Thermometer className="h-8 w-8 text-orange-600" />,
      title: "Energy Audits",
      description: "Comprehensive home energy assessment with thermal imaging",
      features: [
        "Thermal camera inspection",
        "Blower door testing",
        "Detailed energy report",
        "Cost-saving recommendations"
      ]
    },
    {
      icon: <Wind className="h-8 w-8 text-blue-600" />,
      title: "Air Sealing",
      description: "Eliminate drafts and air leaks throughout your home",
      features: [
        "Seal gaps and cracks",
        "Weather stripping",
        "Caulking services",
        "Duct sealing"
      ]
    },
    {
      icon: <Home className="h-8 w-8 text-green-600" />,
      title: "Weatherization",
      description: "Complete home weatherization for maximum efficiency",
      features: [
        "Insulation upgrades",
        "Window treatments",
        "Door replacements",
        "Ventilation improvements"
      ]
    },
    {
      icon: <Battery className="h-8 w-8 text-purple-600" />,
      title: "Efficiency Upgrades",
      description: "Strategic improvements for long-term savings",
      features: [
        "Radiant barriers",
        "Smart thermostats",
        "LED lighting conversion",
        "Solar attic fans"
      ]
    }
  ]

  const benefits = [
    { value: "30-50%", label: "Energy Savings", description: "Average reduction in utility bills" },
    { value: "$3,600", label: "Annual Savings", description: "Average homeowner savings" },
    { value: "2-3", label: "Year Payback", description: "Return on investment period" },
    { value: "20%", label: "Home Value", description: "Increase in property value" }
  ]

  const process = [
    {
      step: "1",
      title: "Energy Assessment",
      description: "Complete evaluation of your home's energy performance",
      details: [
        "Thermal imaging scan",
        "Air leakage testing",
        "Insulation inspection",
        "HVAC efficiency check"
      ]
    },
    {
      step: "2",
      title: "Custom Plan",
      description: "Personalized efficiency improvement strategy",
      details: [
        "Prioritized recommendations",
        "Cost-benefit analysis",
        "Rebate identification",
        "Financing options"
      ]
    },
    {
      step: "3",
      title: "Implementation",
      description: "Professional installation of efficiency upgrades",
      details: [
        "Insulation installation",
        "Air sealing work",
        "Equipment upgrades",
        "Quality control"
      ]
    },
    {
      step: "4",
      title: "Verification",
      description: "Post-work testing to ensure performance",
      details: [
        "Energy use monitoring",
        "Performance testing",
        "Warranty documentation",
        "Savings tracking"
      ]
    }
  ]

  const savings = [
    { area: "Cooling Costs", potential: "35-45%", annual: "$1,800" },
    { area: "Heating Costs", potential: "20-30%", annual: "$600" },
    { area: "Water Heating", potential: "15-25%", annual: "$400" },
    { area: "Lighting", potential: "50-75%", annual: "$300" },
    { area: "Appliances", potential: "10-20%", annual: "$500" }
  ]

  return (
    <>
      <SEOHead
        title="Energy Efficiency Audits McAllen TX | Home Energy Solutions"
        description="Comprehensive energy audits and efficiency upgrades in RGV. BPI-certified assessments, blower door testing, and customized solutions to reduce energy bills."
        keywords="energy audit, energy efficiency, BPI certification, home energy assessment RGV"
        canonicalUrl="https://valleyinsulation.com/services/energy-efficiency"
      />
      <Helmet>
        <title>Energy Efficiency & Weatherization | Valley Insulation Pros - Save on Energy Bills</title>
        <meta name="description" content="Energy efficiency services in the Rio Grande Valley. Energy audits, weatherization, air sealing, and efficiency upgrades. Save 30-50% on utility bills with our comprehensive solutions." />
        <meta name="keywords" content="energy efficiency RGV, weatherization McAllen, energy audit Brownsville, air sealing Texas, home efficiency upgrades Valley" />
        <link rel="canonical" href="https://valleyinsulationpros.com/services/energy-efficiency" />
      </Helmet>

      {/* Mobile Version */}
      <MobileServiceLayout
        title="Energy Efficiency"
        subtitle="Comprehensive energy solutions"
        rating={4.9}
        reviews={245}
        responseTime="Same day"
        heroGradient="from-emerald-500 via-green-500 to-teal-500"
        heroIcon={Zap}
        heroPattern="grid"
        className="lg:hidden"
      >
        {({ activeTab }) => (
          <>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="p-4 space-y-4">
                {/* Quick Benefits */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Energy Efficiency Benefits</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <TrendingDown className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">30-50%</p>
                        <p className="text-xs text-gray-500">Energy savings</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">$3,600</p>
                        <p className="text-xs text-gray-500">Annual savings</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">20%</p>
                        <p className="text-xs text-gray-500">Home value+</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">2-3yr</p>
                        <p className="text-xs text-gray-500">ROI period</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Card */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Complete Energy Solutions</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Transform your home into an energy-efficient powerhouse with our comprehensive efficiency upgrades.
                    From energy audits to weatherization, we maximize your savings.
                  </p>
                  <div className="flex items-center gap-2 text-green-500">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">BPI Certified experts</span>
                  </div>
                </div>

                {/* Savings Calculator */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-3">Your Savings Potential</h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Current Bill</span>
                      <span className="text-lg font-bold text-red-500">$450/mo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">After Upgrades</span>
                      <span className="text-lg font-bold text-green-500">$225/mo</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-900">Monthly Savings</span>
                        <span className="text-xl font-bold text-green-600">$225</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-500 text-white text-center py-2 rounded-lg">
                    <p className="text-sm font-bold">$2,700 Annual Savings</p>
                  </div>
                </div>

                {/* Related Services */}
                <RelatedServices currentService="/services/energy-efficiency" isMobile={true} />
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="p-4 space-y-3">
                <MobileServiceCard
                  icon={<Thermometer className="w-6 h-6" />}
                  title="Energy Audits"
                  description="Complete assessment with thermal imaging"
                  badge="Popular"
                />
                <MobileServiceCard
                  icon={<Wind className="w-6 h-6" />}
                  title="Air Sealing"
                  description="Eliminate drafts and air leaks"
                />
                <MobileServiceCard
                  icon={<Home className="w-6 h-6" />}
                  title="Weatherization"
                  description="Complete home efficiency upgrades"
                />
                <MobileServiceCard
                  icon={<Battery className="w-6 h-6" />}
                  title="Efficiency Upgrades"
                  description="Smart systems and improvements"
                />
                <MobileServiceCard
                  icon={<Shield className="w-6 h-6" />}
                  title="Radiant Barriers"
                  description="Reflect heat away from your home"
                />
                <MobileServiceCard
                  icon={<Zap className="w-6 h-6" />}
                  title="Smart Thermostats"
                  description="Automated climate control"
                />
              </div>
            )}

            {/* Savings Tab */}
            {activeTab === 'savings' && (
              <div className="p-4 space-y-4">
                <MobileSavingsCard
                  title="Energy Audit Savings"
                  savingsAmount="$420"
                  savingsPercent="20"
                  timeFrame="per year"
                  icon={BarChart3}
                  features={[
                    "Identify major energy leaks",
                    "Prioritize improvements",
                    "Professional assessment",
                    "Custom action plan"
                  ]}
                  highlight={true}
                />
                <MobileSavingsCard
                  title="Air Sealing Benefits"
                  savingsAmount="$680"
                  savingsPercent="30"
                  timeFrame="per year"
                  icon={Wind}
                  features={[
                    "Stop air infiltration",
                    "Improve HVAC efficiency",
                    "Enhanced comfort",
                    "Reduce dust and allergens"
                  ]}
                />
                <MobileSavingsCard
                  title="Complete Efficiency Package"
                  savingsAmount="$1,200"
                  savingsPercent="45"
                  timeFrame="per year"
                  icon={Zap}
                  features={[
                    "Maximum energy savings",
                    "Federal tax credits eligible",
                    "Utility rebates available",
                    "Comprehensive improvements"
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
                        <Zap className="w-3 h-3 text-green-500" />
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
      <div className="hidden lg:block">
        <PageHeader />

        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="container mx-auto max-w-7xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link to="/" className="hover:text-orange-600">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-orange-600">Services</Link>
              <span>/</span>
              <span className="text-gray-900">Energy Efficiency</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Energy Efficiency & Weatherization Services
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Slash your energy bills by 30-50% with comprehensive efficiency upgrades. 
                  From energy audits to complete weatherization, we make your home work smarter, not harder.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                    onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Free Energy Audit
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    asChild
                  >
                    <Link to="/services">
                      View All Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span>BPI Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span>Energy Star Partner</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="absolute -top-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Save $300/Month
                  </div>
                  <Zap className="h-16 w-16 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Your Energy Savings Potential</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-600">Current Monthly Bill</span>
                      <span className="font-bold text-red-600">$450</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-600">After Efficiency Upgrades</span>
                      <span className="font-bold text-green-600">$225</span>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Monthly Savings</span>
                        <span className="text-2xl font-bold text-green-600">$225</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-600">Annual Savings</span>
                        <span className="font-bold text-green-600">$2,700</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 bg-gradient-to-r from-green-600 to-teal-600">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center text-white">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{benefit.value}</div>
                  <div className="text-lg font-semibold mb-1">{benefit.label}</div>
                  <div className="text-sm text-white/80">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Energy Efficiency Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to transform your home into an energy-efficient powerhouse
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Savings Breakdown Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Your Savings Breakdown
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See exactly where you can save with energy efficiency upgrades
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="text-left p-4">Energy Area</th>
                      <th className="text-center p-4">Savings Potential</th>
                      <th className="text-center p-4">Annual Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savings.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-medium">{item.area}</td>
                        <td className="text-center p-4">
                          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {item.potential}
                          </span>
                        </td>
                        <td className="text-center p-4 font-bold text-green-600">{item.annual}</td>
                      </tr>
                    ))}
                    <tr className="bg-green-50">
                      <td className="p-4 font-bold">Total Potential</td>
                      <td className="text-center p-4 font-bold">30-50%</td>
                      <td className="text-center p-4 text-xl font-bold text-green-600">$3,600/year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Energy Efficiency Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A systematic approach to maximizing your home's efficiency
              </p>
            </div>
            <div className="grid lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 z-0" />
                  )}
                  <Card className="relative z-10 h-full">
                    <CardHeader>
                      <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">
                        {item.step}
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-600 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rebates Section */}
        <section className="py-16 px-4 bg-green-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Available Rebates & Incentives
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Take advantage of federal, state, and local programs to reduce your investment:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-6 w-6 text-green-600 mt-0.5" />
                    <div>
                      <strong>Federal Tax Credits:</strong> Up to 30% of project cost (max $1,200/year)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-6 w-6 text-green-600 mt-0.5" />
                    <div>
                      <strong>Utility Rebates:</strong> $500-$2,000 from local utility companies
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-6 w-6 text-green-600 mt-0.5" />
                    <div>
                      <strong>State Programs:</strong> Texas weatherization assistance available
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-6 w-6 text-green-600 mt-0.5" />
                    <div>
                      <strong>Financing Options:</strong> 0% interest loans for qualified homeowners
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Example Project Savings</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Project Cost</span>
                    <span className="font-bold">$8,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b text-green-600">
                    <span>Federal Tax Credit (30%)</span>
                    <span className="font-bold">-$2,400</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b text-green-600">
                    <span>Utility Rebate</span>
                    <span className="font-bold">-$1,000</span>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Your Net Cost</span>
                      <span className="text-2xl font-bold">$4,600</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      Payback period: 1.7 years with $225/mo savings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="quote" className="py-16 px-4 bg-gradient-to-r from-green-600 to-teal-600">
          <div className="container mx-auto max-w-4xl text-center">
            <Leaf className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Start Saving Energy & Money Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get your FREE energy audit and discover your home's savings potential. 
              Our experts will create a custom efficiency plan that pays for itself.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <BarChart3 className="h-12 w-12 text-white mx-auto mb-4" />
              <p className="text-white font-semibold mb-2">Average Customer Results:</p>
              <div className="grid grid-cols-3 gap-4 text-white">
                <div>
                  <p className="text-2xl font-bold">42%</p>
                  <p className="text-sm">Energy Reduction</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">$3,600</p>
                  <p className="text-sm">Annual Savings</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">2.1yr</p>
                  <p className="text-sm">ROI Period</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100"
                asChild
              >
                <a href="tel:9568540899">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (956) 854-0899
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/quote">
                  Schedule Free Energy Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

        <PageFooter />
        <FloatingMenu />
        <MobileBottomNav />
      </div>
    </>
  )
}

export default EnergyEfficiency