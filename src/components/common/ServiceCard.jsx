import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'

const ServiceCard = ({ service, showFullDetails = false, currentArea = null }) => {
  const linkUrl = currentArea 
    ? `/services/${service.slug}/${currentArea.slug}`
    : `/services/${service.slug}`

  return (
    <div className={siteConfig.cardStyles.default}>
      {/* Image Section */}
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-2xl">{service.icon}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className={`${siteConfig.typography.heading3.desktop} mb-3 text-gray-900`}>
          {service.name}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {service.shortDescription}
        </p>

        {showFullDetails && (
          <>
            <p className="text-gray-700 mb-4">
              {service.description}
            </p>
            
            <div className="space-y-2 mb-6">
              {service.benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </>
        )}

        <Link 
          to={linkUrl}
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-300"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard