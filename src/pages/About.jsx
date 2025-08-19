import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  Users, 
  Award, 
  Shield, 
  Clock, 
  Target,
  Heart,
  Leaf,
  CheckCircle,
  Star,
  Phone,
  ArrowRight,
  Building,
  Thermometer,
  TrendingUp,
  MapPin,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Handshake,
  Home,
  Factory,
  FileText,
  MessageCircle
} from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import PageFooter from '../components/layout/PageFooter'
import { siteConfig } from '../data/siteConfig'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Valley Insulation Pros | Your Trusted Insulation Experts in South Texas</title>
        <meta name="description" content="Learn about Valley Insulation Pros - South Texas's premier insulation contractor. EPA certified, locally owned, serving the Rio Grande Valley since 2010. Meet our team and discover our commitment to energy efficiency." />
        <meta name="keywords" content="about Valley Insulation Pros, insulation company South Texas, EPA certified insulation, Rio Grande Valley contractors, energy efficiency experts" />
        <link rel="canonical" href="https://valleyinsulationpros.com/about" />
      </Helmet>

      <PageHeader />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-orange-50 via-white to-red-50">
          <div className="container mx-auto max-w-7xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link to="/" className="hover:text-orange-600">Home</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">About Us</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Your Trusted Insulation Experts in South Texas
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Valley Insulation Pros is the Rio Grande Valley's premier choice for 
                  professional insulation services. We're a locally-owned company dedicated to helping 
                  South Texas families and businesses save energy, reduce costs, and stay comfortable 
                  year-round.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">Expert</div>
                    <div className="text-sm text-gray-600">Professionals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">100s</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">40%</div>
                    <div className="text-sm text-gray-600">Avg Energy Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{siteConfig.company.rating}</div>
                    <div className="text-sm text-gray-600">Star Rating</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${siteConfig.company.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
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
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="mb-6">
                    <Award className="h-12 w-12 text-orange-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">EPA Certified & Licensed</h3>
                    <p className="text-gray-600">
                      Fully licensed, bonded, and insured. Our EPA certification ensures we follow 
                      the highest industry standards for safety and environmental protection.
                    </p>
                  </div>
                  <div className="border-t pt-6">
                    <Shield className="h-12 w-12 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">100% Satisfaction Guarantee</h3>
                    <p className="text-gray-600">
                      We stand behind our work with comprehensive warranties and a commitment to 
                      your complete satisfaction. Your comfort is our priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Valley Insulation Pros was founded with a simple mission: to help South Texas 
                  families and businesses combat extreme heat while reducing energy costs. What started 
                  as a small team of dedicated professionals has grown into the Rio Grande Valley's most 
                  trusted <Link to="/services" className="text-orange-600 hover:text-orange-700 underline">insulation company</Link>.
                </p>
                
                <p className="mb-6">
                  As long-time Valley residents, we recognized that many homes and businesses 
                  in our region were struggling with outdated or inadequate insulation. With summer 
                  temperatures regularly exceeding 100°F and humidity levels above 70%, proper 
                  <Link to="/services/spray-foam" className="text-orange-600 hover:text-orange-700 underline">spray foam</Link> or 
                  <Link to="/services/blown-in" className="text-orange-600 hover:text-orange-700 underline">blown-in insulation</Link> 
                  isn't just about comfort—it's essential for health, safety, and financial well-being.
                </p>

                <p className="mb-6">
                  We've insulated properties across the Valley, from historic 
                  homes in downtown <Link to="/areas/mcallen" className="text-orange-600 hover:text-orange-700 underline">McAllen</Link> to 
                  modern warehouses in <Link to="/areas/pharr" className="text-orange-600 hover:text-orange-700 underline">Pharr's industrial district</Link>. 
                  Our <Link to="/services/attic" className="text-orange-600 hover:text-orange-700 underline">attic insulation</Link> and 
                  <Link to="/services/commercial" className="text-orange-600 hover:text-orange-700 underline">commercial insulation</Link> projects 
                  have strengthened our expertise and deepened our commitment to excellence.
                </p>

                <p>
                  Today, we're proud to be a leading insulation contractor in the Valley, known for our 
                  quality workmanship, honest pricing, and exceptional customer service. But we're most 
                  proud of the relationships we've built with our customers and the positive impact we've 
                  had on our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <Target className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide South Texas with superior insulation solutions that dramatically reduce 
                  energy costs, improve comfort, and contribute to a more sustainable future. We strive 
                  to make quality <Link to="/services/wall" className="text-orange-600 hover:text-orange-700 underline">wall insulation</Link> and 
                  other services accessible to every home and business from 
                  <Link to="/areas/brownsville" className="text-orange-600 hover:text-orange-700 underline"> Brownsville</Link> to 
                  <Link to="/areas/edinburg" className="text-orange-600 hover:text-orange-700 underline"> Edinburg</Link>.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the undisputed leader in insulation services across South Texas, recognized for 
                  our innovation, integrity, and impact. We envision a Valley where every building is 
                  energy-efficient, comfortable, and environmentally responsible.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Customer First</h4>
                <p className="text-gray-600 text-sm">
                  Your satisfaction drives everything we do. We listen, we care, and we deliver 
                  solutions tailored to your specific needs.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Environmental Responsibility</h4>
                <p className="text-gray-600 text-sm">
                  We're committed to reducing energy consumption and using eco-friendly materials 
                  that protect both your family and our planet.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Integrity & Trust</h4>
                <p className="text-gray-600 text-sm">
                  Honest pricing, transparent communication, and standing behind our work—these 
                  aren't just promises, they're guarantees.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Continuous Learning</h4>
                <p className="text-gray-600 text-sm">
                  We stay at the forefront of insulation technology through ongoing training and 
                  certification programs.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Community Commitment</h4>
                <p className="text-gray-600 text-sm">
                  As Valley natives, we're invested in our community's success and well-being, 
                  supporting local causes and initiatives.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Excellence in Everything</h4>
                <p className="text-gray-600 text-sm">
                  From the first phone call to the final inspection, we maintain the highest 
                  standards of quality and professionalism.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Valley Insulation Pros?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Local Expertise</h4>
                    <p className="text-gray-600">
                      We understand South Texas climate challenges better than anyone. Our solutions are 
                      specifically designed for the Valley's unique weather conditions. From 
                      <Link to="/areas/mission" className="text-orange-600 hover:text-orange-700 underline"> Mission</Link> to 
                      <Link to="/areas/harlingen" className="text-orange-600 hover:text-orange-700 underline"> Harlingen</Link>, 
                      we know what works best in each community.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Award className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Certified Professionals</h4>
                    <p className="text-gray-600">
                      Our team holds EPA certifications and undergoes continuous training to stay current 
                      with the latest insulation technologies and techniques.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Thermometer className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Proven Results</h4>
                    <p className="text-gray-600">
                      Our customers consistently report significant reductions in energy bills after our 
                      <Link to="/services/spray-foam" className="text-orange-600 hover:text-orange-700 underline">spray foam</Link> or 
                      <Link to="/services/attic" className="text-orange-600 hover:text-orange-700 underline">attic insulation</Link> upgrades, 
                      often seeing returns on their investment quickly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Timely Service</h4>
                    <p className="text-gray-600">
                      We respect your time with prompt responses, on-time arrivals, and efficient 
                      installations that minimize disruption to your daily life.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Comprehensive Warranties</h4>
                    <p className="text-gray-600">
                      We stand behind our work with industry-leading warranties on both materials and 
                      labor, giving you peace of mind for years to come.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Energy Rebate Assistance</h4>
                    <p className="text-gray-600">
                      We help you navigate utility rebates and tax incentives, maximizing your savings 
                      and making energy efficiency more affordable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4">Proudly Serving the Rio Grande Valley</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              From <Link to="/areas/brownsville" className="text-orange-600 hover:text-orange-700 underline">Brownsville</Link> to 
              <Link to="/areas/mcallen" className="text-orange-600 hover:text-orange-700 underline">McAllen</Link>, we're your local insulation experts. 
              Our teams are strategically located throughout the Valley to provide quick, reliable service to every community. 
              Explore our <Link to="/services" className="text-orange-600 hover:text-orange-700 underline">full range of services</Link> or 
              <Link to="/quote" className="text-orange-600 hover:text-orange-700 underline">get a free quote</Link> today.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <Building className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="font-semibold text-lg mb-4">Major Cities We Serve</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><Link to="/areas/mcallen" className="hover:text-orange-600 transition-colors">McAllen</Link></li>
                  <li><Link to="/areas/brownsville" className="hover:text-orange-600 transition-colors">Brownsville</Link></li>
                  <li><Link to="/areas/harlingen" className="hover:text-orange-600 transition-colors">Harlingen</Link></li>
                  <li><Link to="/areas/edinburg" className="hover:text-orange-600 transition-colors">Edinburg</Link></li>
                  <li><Link to="/areas/mission" className="hover:text-orange-600 transition-colors">Mission</Link></li>
                  <li><Link to="/areas/pharr" className="hover:text-orange-600 transition-colors">Pharr</Link></li>
                </ul>
                <Link to="/locations" className="text-sm text-orange-600 hover:text-orange-700 underline mt-4 inline-block">
                  View All Locations →
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <Home className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-lg mb-4">Residential Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <Link to="/services/spray-foam" className="text-gray-600 hover:text-orange-600 transition-colors">Single Family Homes</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <Link to="/services/wall" className="text-gray-600 hover:text-orange-600 transition-colors">Townhomes & Condos</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <Link to="/services/blown-in" className="text-gray-600 hover:text-orange-600 transition-colors">Historic Properties</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <Link to="/services/attic" className="text-gray-600 hover:text-orange-600 transition-colors">New Construction</Link>
                  </li>
                </ul>
                <Link to="/services" className="text-sm text-green-600 hover:text-green-700 underline mt-4 inline-block">
                  Explore Services →
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <Factory className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-4">Commercial Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <Link to="/services/commercial" className="text-gray-600 hover:text-orange-600 transition-colors">Office Buildings</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <Link to="/services/commercial" className="text-gray-600 hover:text-orange-600 transition-colors">Warehouses</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <Link to="/services/commercial" className="text-gray-600 hover:text-orange-600 transition-colors">Retail Spaces</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <Link to="/services/commercial" className="text-gray-600 hover:text-orange-600 transition-colors">Industrial Facilities</Link>
                  </li>
                </ul>
                <Link to="/services/commercial" className="text-sm text-blue-600 hover:text-blue-700 underline mt-4 inline-block">
                  Commercial Solutions →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Our success is built on the expertise and dedication of our team. Every member is committed 
              to delivering exceptional service and results.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="h-12 w-12 text-white" />
                </div>
                <h4 className="font-semibold">Leadership Team</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Years of industry experience guiding our vision
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-white" />
                </div>
                <h4 className="font-semibold">Certified Installers</h4>
                <p className="text-sm text-gray-600 mt-2">
                  EPA certified professionals trained in latest techniques
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h4 className="font-semibold">Customer Service</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Dedicated team ensuring your complete satisfaction
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h4 className="font-semibold">Quality Assurance</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Ensuring every project meets our high standards
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                We're always looking for talented, dedicated professionals who share our commitment to 
                excellence. If you're passionate about making a difference in people's lives through 
                energy efficiency, we'd love to hear from you.
              </p>
              <a
                href={`tel:${siteConfig.company.phoneRaw}`}
                className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Contact Us About Careers
              </a>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-red-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Our Services & Areas</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Popular Services */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-orange-600" />
                  Popular Services
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services/spray-foam" className="flex items-center justify-between text-gray-700 hover:text-orange-600 group">
                      <span>Spray Foam Insulation</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/attic" className="flex items-center justify-between text-gray-700 hover:text-orange-600 group">
                      <span>Attic Insulation</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/blown-in" className="flex items-center justify-between text-gray-700 hover:text-orange-600 group">
                      <span>Blown-In Insulation</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/wall" className="flex items-center justify-between text-gray-700 hover:text-orange-600 group">
                      <span>Wall Insulation</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/commercial" className="flex items-center justify-between text-gray-700 hover:text-orange-600 group">
                      <span>Commercial Services</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                </ul>
                <Link to="/services" className="mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700">
                  View All Services →
                </Link>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Service Areas
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/areas/mcallen" className="flex items-center justify-between text-gray-700 hover:text-green-600 group">
                      <span>McAllen (Headquarters)</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/areas/brownsville" className="flex items-center justify-between text-gray-700 hover:text-green-600 group">
                      <span>Brownsville</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/areas/edinburg" className="flex items-center justify-between text-gray-700 hover:text-green-600 group">
                      <span>Edinburg</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/areas/harlingen" className="flex items-center justify-between text-gray-700 hover:text-green-600 group">
                      <span>Harlingen</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/areas/mission" className="flex items-center justify-between text-gray-700 hover:text-green-600 group">
                      <span>Mission</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                </ul>
                <Link to="/locations" className="mt-4 inline-block text-sm font-semibold text-green-600 hover:text-green-700">
                  View All Locations →
                </Link>
              </div>

              {/* Resources & Actions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Quick Actions
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/quote" className="flex items-center justify-between text-gray-700 hover:text-blue-600 group">
                      <span className="font-medium">Get Free Quote</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <a href={`tel:${siteConfig.company.phoneRaw}`} className="flex items-center justify-between text-gray-700 hover:text-blue-600 group">
                      <span>Call for Consultation</span>
                      <Phone className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <Link to="/services/spray-foam/mcallen" className="flex items-center justify-between text-gray-700 hover:text-blue-600 group">
                      <span>Spray Foam in McAllen</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/attic/brownsville" className="flex items-center justify-between text-gray-700 hover:text-blue-600 group">
                      <span>Attic Service in Brownsville</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/commercial/pharr" className="flex items-center justify-between text-gray-700 hover:text-blue-600 group">
                      <span>Commercial in Pharr</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                </ul>
                <Link to="/" className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Back to Home →
                </Link>
              </div>
            </div>

            {/* Service Combinations Grid */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-bold text-xl mb-6 text-center">Find Services in Your Area</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {['McAllen', 'Edinburg', 'Brownsville', 'Harlingen', 'Mission', 'Pharr'].map(city => (
                  <div key={city} className="text-center">
                    <h4 className="font-semibold text-sm mb-2 text-gray-700">{city}</h4>
                    <ul className="space-y-1 text-xs">
                      <li>
                        <Link to={`/services/spray-foam/${city.toLowerCase()}`} className="text-orange-600 hover:underline">
                          Spray Foam
                        </Link>
                      </li>
                      <li>
                        <Link to={`/services/attic/${city.toLowerCase()}`} className="text-orange-600 hover:underline">
                          Attic
                        </Link>
                      </li>
                      <li>
                        <Link to={`/services/blown-in/${city.toLowerCase()}`} className="text-orange-600 hover:underline">
                          Blown-In
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Certifications & Affiliations</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Award className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">EPA Certified</h4>
                <p className="text-sm text-gray-600">
                  Certified by the Environmental Protection Agency for safe and responsible insulation practices
                </p>
              </div>

              <div className="text-center">
                <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Licensed & Insured</h4>
                <p className="text-sm text-gray-600">
                  Fully licensed in Texas with comprehensive liability and workers' compensation insurance
                </p>
              </div>

              <div className="text-center">
                <Building className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">BBB Accredited</h4>
                <p className="text-sm text-gray-600">
                  Better Business Bureau accredited with an A+ rating for ethical business practices
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Valley Insulation Pros Difference?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied customers who've transformed their properties with our 
              professional <Link to="/services" className="text-orange-600 hover:text-orange-700 underline">insulation services</Link>. 
              Whether you need <Link to="/services/spray-foam" className="text-orange-600 hover:text-orange-700 underline">spray foam</Link>, 
              <Link to="/services/blown-in" className="text-orange-600 hover:text-orange-700 underline">blown-in</Link>, or 
              <Link to="/services/attic" className="text-orange-600 hover:text-orange-700 underline">attic insulation</Link>, 
              let's discuss how we can help you save energy and improve comfort.
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Quick Response</h3>
                  <p className="text-sm text-gray-600">Same-day quotes available</p>
                </div>
                <div>
                  <Star className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">5-Star Service</h3>
                  <p className="text-sm text-gray-600">{siteConfig.company.rating} rating from customers</p>
                </div>
                <div>
                  <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Quality Guaranteed</h3>
                  <p className="text-sm text-gray-600">100% satisfaction promise</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${siteConfig.company.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: {siteConfig.company.phone}
                </a>
                <a
                  href="/#quote"
                  className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Get Online Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="flex justify-around">
          <Link 
            to="/"
            className="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-orange-600"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          
          <Link 
            to="/services"
            className="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-orange-600"
          >
            <Briefcase className="h-5 w-5" />
            <span className="text-xs mt-1">All Services</span>
          </Link>
          
          <Link 
            to="/locations"
            className="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-orange-600"
          >
            <MapPin className="h-5 w-5" />
            <span className="text-xs mt-1">Locations</span>
          </Link>
          
          <a 
            href="/#quote"
            className="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-orange-600"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs mt-1">Quote</span>
          </a>
        </div>
      </nav>

      <PageFooter />
    </>
  )
}

export default About