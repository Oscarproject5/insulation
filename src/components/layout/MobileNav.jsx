import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Briefcase, MapPin, Phone, FileText } from 'lucide-react'

const MobileNav = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/services', icon: Briefcase, label: 'Services' },
    { path: '/areas', icon: MapPin, label: 'Areas' },
    { path: '/quote', icon: FileText, label: 'Quote' },
    { path: 'tel:9568540899', icon: Phone, label: 'Call', external: true }
  ]

  return (
    <div className="mobile-tab-bar">
      {navItems.map((item) => {
        const isActive = item.path === '/' 
          ? location.pathname === '/'
          : location.pathname.startsWith(item.path)
        
        if (item.external) {
          return (
            <a
              key={item.path}
              href={item.path}
              className="mobile-tab-item"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </a>
          )
        }

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-tab-item ${isActive ? 'active' : ''}`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default MobileNav