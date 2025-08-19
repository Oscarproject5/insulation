import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'

const NavigationDropdown = ({ 
  label, 
  items, 
  megaMenu = false,
  columns = 3 
}) => {
  const [isOpen, setIsOpen] = useState(false)

  // Simple dropdown for fewer items
  const SimpleDropdown = () => (
    <div className="py-2 min-w-[240px]">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors rounded-md"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-center justify-between">
            <span>{item.label}</span>
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          {item.description && (
            <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>
          )}
        </Link>
      ))}
      <div className="border-t mt-2 pt-2">
        <Link
          to={`/${label.toLowerCase().replace(' ', '-')}`}
          className="block px-4 py-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
          onClick={() => setIsOpen(false)}
        >
          View All {label === 'Locations' ? 'Service Areas' : label} →
        </Link>
      </div>
    </div>
  )

  // Mega menu for services/areas
  const MegaMenuContent = () => (
    <div className={`grid grid-cols-${columns} gap-6 p-6 min-w-[600px]`}>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className="group block"
          onClick={() => setIsOpen(false)}
        >
          {item.image && (
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
              <img 
                src={item.image} 
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors flex items-center gap-1">
            {item.icon && <span className="text-xl">{item.icon}</span>}
            {item.label}
          </h3>
          {item.description && (
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          )}
          {item.highlight && (
            <span className="inline-block mt-2 text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
              {item.highlight}
            </span>
          )}
        </Link>
      ))}
    </div>
  )

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        to={`/${label === 'Locations' ? 'locations' : label.toLowerCase()}`}
        className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Link>
      
      {/* Dropdown Container */}
      {isOpen && (
        <>
          {/* Invisible bridge to prevent gap hover issues */}
          <div className="absolute top-full left-0 right-0 h-4" />
          
          <div className={`absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 ${megaMenu ? '' : 'transform -translate-x-1/4'}`}>
            {megaMenu ? <MegaMenuContent /> : <SimpleDropdown />}
          </div>
        </>
      )}
    </div>
  )
}

export default NavigationDropdown