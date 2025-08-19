import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Layers } from 'lucide-react';

export const RelatedServices = ({ currentService, isMobile = false }) => {
  const services = [
    { name: 'Spray Foam', path: '/services/spray-foam', description: 'Maximum efficiency' },
    { name: 'Blown-In', path: '/services/blown-in', description: 'Cost-effective coverage' },
    { name: 'Attic', path: '/services/attic', description: 'Complete attic solutions' },
    { name: 'Wall', path: '/services/wall', description: 'Interior wall insulation' },
    { name: 'Commercial', path: '/services/commercial', description: 'Business solutions' },
    { name: 'Soundproofing', path: '/services/soundproofing', description: 'Acoustic control' },
    { name: 'Specialty', path: '/services/specialty', description: 'Custom applications' },
    { name: 'Roof', path: '/services/roof', description: 'Radiant barrier' },
    { name: 'Energy Efficiency', path: '/services/energy-efficiency', description: 'Complete audits' }
  ];

  const relatedServices = services.filter(service => service.path !== currentService).slice(0, 3);

  if (isMobile) {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-500" />
          Related Services
        </h3>
        <div className="space-y-2">
          {relatedServices.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{service.name}</p>
                <p className="text-xs text-gray-600">{service.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-orange-500" />
            </Link>
          ))}
        </div>
        <Link
          to="/services"
          className="block text-center text-sm text-orange-500 font-medium mt-3 hover:text-orange-600"
        >
          View All Services →
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
      <div className="space-y-3">
        {relatedServices.map((service) => (
          <Link
            key={service.path}
            to={service.path}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all"
          >
            <div>
              <p className="font-medium text-gray-900">{service.name}</p>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-orange-500" />
          </Link>
        ))}
      </div>
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-orange-500 font-medium mt-4 hover:text-orange-600"
      >
        View All Services
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export const NearbyLocations = ({ currentLocation, isMobile = false }) => {
  const locations = [
    { name: 'McAllen', path: '/areas/mcallen', distance: '10 miles' },
    { name: 'Edinburg', path: '/areas/edinburg', distance: '12 miles' },
    { name: 'Brownsville', path: '/areas/brownsville', distance: '25 miles' },
    { name: 'Harlingen', path: '/areas/harlingen', distance: '20 miles' },
    { name: 'Mission', path: '/areas/mission', distance: '8 miles' },
    { name: 'Pharr', path: '/areas/pharr', distance: '6 miles' }
  ];

  const nearbyLocations = locations.filter(loc => loc.path !== currentLocation).slice(0, 3);

  if (isMobile) {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-orange-500" />
          Nearby Service Areas
        </h3>
        <div className="space-y-2">
          {nearbyLocations.map((location) => (
            <Link
              key={location.path}
              to={location.path}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{location.name}</p>
                <p className="text-xs text-gray-600">Service available</p>
              </div>
              <span className="text-xs text-gray-500">{location.distance}</span>
            </Link>
          ))}
        </div>
        <Link
          to="/locations"
          className="block text-center text-sm text-orange-500 font-medium mt-3 hover:text-orange-600"
        >
          View All Locations →
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Nearby Service Areas</h3>
      <div className="space-y-3">
        {nearbyLocations.map((location) => (
          <Link
            key={location.path}
            to={location.path}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">{location.name}</p>
                <p className="text-sm text-gray-600">Full service coverage</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{location.distance}</span>
          </Link>
        ))}
      </div>
      <Link
        to="/locations"
        className="inline-flex items-center gap-2 text-orange-500 font-medium mt-4 hover:text-orange-600"
      >
        View All Locations
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};