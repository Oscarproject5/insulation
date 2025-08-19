import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEOHead from '../../components/common/SEOHead'
import { RelatedServices } from '../../components/common/InternalLinks'
import { 
  Sparkles, 
  Factory, 
  Snowflake, 
  Flame, 
  Droplets, 
  Shield,
  CheckCircle,
  Phone,
  ArrowRight,
  Star,
  Clock,
  Award,
  Zap,
  Building,
  Truck
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

const Specialty = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const specialtyTypes = [
    {
      icon: <Factory className="h-8 w-8 text-orange-600" />,
      title: "Industrial Insulation",
      description: "High-performance solutions for warehouses, factories, and industrial facilities",
      applications: ["Manufacturing plants", "Warehouses", "Processing facilities", "Storage units"]
    },
    {
      icon: <Snowflake className="h-8 w-8 text-blue-600" />,
      title: "Cold Storage Insulation",
      description: "Specialized insulation for refrigerated spaces and cold storage facilities",
      applications: ["Walk-in coolers", "Freezer units", "Food storage", "Medical storage"]
    },
    {
      icon: <Flame className="h-8 w-8 text-red-600" />,
      title: "Fire-Resistant Insulation",
      description: "Fire-rated materials for enhanced safety and code compliance",
      applications: ["Commercial kitchens", "Mechanical rooms", "Fire walls", "Safety barriers"]
    },
    {
      icon: <Droplets className="h-8 w-8 text-teal-600" />,
      title: "Moisture-Resistant Solutions",
      description: "Waterproof and mold-resistant insulation for high-humidity areas",
      applications: ["Basements", "Crawl spaces", "Pool houses", "Coastal properties"]
    },
    {
      icon: <Building className="h-8 w-8 text-purple-600" />,
      title: "Metal Building Insulation",
      description: "Custom solutions for metal structures and pre-engineered buildings",
      applications: ["Steel buildings", "Barns", "Aircraft hangars", "Storage facilities"]
    },
    {
      icon: <Truck className="h-8 w-8 text-green-600" />,
      title: "Mobile & RV Insulation",
      description: "Specialized insulation for recreational vehicles and mobile structures",
      applications: ["RVs", "Food trucks", "Mobile offices", "Tiny homes"]
    }
  ]

  const features = [
    {
      title: "Custom Engineering",
      description: "Tailored solutions designed for your specific requirements"
    },
    {
      title: "Code Compliance",
      description: "Meet all local and federal building codes and regulations"
    },
    {
      title: "Expert Installation",
      description: "Certified technicians with specialty insulation experience"
    },
    {
      title: "Quality Materials",
      description: "Premium products from trusted manufacturers"
    },
    {
      title: "Performance Testing",
      description: "Verification and documentation of insulation performance"
    },
    {
      title: "Warranty Protection",
      description: "Comprehensive warranties on materials and installation"
    }
  ]

  return (
    <>
      <SEOHead
        title="Specialty Insulation Services RGV | Custom Solutions"
        description="Specialized insulation solutions for unique applications in South Texas. Fire-resistant, moisture barriers, and custom engineering for challenging projects."
        keywords="specialty insulation, custom insulation, fire resistant insulation, RGV specialty services"
        canonicalUrl="https://valleyinsulation.com/services/specialty"
      />
      <Helmet>
        <title>Specialty Insulation Services | Valley Insulation Pros - Custom Solutions</title>
        <meta name="description" content="Specialty insulation services in the Rio Grande Valley. Industrial, cold storage, fire-resistant, and custom insulation solutions for unique applications." />
        <meta name="keywords" content="specialty insulation RGV, industrial insulation McAllen, cold storage insulation, fire resistant insulation, metal building insulation Texas" />
        <link rel="canonical" href="https://valleyinsulationpros.com/services/specialty" />
      </Helmet>

      {/* Mobile Version */}
      <MobileServiceLayout
        title="Specialty Insulation"
        subtitle="Custom solutions"
        rating={4.9}
        reviews={134}
        responseTime="Same day"
        heroGradient="from-cyan-500 via-blue-500 to-indigo-600"
        heroIcon={Sparkles}
        heroPattern="dots"
        className="lg:hidden"
      >
        {({ activeTab }) => (
          <>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="p-4 space-y-4">
                {/* Quick Benefits */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Specialty Solutions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Custom</p>
                        <p className="text-xs text-gray-500">Engineered</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Factory className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Industrial</p>
                        <p className="text-xs text-gray-500">Grade</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <Flame className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Fire</p>
                        <p className="text-xs text-gray-500">Resistant</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Code</p>
                        <p className="text-xs text-gray-500">Compliant</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Card */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Custom Insulation Solutions</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Expert solutions for unique applications and challenging environments. From industrial
                    facilities to cold storage, we engineer the perfect insulation system for your needs.
                  </p>
                  <div className="flex items-center gap-2 text-purple-500">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Certified specialists</span>
                  </div>
                </div>

                {/* Specialty Types */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Specialty Types</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Factory, title: "Industrial", desc: "Warehouses & factories" },
                      { icon: Snowflake, title: "Cold Storage", desc: "Refrigerated facilities" },
                      { icon: Flame, title: "Fire-Resistant", desc: "Safety applications" },
                      { icon: Building, title: "Metal Buildings", desc: "Steel structures" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <item.icon className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.title}</p>
                          <p className="text-xs text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Services */}
                <RelatedServices currentService="/services/specialty" isMobile={true} />
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="p-4 space-y-3">
                <MobileServiceCard
                  icon={<Factory className="w-6 h-6" />}
                  title="Industrial Insulation"
                  description="Warehouses, factories, plants"
                  badge="Popular"
                />
                <MobileServiceCard
                  icon={<Snowflake className="w-6 h-6" />}
                  title="Cold Storage"
                  description="Freezers, coolers, food storage"
                />
                <MobileServiceCard
                  icon={<Flame className="w-6 h-6" />}
                  title="Fire-Resistant"
                  description="Commercial kitchens, safety"
                />
                <MobileServiceCard
                  icon={<Droplets className="w-6 h-6" />}
                  title="Moisture-Resistant"
                  description="High-humidity applications"
                />
                <MobileServiceCard
                  icon={<Building className="w-6 h-6" />}
                  title="Metal Buildings"
                  description="Steel structures, hangars"
                />
                <MobileServiceCard
                  icon={<Truck className="w-6 h-6" />}
                  title="Mobile & RV"
                  description="Recreational vehicles, tiny homes"
                />
              </div>
            )}

            {/* Savings Tab */}
            {activeTab === 'savings' && (
              <div className="p-4 space-y-4">
                <MobileSavingsCard
                  title="Industrial Facility Savings"
                  savingsAmount="$15,000"
                  savingsPercent="45"
                  timeFrame="per year"
                  icon={Factory}
                  features={[
                    "Large-scale energy reduction",
                    "Improved process efficiency",
                    "Worker comfort enhancement",
                    "Equipment protection benefits"
                  ]}
                  highlight={true}
                />
                <MobileSavingsCard
                  title="Cold Storage Benefits"
                  savingsAmount="$8,500"
                  savingsPercent="50"
                  timeFrame="per year"
                  icon={Snowflake}
                  features={[
                    "Precise temperature control",
                    "Reduced refrigeration costs",
                    "Product quality protection",
                    "Extended equipment life"
                  ]}
                />
                <MobileSavingsCard
                  title="Custom Project Value"
                  savingsAmount="$12,000"
                  savingsPercent="40"
                  timeFrame="per year"
                  icon={Sparkles}
                  features={[
                    "Tailored solution benefits",
                    "Maximum efficiency design",
                    "Specialized performance",
                    "Long-term cost savings"
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
                        <Sparkles className="w-3 h-3 text-purple-500" />
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
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-purple-50 via-white to-orange-50">
          <div className="container mx-auto max-w-7xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link to="/" className="hover:text-orange-600">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-orange-600">Services</Link>
              <span>/</span>
              <span className="text-gray-900">Specialty Insulation</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Specialty Insulation Solutions
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Custom insulation solutions for unique applications and challenging environments. 
                  From industrial facilities to cold storage, we have the expertise and materials for any project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
                    onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Get Custom Quote
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
                    <span>Certified Installers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span>Custom Solutions</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="absolute -top-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Expert Solutions
                  </div>
                  <Sparkles className="h-16 w-16 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Why Choose Specialty Insulation?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Custom engineered solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Specialized materials and techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Code compliance expertise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Performance verification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Professional project management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Types Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Specialty Insulation Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions for every unique insulation challenge
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialtyTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    {type.icon}
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-2">Applications:</p>
                    <ul className="space-y-1">
                      {type.applications.map((app, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What Sets Our Specialty Services Apart
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional expertise and quality you can trust
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <Zap className="h-8 w-8 text-orange-600 mb-3" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Trusted by businesses across the Rio Grande Valley
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Agriculture", "Manufacturing", "Healthcare", "Education",
                "Hospitality", "Retail", "Food Service", "Transportation",
                "Government", "Recreation", "Storage", "Technology"
              ].map((industry, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-orange-400 transition-colors">
                  <span className="font-semibold text-gray-700">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-purple-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Specialty Installation Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive approach from consultation to completion
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Consultation", desc: "Understand your unique requirements" },
                { step: "2", title: "Site Assessment", desc: "Evaluate conditions and challenges" },
                { step: "3", title: "Custom Design", desc: "Engineer the optimal solution" },
                { step: "4", title: "Professional Install", desc: "Expert installation by certified team" },
                { step: "5", title: "Quality Assurance", desc: "Testing and performance verification" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-purple-600">{item.step}</span>
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="quote" className="py-16 px-4 bg-gradient-to-r from-purple-600 to-orange-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need a Custom Insulation Solution?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our specialty insulation experts are ready to tackle your unique project. 
              Get a custom quote tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100"
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
                  Get Custom Quote
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

export default Specialty