import React from 'react'
import { siteConfig } from '../../data/siteConfig'

// Consistent page template for all content pages
const PageTemplate = ({ 
  children, 
  seo,
  hero,
  breadcrumbs,
  className = ''
}) => {
  return (
    <>
      {/* SEO Component */}
      {seo && <SEO {...seo} />}
      
      {/* Hero Section (optional) */}
      {hero && (
        <section className="relative bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(90deg, #94a3b8 1px, transparent 1px), linear-gradient(180deg, #94a3b8 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }} />
          </div>
          
          <div className="relative container mx-auto px-4 py-16 lg:py-24">
            {/* Breadcrumbs */}
            {breadcrumbs && (
              <nav className="mb-6">
                <ol className="flex items-center space-x-2 text-sm">
                  {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="flex items-center">
                      {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                      {crumb.href ? (
                        <a href={crumb.href} className="text-gray-600 hover:text-orange-500 transition-colors">
                          {crumb.label}
                        </a>
                      ) : (
                        <span className="text-gray-900 font-medium">{crumb.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            
            {/* Hero Content */}
            <div className="max-w-4xl">
              {hero.badge && (
                <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {hero.badge}
                </span>
              )}
              
              <h1 className={`${siteConfig.typography.hero.desktop} text-gray-900 mb-6`}>
                {hero.title}
              </h1>
              
              {hero.description && (
                <p className={`${siteConfig.typography.body.desktop} text-gray-600 mb-8 max-w-2xl`}>
                  {hero.description}
                </p>
              )}
              
              {hero.cta && (
                <div className="flex flex-col sm:flex-row gap-4">
                  {hero.cta.primary && (
                    <button className={siteConfig.buttonStyles.primary}>
                      {hero.cta.primary.text}
                    </button>
                  )}
                  {hero.cta.secondary && (
                    <button className={siteConfig.buttonStyles.secondary}>
                      {hero.cta.secondary.text}
                    </button>
                  )}
                </div>
              )}
              
              {hero.stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  {hero.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-orange-500">{stat.value}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      
      {/* Main Content */}
      <div className={`${className}`}>
        {children}
      </div>
    </>
  )
}

export default PageTemplate