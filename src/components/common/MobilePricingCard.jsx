import React from 'react';
import { Check, TrendingUp } from 'lucide-react';

const MobilePricingCard = ({ 
  title, 
  price, 
  unit = "per month", 
  savings, 
  features = [],
  popular = false 
}) => {
  return (
    <div className={`bg-white rounded-xl p-4 border ${popular ? 'border-orange-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-2">
          MOST POPULAR
        </div>
      )}
      
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-3xl font-bold text-gray-900">${price}</span>
        <span className="text-sm text-gray-500">/{unit}</span>
      </div>
      
      {savings && (
        <div className="flex items-center gap-1 text-green-600 text-sm mb-3">
          <TrendingUp className="w-4 h-4" />
          <span>Save ${savings}/year</span>
        </div>
      )}
      
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobilePricingCard;