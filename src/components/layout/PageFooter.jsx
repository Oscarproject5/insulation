import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Shield, Star, Facebook, Instagram, Twitter, ChevronRight, Home, Briefcase, Users, FileText } from 'lucide-react'
import { services, serviceAreas, siteConfig } from '../../data/siteConfig'

const PageFooter = () => {
  return (
    <>
      {/* Mobile Footer - Landing Page Style */}
      <footer className="lg:hidden bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gray-900 text-white p-2 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Valley Insulation Pros</h4>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Your trusted local insulation contractor serving the Rio Grande Valley since 2010.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-400">4.9/5 Rating</span>
              </div>
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3">Services</h5>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link to="/services/spray-foam" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Spray Foam Insulation
                  </Link>
                </li>
                <li>
                  <Link to="/services/blown-in" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Blown-In Insulation
                  </Link>
                </li>
                <li>
                  <Link to="/services/attic" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Attic Insulation
                  </Link>
                </li>
                <li>
                  <Link to="/services/wall" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Wall Insulation
                  </Link>
                </li>
                <li>
                  <Link to="/services/commercial" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Commercial Insulation
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-orange-400 hover:text-orange-300 font-semibold">
                    View All Services →
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3">Service Areas</h5>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link to="/areas/mcallen" className="text-gray-400 hover:text-orange-400 transition-colors">
                    McAllen
                  </Link>
                  <span className="text-gray-400"> & </span>
                  <Link to="/areas/edinburg" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Edinburg
                  </Link>
                </li>
                <li>
                  <Link to="/areas/brownsville" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Brownsville
                  </Link>
                  <span className="text-gray-400"> & </span>
                  <Link to="/areas/harlingen" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Harlingen
                  </Link>
                </li>
                <li>
                  <Link to="/areas/mission" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Mission
                  </Link>
                  <span className="text-gray-400"> & </span>
                  <Link to="/areas/pharr" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Pharr
                  </Link>
                </li>
                <li>
                  <Link to="/locations" className="text-orange-400 hover:text-orange-300 font-semibold">
                    All Service Areas →
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3">Quick Links</h5>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link to="/quote" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Get Free Quote
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-orange-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services/energy-efficiency" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Energy Savings Calculator
                  </Link>
                </li>
                <li>
                  <a href="/#testimonials" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Customer Reviews
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="text-gray-400 hover:text-orange-400 transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3">Contact Info</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${siteConfig.company.phoneRaw}`} className="hover:text-orange-400 transition-colors">
                    {siteConfig.company.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@valleyinsulationpros.com" className="hover:text-orange-400 transition-colors">
                    info@valleyinsulationpros.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Serving all of Rio Grande Valley, TX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Sat: 7AM-7PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-xs text-gray-400">
            <p>&copy; 2024 Valley Insulation Pros. All rights reserved. Licensed & Insured in Texas.</p>
            <p className="mt-1">Emergency service • Free estimates • Quality guarantee</p>
            <div className="mt-3 space-x-4">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Desktop Footer - Original Design */}
      <footer className="hidden lg:block bg-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold">Valley Insulation</div>
                  <div className="text-xs text-gray-400">Experts Since 2009</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Professional insulation services across the Rio Grande Valley. 
                Save up to 40% on energy bills with our expert installation.
              </p>
              <div className="space-y-2">
                <a href={`tel:${siteConfig.company.phoneRaw}`} className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors">
                  <Phone className="h-4 w-4" />
                  {siteConfig.company.phone}
                </a>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="h-4 w-4" />
                  Mon-Sat: 7AM-7PM
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Shield className="h-4 w-4" />
                  Licensed & Insured
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link 
                      to={`/services/${service.slug}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/services"
                    className="text-orange-400 hover:text-orange-300 font-semibold"
                  >
                    View All Services →
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Service Areas */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2">
                {serviceAreas.map((area) => (
                  <li key={area.id}>
                    <Link 
                      to={`/areas/${area.slug}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {area.name}, TX
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/locations"
                    className="text-orange-400 hover:text-orange-300 font-semibold"
                  >
                    All Service Areas →
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Quick Links & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <ul className="space-y-2 mb-6">
                <li>
                  <a href="/#quote" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Get Free Quote
                  </a>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-orange-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/financing" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Financing Options
                  </Link>
                </li>
                <li>
                  <Link to="/warranty" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Warranty
                  </Link>
                </li>
              </ul>
              
              {/* Social Media */}
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-lg hover:bg-orange-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-lg hover:bg-orange-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-lg hover:bg-orange-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>4.9 Rating • 127+ Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span>EPA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span>Same-Day Service</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="bg-gray-950 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>&copy; 2024 Valley Insulation Pros. All rights reserved.</p>
              <div className="flex gap-6 mt-2 md:mt-0">
                <Link to="/privacy" className="hover:text-gray-300 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-gray-300 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="hover:text-gray-300 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default PageFooter