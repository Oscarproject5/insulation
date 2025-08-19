import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Valley Insulation Pros</h3>
            <p className="text-gray-400 mb-4">
              Professional insulation services in the Rio Grande Valley. 
              Licensed, insured, and committed to energy efficiency.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="h-4 w-4" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
              <Award className="h-4 w-4" />
              <span>EPA Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/spray-foam" className="text-gray-400 hover:text-white transition-colors">Spray Foam Insulation</Link></li>
              <li><Link to="/services/blown-in" className="text-gray-400 hover:text-white transition-colors">Blown-In Insulation</Link></li>
              <li><Link to="/services/attic" className="text-gray-400 hover:text-white transition-colors">Attic Insulation</Link></li>
              <li><Link to="/services/wall" className="text-gray-400 hover:text-white transition-colors">Wall Insulation</Link></li>
              <li><Link to="/services/commercial" className="text-gray-400 hover:text-white transition-colors">Commercial Services</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li><Link to="/areas/mcallen" className="text-gray-400 hover:text-white transition-colors">McAllen</Link></li>
              <li><Link to="/areas/edinburg" className="text-gray-400 hover:text-white transition-colors">Edinburg</Link></li>
              <li><Link to="/areas/brownsville" className="text-gray-400 hover:text-white transition-colors">Brownsville</Link></li>
              <li><Link to="/areas/harlingen" className="text-gray-400 hover:text-white transition-colors">Harlingen</Link></li>
              <li><Link to="/areas/mission" className="text-gray-400 hover:text-white transition-colors">Mission</Link></li>
              <li><Link to="/areas/pharr" className="text-gray-400 hover:text-white transition-colors">Pharr</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:9568540899" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>(956) 854-0899</span>
              </a>
              <a href="mailto:info@rgvinsulation.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@rgvinsulation.com</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Serving all of<br />Rio Grande Valley, TX</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="h-4 w-4" />
                <span>Mon-Sat: 7:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 Valley Insulation Pros. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer