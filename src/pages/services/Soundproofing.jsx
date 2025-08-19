import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEOHead from '../../components/common/SEOHead'
import { RelatedServices } from '../../components/common/InternalLinks'
import { 
  Volume2, 
  VolumeX, 
  Music, 
  Home, 
  Building, 
  Shield,
  CheckCircle,
  Phone,
  ArrowRight,
  Star,
  Clock,
  Award,
  Headphones,
  Mic,
  Users
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

const Soundproofing = () => {
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
      icon: <VolumeX className="h-8 w-8 text-orange-600" />,
      title: "Noise Reduction",
      description: "Block up to 80% of outside noise for a peaceful home environment"
    },
    {
      icon: <Music className="h-8 w-8 text-orange-600" />,
      title: "Sound Control",
      description: "Perfect for home theaters, music rooms, and recording studios"
    },
    {
      icon: <Home className="h-8 w-8 text-orange-600" />,
      title: "Privacy Enhancement",
      description: "Keep conversations private and reduce sound transfer between rooms"
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Thermal Benefits",
      description: "Soundproofing materials also provide excellent thermal insulation"
    }
  ]

  const applications = [
    {
      title: "Residential Soundproofing",
      features: ["Bedroom walls", "Home theaters", "Home offices", "Nurseries"],
      ideal: "Perfect for homeowners seeking peace and quiet"
    },
    {
      title: "Commercial Soundproofing",
      features: ["Office spaces", "Conference rooms", "Recording studios", "Medical facilities"],
      ideal: "Essential for businesses requiring sound control"
    },
    {
      title: "Specialty Applications",
      features: ["Music rooms", "Podcast studios", "Gaming rooms", "Workshop spaces"],
      ideal: "Custom solutions for unique sound requirements"
    }
  ]

  const materials = [
    {
      name: "Acoustic Foam Panels",
      description: "Professional-grade foam for superior sound absorption",
      bestFor: "Recording studios and home theaters"
    },
    {
      name: "Mass Loaded Vinyl (MLV)",
      description: "Dense material that blocks sound transmission",
      bestFor: "Walls, floors, and ceilings"
    },
    {
      name: "Soundproof Insulation",
      description: "Specialized insulation designed for acoustic performance",
      bestFor: "Interior walls and between floors"
    },
    {
      name: "Green Glue Compound",
      description: "Damping compound that reduces sound vibration",
      bestFor: "Between drywall layers"
    }
  ]

  return (
    <>
      <SEOHead
        title="Soundproofing Insulation RGV | Acoustic Solutions McAllen"
        description="Professional soundproofing and acoustic insulation in Rio Grande Valley. Reduce noise by 80% with specialized materials. Home theaters, studios, and residential."
        keywords="soundproofing, acoustic insulation, noise reduction, sound insulation RGV"
        canonicalUrl="https://valleyinsulation.com/services/soundproofing"
      />
      <Helmet>
        <title>Soundproofing Services | Valley Insulation Pros - Rio Grande Valley</title>
        <meta name="description" content="Professional soundproofing services in the Rio Grande Valley. Reduce noise, enhance privacy, and create peaceful spaces. Expert installation for homes and businesses." />
        <meta name="keywords" content="soundproofing Rio Grande Valley, acoustic insulation, noise reduction McAllen, sound control Brownsville, acoustic panels RGV" />
        <link rel="canonical" href="https://valleyinsulationpros.com/services/soundproofing" />
      </Helmet>

      {/* Mobile Version */}
      <MobileServiceLayout
        title="Soundproofing"
        subtitle="Create peaceful spaces"
        rating={4.8}
        reviews={167}
        responseTime="Same day"
        heroGradient="from-indigo-600 via-purple-600 to-pink-600"
        heroIcon={Volume2}
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
                  <h3 className="font-bold text-gray-900 mb-3">Soundproofing Benefits</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <VolumeX className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">80%</p>
                        <p className="text-xs text-gray-500">Noise reduction</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Music className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Pro</p>
                        <p className="text-xs text-gray-500">Sound quality</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Home className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Privacy</p>
                        <p className="text-xs text-gray-500">Enhanced</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Thermal</p>
                        <p className="text-xs text-gray-500">Benefits too</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Card */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Professional Soundproofing</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Create peaceful, quiet spaces with expert acoustic treatments. Perfect for home theaters,
                    offices, recording studios, and bedrooms. Block unwanted noise and enhance privacy.
                  </p>
                  <div className="flex items-center gap-2 text-orange-500">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Expert installation guaranteed</span>
                  </div>
                </div>

                {/* Applications */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">Perfect For</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Home, title: "Home Theaters", desc: "Optimal acoustic experience" },
                      { icon: Headphones, title: "Recording Studios", desc: "Professional sound quality" },
                      { icon: Users, title: "Home Offices", desc: "Quiet work environment" },
                      { icon: Music, title: "Music Rooms", desc: "Practice without disturbance" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <item.icon className="w-4 h-4 text-orange-600" />
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
                <RelatedServices currentService="/services/soundproofing" isMobile={true} />
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="p-4 space-y-3">
                <MobileServiceCard
                  icon={<Home className="w-6 h-6" />}
                  title="Residential Soundproofing"
                  description="Bedrooms, home theaters, offices"
                  badge="Popular"
                />
                <MobileServiceCard
                  icon={<Building className="w-6 h-6" />}
                  title="Commercial Soundproofing"
                  description="Offices, conference rooms"
                />
                <MobileServiceCard
                  icon={<Headphones className="w-6 h-6" />}
                  title="Recording Studios"
                  description="Professional acoustic treatment"
                />
                <MobileServiceCard
                  icon={<Music className="w-6 h-6" />}
                  title="Music Rooms"
                  description="Practice spaces and studios"
                />
                <MobileServiceCard
                  icon={<Mic className="w-6 h-6" />}
                  title="Podcast Studios"
                  description="Broadcast quality acoustics"
                />
                <MobileServiceCard
                  icon={<Users className="w-6 h-6" />}
                  title="Gaming Rooms"
                  description="Immersive audio experience"
                />
              </div>
            )}

            {/* Savings Tab */}
            {activeTab === 'savings' && (
              <div className="p-4 space-y-4">
                <MobileSavingsCard
                  title="Home Soundproofing Value"
                  savingsAmount="$2,400"
                  savingsPercent="15"
                  timeFrame="per year"
                  icon={VolumeX}
                  features={[
                    "Increased property value",
                    "Better sleep quality",
                    "Reduced stress levels",
                    "Enhanced privacy"
                  ]}
                  highlight={true}
                />
                <MobileSavingsCard
                  title="Home Theater Benefits"
                  savingsAmount="$1,800"
                  savingsPercent="20"
                  timeFrame="per year"
                  icon={Music}
                  features={[
                    "Avoid expensive theater trips",
                    "Professional sound quality",
                    "Family entertainment value",
                    "Thermal insulation bonus"
                  ]}
                />
                <MobileSavingsCard
                  title="Commercial Productivity"
                  savingsAmount="$5,000"
                  savingsPercent="25"
                  timeFrame="per year"
                  icon={Building}
                  features={[
                    "Improved employee focus",
                    "Better meeting privacy",
                    "Reduced noise complaints",
                    "Professional atmosphere"
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
                        <Volume2 className="w-3 h-3 text-orange-500" />
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
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50">
          <div className="container mx-auto max-w-7xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link to="/" className="hover:text-orange-600">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-orange-600">Services</Link>
              <span>/</span>
              <span className="text-gray-900">Soundproofing</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Professional Soundproofing Services
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Create peaceful, quiet spaces in your home or business with expert soundproofing solutions. 
                  Block unwanted noise and enhance privacy with our professional acoustic treatments.
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
                    <span>Expert Installation</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="absolute -top-4 -right-4 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Up to 80% Noise Reduction
                  </div>
                  <Volume2 className="h-16 w-16 text-orange-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Why Soundproofing?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Reduce outside noise pollution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Enhance privacy between rooms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Improve sleep quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Create professional recording spaces</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Increase property value</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Benefits of Professional Soundproofing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform your space with our expert soundproofing solutions
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

        {/* Applications Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Soundproofing Applications
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Custom acoustic solutions for every space and need
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      {index === 0 ? <Home className="h-6 w-6 text-orange-600" /> : 
                       index === 1 ? <Building className="h-6 w-6 text-orange-600" /> :
                       <Headphones className="h-6 w-6 text-orange-600" />}
                      {app.title}
                    </CardTitle>
                    <CardDescription>{app.ideal}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {app.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
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

        {/* Materials Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professional Soundproofing Materials
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use only the highest quality acoustic materials for lasting results
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {materials.map((material, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{material.name}</CardTitle>
                    <CardDescription>{material.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Best for:</span> {material.bestFor}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-orange-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Soundproofing Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional installation from consultation to completion
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="font-bold mb-2">Acoustic Assessment</h3>
                <p className="text-sm text-gray-600">Analyze your space and identify noise sources</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="font-bold mb-2">Custom Solution</h3>
                <p className="text-sm text-gray-600">Design a tailored soundproofing plan</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="font-bold mb-2">Professional Installation</h3>
                <p className="text-sm text-gray-600">Expert installation with minimal disruption</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="font-bold mb-2">Testing & Verification</h3>
                <p className="text-sm text-gray-600">Ensure optimal acoustic performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="quote" className="py-16 px-4 bg-gradient-to-r from-orange-600 to-orange-500">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready for a Quieter, More Peaceful Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get your free soundproofing consultation and quote today. 
              Our acoustic experts are ready to help you create the perfect sound environment.
            </p>
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
                  Get Free Quote
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

export default Soundproofing