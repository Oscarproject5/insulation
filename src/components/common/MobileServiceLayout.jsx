import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft,
  Phone,
  Calendar,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  Shield,
  DollarSign,
  Home,
  Users
} from 'lucide-react';

const MobileServiceLayout = ({ 
  title,
  subtitle,
  heroImage,
  heroGradient = "from-orange-500 to-orange-600",
  heroIcon,
  heroPattern,
  rating = 4.9,
  reviews = 247,
  responseTime = "30 min",
  accentColor = "orange",
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
              <span className="text-xs text-gray-600">{title}</span>
            </div>
          </Link>
          
          {/* Phone and Back buttons */}
          <div className="flex items-center gap-2">
            <a href="tel:9568540899" className="p-2">
              <Phone className="w-5 h-5 text-orange-500" />
            </a>
            <Link to="/services" className="p-2">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer - properly sized to account for header height */}
      <div className="h-28"></div>

      {/* Hero Image Section */}
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
        
        {/* Hero Image */}
        {heroImage && (
          <img 
            src={heroImage} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
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
              <Star className="w-3 h-3 text-yellow-300 fill-current" />
              <span className="text-white text-xs font-medium">{rating}</span>
            </div>
          </div>
          
          {/* Bottom Section with Title */}
          <div>
            <h2 className="text-white text-3xl font-bold mb-1">{title}</h2>
            <p className="text-white/90 text-sm font-medium">{subtitle}</p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-white/80" />
                <span className="text-white/80 text-xs">{reviews} reviews</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-white/80" />
                <span className="text-white/80 text-xs">{responseTime}</span>
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
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-bold text-gray-900">{rating}</span>
            </div>
            <p className="text-xs text-gray-500">{reviews} reviews</p>
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
              <Shield className="w-4 h-4 text-blue-500" />
              <span className="font-bold text-gray-900">Licensed</span>
            </div>
            <p className="text-xs text-gray-500">& Insured</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-28 z-40">
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
            onClick={() => setActiveTab('savings')}
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'savings' 
                ? 'text-orange-500 border-orange-500' 
                : 'text-gray-600 border-transparent'
            }`}
          >
            Savings
          </button>
          <button
            onClick={() => setActiveTab('areas')}
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'areas' 
                ? 'text-orange-500 border-orange-500' 
                : 'text-gray-600 border-transparent'
            }`}
          >
            Areas
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
            Get Free Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileServiceLayout;