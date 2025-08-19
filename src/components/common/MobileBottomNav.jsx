import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Home, MessageCircle, Grid, MapPin, Briefcase } from 'lucide-react'

const MobileBottomNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Check if we're on a service or area page
  const isServicePage = location.pathname.includes('/services/')
  const isAreaPage = location.pathname.includes('/areas/')
  const showParentLink = isServicePage || isAreaPage
  
  // Determine active tab based on current path
  const getActiveTab = () => {
    const path = location.pathname
    if (path === '/') return 'home'
    if (path.includes('/quote')) return 'quote'
    if (path === '/services') return 'services'
    if (path === '/locations') return 'locations'
    return ''
  }
  
  const activeTab = getActiveTab()
  
  const handleTabClick = (tab) => {
    switch(tab) {
      case 'home':
        navigate('/')
        break
      case 'quote':
        // Navigate to landing page and scroll to quote section
        window.location.href = '/#quote'
        break
      case 'services':
        navigate('/services')
        break
      case 'locations':
        navigate('/locations')
        break
      default:
        break
    }
  }
  
  // Get parent page info
  const getParentInfo = () => {
    if (isServicePage) {
      return {
        icon: <Briefcase />,
        label: 'All Services',
        tab: 'services'
      }
    }
    if (isAreaPage) {
      return {
        icon: <MapPin />,
        label: 'Locations',
        tab: 'locations'
      }
    }
    return null
  }
  
  const parentInfo = getParentInfo()
  
  return (
    <div className="mobile-tab-bar lg:hidden" style={{ justifyContent: 'space-around' }}>
      <div 
        className={`mobile-tab-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => handleTabClick('home')}
      >
        <Home />
        <span>Home</span>
      </div>
      
      {showParentLink && parentInfo && (
        <div 
          className={`mobile-tab-item ${activeTab === parentInfo.tab ? 'active' : ''}`}
          onClick={() => handleTabClick(parentInfo.tab)}
        >
          {parentInfo.icon}
          <span>{parentInfo.label}</span>
        </div>
      )}
      
      <div 
        className={`mobile-tab-item ${activeTab === 'quote' ? 'active' : ''}`}
        onClick={() => handleTabClick('quote')}
      >
        <MessageCircle />
        <span>Quote</span>
      </div>
    </div>
  )
}

export default MobileBottomNav