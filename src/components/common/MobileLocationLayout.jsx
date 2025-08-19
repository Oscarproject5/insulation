import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft,
  Phone,
  Calendar,
  Star,
  MapPin,
  Clock,
  Shield,
  Home,
  Navigation,
  Users,
  Thermometer,
  Building
} from 'lucide-react';

const MobileLocationLayout = ({ 
  cityName,
  subtitle,
  population,
  heroGradient = "from-blue-500 to-blue-600",
  heroIcon,
  heroPattern,
  serviceRadius = "15 miles",
  responseTime = "30 min",
  established = "2015",
  accentColor = "blue",
  children 
}) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 lg:hidden">
      {/* Mobile App Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo and Company Name - Links to Home */}
          <Link to="/" className="flex items-center gap-2 flex-1">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-lg">
              <Home className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900">Valley Insulation</span>
              <span className="text-xs text-gray-600">{cityName}</span>
            </div>
          </Link>
          
          {/* Phone and Back buttons */}
          <div className="flex items-center gap-2">
            <a href="tel:9568540899" className="p-2">
              <Phone className="w-5 h-5 text-orange-500" />
            </a>
            <Link to="/locations" className="p-2">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-14"></div>

      {/* Hero Section with City Info */}
      <div className={`relative h-56 bg-gradient-to-br ${heroGradient} overflow-hidden`}>
        {/* Background Pattern */}
        {heroPattern === 'dots' && (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        )}
        {heroPattern === 'waves' && (
          <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 120" fill="none">
            <path d="M0 60C240 60 240 0 480 0C720 0 720 60 960 60C1200 60 1200 0 1440 0V120H0V60Z" fill="white"/>
          </svg>
        )}
        {heroPattern === 'grid' && (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>
        )}
        {heroPattern === 'cityscape' && (
          <div className="absolute bottom-0 left-0 right-0 opacity-10">
            <svg viewBox="0 0 1440 200" fill="white">
              <rect x="100" y="120" width="80" height="80" />
              <rect x="220" y="80" width="100" height="120" />
              <rect x="360" y="100" width="60" height="100" />
              <rect x="460" y="60" width="120" height="140" />
              <rect x="620" y="90" width="80" height="110" />
              <rect x="740" y="70" width="90" height="130" />
              <rect x="870" y="110" width="70" height="90" />
              <rect x="980" y="50" width="110" height="150" />
              <rect x="1130" y="85" width="85" height="115" />
              <rect x="1255" y="95" width="95" height="105" />
            </svg>
          </div>
        )}
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          {/* Top Section with Icon */}
          <div className="flex justify-between items-start">
            {heroIcon && (
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                {React.createElement(heroIcon, { className: "w-6 h-6 text-white" })}
              </div>
            )}
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
              <Building className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-medium">Est. {established}</span>
            </div>
          </div>
          
          {/* Bottom Section with City Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-white" />
              <h2 className="text-white text-3xl font-bold">{cityName}</h2>
            </div>
            <p className="text-white/90 text-sm font-medium mb-3">{subtitle}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-white/80" />
                <span className="text-white/80 text-xs">{population} residents</span>
              </div>
              <div className="flex items-center gap-1">
                <Navigation className="w-4 h-4 text-white/80" />
                <span className="text-white/80 text-xs">{serviceRadius} coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-white border-b">
        <div className="flex items-center justify-around py-3">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="font-bold text-gray-900">{population}</span>
            </div>
            <p className="text-xs text-gray-500">Population</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <Clock className="w-4 h-4 text-green-500" />
              <span className="font-bold text-gray-900">{responseTime}</span>
            </div>
            <p className="text-xs text-gray-500">Response</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <Navigation className="w-4 h-4 text-orange-500" />
              <span className="font-bold text-gray-900">{serviceRadius}</span>
            </div>
            <p className="text-xs text-gray-500">Coverage</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-14 z-40">
        <div className="flex overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'overview' 
                ? 'text-orange-500 border-orange-500' 
                : 'text-gray-600 border-transparent'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'services' 
                ? 'text-orange-500 border-orange-500' 
                : 'text-gray-600 border-transparent'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('neighborhoods')}
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'neighborhoods' 
                ? 'text-orange-500 border-orange-500' 
                : 'text-gray-600 border-transparent'
            }`}
          >
            Areas
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'contact' 
                ? 'text-orange-500 border-orange-500' 
                : 'text-gray-600 border-transparent'
            }`}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="pb-20">
        {children({ activeTab, setActiveTab })}
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
        <div className="p-3">
          <a href="/#quote" className="block w-full bg-orange-500 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5" />
            Get Free {cityName} Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileLocationLayout;