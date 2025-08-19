import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'
import { siteConfig, ctaMessages } from '../../data/siteConfig'

const CTASection = ({ 
  title = ctaMessages.primary,
  description = "Join hundreds of satisfied customers who are saving on energy bills",
  primaryButton = { text: 'Get Free Quote', link: '/quote' },
  secondaryButton = { text: 'Call Now', link: `tel:${siteConfig.company.phoneRaw}` },
  variant = 'gradient' // gradient, solid, outline
}) => {
  const bgStyles = {
    gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
    solid: 'bg-gray-900',
    outline: 'bg-white border-2 border-gray-200'
  }

  const textStyles = {
    gradient: 'text-white',
    solid: 'text-white',
    outline: 'text-gray-900'
  }

  return (
    <section className={`${bgStyles[variant]} ${textStyles[variant]} py-16 px-4 rounded-3xl my-12`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`${siteConfig.typography.heading2.desktop} mb-4`}>
          {title}
        </h2>
        
        <p className={`${siteConfig.typography.body.desktop} mb-8 ${variant === 'outline' ? 'text-gray-600' : 'text-white/90'}`}>
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButton && (
            <Link 
              to={primaryButton.link}
              className={`${variant === 'outline' ? siteConfig.buttonStyles.primary : 'bg-white text-gray-900 hover:bg-gray-100'} px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2`}
            >
              {primaryButton.text}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
          
          {secondaryButton && (
            <a 
              href={secondaryButton.link}
              className={`${variant === 'outline' ? siteConfig.buttonStyles.secondary : 'bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-gray-900'} px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2`}
            >
              <Phone className="h-4 w-4" />
              {secondaryButton.text}
            </a>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          <span className={`${variant === 'outline' ? 'text-gray-600' : 'text-white/80'}`}>
            ✓ Free Estimates
          </span>
          <span className={`${variant === 'outline' ? 'text-gray-600' : 'text-white/80'}`}>
            ✓ Licensed & Insured
          </span>
          <span className={`${variant === 'outline' ? 'text-gray-600' : 'text-white/80'}`}>
            ✓ Same-Day Service
          </span>
        </div>
      </div>
    </section>
  )
}

export default CTASection