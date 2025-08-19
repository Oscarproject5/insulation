import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const MobileBreadcrumb = () => {
  const location = useLocation()
  const pathSegments = location.pathname.split('/').filter(segment => segment)
  
  // Don't show breadcrumb on homepage
  if (pathSegments.length === 0) return null
  
  // Generate breadcrumb items
  const generateBreadcrumbs = () => {
    const breadcrumbs = [
      { label: 'Home', path: '/', icon: Home }
    ]
    
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      
      // Format the label
      let label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase())
      
      // Special label handling
      if (segment === 'services') label = 'Services'
      if (segment === 'locations' || segment === 'areas') label = 'Areas'
      if (segment === 'quote') label = 'Quote'
      
      breadcrumbs.push({
        label,
        path: currentPath,
        isLast: index === pathSegments.length - 1
      })
    })
    
    return breadcrumbs
  }
  
  const breadcrumbs = generateBreadcrumbs()
  
  return (
    <div className="lg:hidden bg-gray-50 border-b border-gray-200">
      <div className="px-4 py-2 flex items-center overflow-x-auto scrollbar-hide">
        <div className="flex items-center text-xs whitespace-nowrap">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              {index === 0 ? (
                <Link 
                  to={crumb.path}
                  className="flex items-center text-gray-500 hover:text-orange-600 transition-colors"
                >
                  <Home className="h-3 w-3" />
                </Link>
              ) : crumb.isLast ? (
                <span className="text-gray-900 font-medium">
                  {crumb.label}
                </span>
              ) : (
                <Link 
                  to={crumb.path}
                  className="text-gray-500 hover:text-orange-600 transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="h-3 w-3 mx-1 text-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileBreadcrumb