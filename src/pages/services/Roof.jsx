import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEOHead from '../../components/common/SEOHead'
import { RelatedServices } from '../../components/common/InternalLinks'
import { 
  Home, 
  Sun, 
  Droplets, 
  Wind, 
  Shield,
  CheckCircle,
  Phone,
  ArrowRight,
  Star,
  Clock,
  Award,
  Thermometer,
  TrendingDown,
  DollarSign,
  Zap
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

const Roof = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const benefits = [
    {
      icon: <Thermometer className="h-8 w-8 text-orange-600" />,
      title: "Superior Heat Protection",
      description: "Block up to 97% of radiant heat from the Texas sun"
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-green-600" />,
      title: "Lower Energy Bills",
      description: "Reduce cooling costs by up to 40% during peak summer months"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Roof Protection",
      description: "Extend roof life by reducing thermal stress and temperature fluctuations"
    },
    {
      icon: <Droplets className="h-8 w-8 text-cyan-600" />,
      title: "Moisture Control",
      description: "Prevent condensation and moisture damage with proper ventilation"
    }
  ]

  const roofTypes = [
    {
      title: "Spray Foam Roof Insulation",
      description: "Creates an air-tight seal directly under your roof deck",
      features: [
        "Best for extreme heat protection",
        "Eliminates air leaks completely",
        "Adds structural strength",
        "Ideal for metal and tile roofs"
      ],
      rValue: "R-6.5 per inch"
    },
    {
      title: "Radiant Barrier Installation",
      description: "Reflects radiant heat away from your living space",
      features: [
        "Blocks 97% of radiant heat",
        "Perfect for RGV climate",
        "Works with existing insulation",
        "Low-cost, high-impact solution"
      ],
      rValue: "Heat reflection technology"
    },
    {
      title: "Blown-In Roof Insulation",
      description: "Cost-effective solution for accessible roof spaces",
      features: [
        "Great for flat roofs",
        "Quick installation",
        "Even coverage",
        "Budget-friendly option"
      ],
      rValue: "R-2.5 to R-4.3 per inch"
    },
    {
      title: "Rigid Board Insulation",
      description: "Durable foam boards for commercial and flat roofs",
      features: [
        "High R-value per inch",
        "Moisture resistant",
        "Long-lasting performance",
        "Commercial grade"
      ],
      rValue: "R-5 to R-8 per inch"
    }
  ]

  const stats = [
    { value: "40%", label: "Energy Savings", description: "Average reduction in cooling costs" },
    { value: "20°F", label: "Cooler Attic", description: "Temperature reduction in summer" },
    { value: "15+", label: "Years Extended", description: "Additional roof lifespan" },
    { value: "97%", label: "Heat Blocked", description: "Radiant heat reflection" }
  ]

  return (
    <>
      <SEOHead
        title="Roof & Radiant Barrier Insulation McAllen TX | Heat Protection"
        description="Radiant barrier and roof insulation for Texas heat. Block 97% of radiant heat and reduce attic temperatures by 30°F. Professional installation in RGV."
        keywords="radiant barrier, roof insulation, heat barrier, attic cooling RGV"
        canonicalUrl="https://valleyinsulation.com/services/roof"
      />
      <Helmet>
        <title>Roof Insulation Services | Valley Insulation Pros - Beat the Texas Heat</title>
        <meta name="description" content="Professional roof insulation services in the Rio Grande Valley. Spray foam, radiant barriers, and blown-in solutions to protect your home from extreme heat and reduce energy costs by up to 40%." />
        <meta name="keywords" content="roof insulation RGV, spray foam roofing McAllen, radiant barrier installation, flat roof insulation Brownsville, metal roof insulation Texas" />
        <link rel="canonical" href="https://valleyinsulationpros.com/services/roof" />
      </Helmet>

      {/* Mobile Version */}
      <MobileServiceLayout
        title="Roof Insulation"
        subtitle="Beat the Texas heat"
        rating={4.9}
        reviews={198}
        responseTime="Same day"
        heroGradient="from-red-500 via-orange-500 to-yellow-500"
        heroIcon={Sun}
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
                  <h3 className="font-bold text-gray-900 mb-3">Why Roof Insulation?</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <Thermometer className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">97%</p>
                        <p className="text-xs text-gray-500">Heat blocked</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <TrendingDown className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">40%</p>
                        <p className="text-xs text-gray-500">Energy savings</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">15+</p>
                        <p className="text-xs text-gray-500">Years extended</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Sun className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">20°F</p>
                        <p className="text-xs text-gray-500">Cooler attic</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Card */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Protect From Texas Heat</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Beat the intense RGV sun with professional roof insulation. Reduce cooling costs
                    by up to 40% and extend your roof's lifespan with our expert solutions.
                  </p>
                  <div className="flex items-center gap-2 text-orange-500">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">EPA certified installers</span>
                  </div>
                </div>

                {/* Temperature Comparison */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-3">RGV Roof Temperatures</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Uninsulated Roof</span>
                      <span className="text-lg font-bold text-red-500">170°F</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">With Insulation</span>
                      <span className="text-lg font-bold text-green-500">95°F</span>
                    </div>
                  </div>
                  <div className="bg-green-500 text-white text-center py-2 rounded-lg mt-3">
                    <p className="text-sm font-bold">75°F Cooler!</p>
                  </div>
                </div>

                {/* Related Services */}
                <RelatedServices currentService="/services/roof" isMobile={true} />
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="p-4 space-y-3">
                <MobileServiceCard
                  icon={<Zap className="w-6 h-6" />}
                  title="Spray Foam Roof"
                  description="Air-tight seal under roof deck"
                  badge="Premium"
                />
                <MobileServiceCard
                  icon={<Sun className="w-6 h-6" />}
                  title="Radiant Barriers"
                  description="Reflects 97% of radiant heat"
                  badge="Popular"
                />
                <MobileServiceCard
                  icon={<Wind className="w-6 h-6" />}
                  title="Blown-In Roof"
                  description="Cost-effective coverage"
                />
                <MobileServiceCard
                  icon={<Shield className="w-6 h-6" />}
                  title="Rigid Board"
                  description="Commercial grade solution"
                />
                <MobileServiceCard
                  icon={<Home className="w-6 h-6" />}
                  title="Metal Building"
                  description="Specialized steel structure"
                />
                <MobileServiceCard
                  icon={<Droplets className="w-6 h-6" />}
                  title="Moisture Control"
                  description="Prevent condensation damage"
                />
              </div>
            )}

            {/* Savings Tab */}
            {activeTab === 'savings' && (
              <div className="p-4 space-y-4">
                <MobileSavingsCard
                  title="Radiant Barrier Savings"
                  savingsAmount="$340"
                  savingsPercent="25"
                  timeFrame="per year"
                  icon={Sun}
                  features={[
                    "Blocks 97% of radiant heat",
                    "Reduces attic temperatures",
                    "Works with existing insulation",
                    "Quick return on investment"
                  ]}
                  highlight={true}
                />
                <MobileSavingsCard
                  title="Roof Insulation Savings"
                  savingsAmount="$520"
                  savingsPercent="35"
                  timeFrame="per year"
                  icon={Shield}
                  features={[
                    "Complete thermal barrier",
                    "Superior air sealing",
                    "Structural reinforcement",
                    "Long-term performance"
                  ]}
                />
                <MobileSavingsCard
                  title="Complete Roof Package"
                  savingsAmount="$680"
                  savingsPercent="40"
                  timeFrame="per year"
                  icon={Home}
                  features={[
                    "Maximum energy efficiency",
                    "Comprehensive protection",
                    "Enhanced comfort",
                    "Increased home value"
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
                        <Sun className="w-3 h-3 text-orange-500" />
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
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
          <div className="container mx-auto max-w-7xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link to="/" className="hover:text-orange-600">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-orange-600">Services</Link>
              <span>/</span>
              <span className="text-gray-900">Roof Insulation</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Professional Roof Insulation Services
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Protect your home from the intense Texas sun with expert roof insulation. 
                  Reduce cooling costs by up to 40% and extend your roof's lifespan while keeping your home comfortable year-round.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
                    onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Get Free Quote
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
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span>EPA Certified</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Save up to 40% on Cooling
                  </div>
                  <Sun className="h-16 w-16 text-orange-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Beat the Valley Heat</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Block 97% of radiant heat</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Lower attic temps by 20-30°F</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Reduce AC runtime significantly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Protect roof from thermal damage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Qualify for energy rebates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-white/80">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Roof Insulation is Critical in the RGV
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                With temperatures reaching 100°F+ and intense sun year-round, proper roof insulation is your first defense
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-orange-200 transition-colors">
                  <CardHeader>
                    {benefit.icon}
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Roof Types Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Roof Insulation Options
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the best solution for your roof type and budget
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {roofTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">{type.title}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-gray-700">R-Value: </span>
                      <span className="text-sm text-orange-600 font-bold">{type.rValue}</span>
                    </div>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Climate Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Designed for Rio Grande Valley Climate
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Our roof insulation solutions are specifically engineered for the unique challenges of South Texas:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Sun className="h-6 w-6 text-orange-600 mt-0.5" />
                      <div>
                        <strong>Extreme Heat:</strong> Combat 100°F+ temperatures and intense UV radiation
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Droplets className="h-6 w-6 text-blue-600 mt-0.5" />
                      <div>
                        <strong>High Humidity:</strong> Prevent moisture buildup and condensation issues
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Wind className="h-6 w-6 text-gray-600 mt-0.5" />
                      <div>
                        <strong>Hurricane Season:</strong> Wind-resistant installation methods
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-yellow-600 mt-0.5" />
                      <div>
                        <strong>Energy Efficiency:</strong> Maximize AC performance in extreme conditions
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Average RGV Roof Temperatures</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Uninsulated Roof Surface</span>
                      <span className="font-bold text-red-600">150-170°F</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Uninsulated Attic</span>
                      <span className="font-bold text-orange-600">130-140°F</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">With Proper Insulation</span>
                      <span className="font-bold text-green-600">85-95°F</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Result:</strong> 35-45°F cooler attic = Lower cooling costs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Roof Insulation Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional installation with minimal disruption to your home
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="font-bold mb-2">Roof Inspection</h3>
                <p className="text-sm text-gray-600">Assess current insulation and identify problem areas</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="font-bold mb-2">Custom Solution</h3>
                <p className="text-sm text-gray-600">Design the best approach for your roof type</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="font-bold mb-2">Professional Install</h3>
                <p className="text-sm text-gray-600">Expert installation with quality materials</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="font-bold mb-2">Quality Check</h3>
                <p className="text-sm text-gray-600">Thermal imaging to verify performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="quote" className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Stop the Heat at Your Roof
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get your free roof insulation assessment today. Our experts will show you exactly how much you can save on cooling costs.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 text-white">
                <div>
                  <DollarSign className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-bold">Save $200-400/month</p>
                  <p className="text-sm text-white/80">During summer months</p>
                </div>
                <div>
                  <Clock className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-bold">Same-Week Service</p>
                  <p className="text-sm text-white/80">Fast installation available</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100"
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
                  Get Free Assessment
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

export default Roof