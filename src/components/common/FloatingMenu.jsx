import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Sparkles, MapPin, FileText, Info, Home } from 'lucide-react'

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Sparkles, label: 'All Services', path: '/services' },
    { icon: MapPin, label: 'Locations', path: '/locations' },
    { icon: Info, label: 'About Us', path: '/about' },
    { icon: FileText, label: 'Get Quote', path: '/quote' }
  ]
  
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Menu Items - positioned under the button in top right */}
      <div className={`fixed top-32 right-4 z-[60] lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="bg-white rounded-2xl shadow-xl p-2 min-w-[200px] mt-2">
          {menuItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <item.icon className="h-5 w-5 text-orange-600" />
              <span className="text-gray-700 font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Floating Menu Button with text */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-28 right-4 z-[60] lg:hidden bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center gap-2"
        aria-label="Open navigation menu"
      >
        {isOpen ? (
          <>
            <X className="h-5 w-5" />
            <span className="text-sm font-semibold">Close</span>
          </>
        ) : (
          <>
            <Menu className="h-5 w-5" />
            <span className="text-sm font-semibold">Explore</span>
          </>
        )}
      </button>
    </>
  )
}

export default FloatingMenu