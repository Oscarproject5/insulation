import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, MapPin, Info, FileText } from 'lucide-react'

const QuickLinks = () => {
  return (
    <div className="lg:hidden bg-gradient-to-br from-gray-50 to-gray-100 py-6 px-4">
      <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">
        Explore More
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        <Link 
          to="/services"
          className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="flex items-start justify-between mb-2">
            <Sparkles className="h-8 w-8 text-orange-500" />
            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-orange-600 transition-colors" />
          </div>
          <h4 className="font-semibold text-gray-900 text-sm">All Services</h4>
          <p className="text-xs text-gray-600 mt-1">Browse our full catalog</p>
        </Link>
        
        <Link 
          to="/locations"
          className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="flex items-start justify-between mb-2">
            <MapPin className="h-8 w-8 text-blue-500" />
            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
          <h4 className="font-semibold text-gray-900 text-sm">Service Areas</h4>
          <p className="text-xs text-gray-600 mt-1">Find your location</p>
        </Link>
        
        <Link 
          to="/about"
          className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="flex items-start justify-between mb-2">
            <Info className="h-8 w-8 text-green-500" />
            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition-colors" />
          </div>
          <h4 className="font-semibold text-gray-900 text-sm">About Us</h4>
          <p className="text-xs text-gray-600 mt-1">Learn our story</p>
        </Link>
        
        <a 
          href="/#quote"
          className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="flex items-start justify-between mb-2">
            <FileText className="h-8 w-8 text-purple-500" />
            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
          </div>
          <h4 className="font-semibold text-gray-900 text-sm">Get Quote</h4>
          <p className="text-xs text-gray-600 mt-1">Free estimate form</p>
        </a>
      </div>
    </div>
  )
}

export default QuickLinks