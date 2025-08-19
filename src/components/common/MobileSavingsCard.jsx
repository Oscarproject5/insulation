import React from 'react';
import { TrendingUp, DollarSign, Zap, Clock, CheckCircle } from 'lucide-react';

const MobileSavingsCard = ({ 
  title, 
  savingsAmount, 
  savingsPercent,
  timeFrame = "per year",
  features = [],
  icon: Icon = DollarSign,
  highlight = false 
}) => {
  return (
    <div className={`bg-white rounded-xl p-4 shadow-sm ${highlight ? 'ring-2 ring-orange-500' : ''}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${highlight ? 'bg-orange-100' : 'bg-gray-100'}`}>
            <Icon className={`w-5 h-5 ${highlight ? 'text-orange-600' : 'text-gray-600'}`} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
            {highlight && (
              <span className="text-xs text-orange-600 font-medium">Most Popular</span>
            )}
          </div>
        </div>
      </div>
      
      <div className="mb-3">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-green-600">{savingsAmount}</span>
          <span className="text-sm text-gray-600">{timeFrame}</span>
        </div>
        {savingsPercent && (
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">Up to {savingsPercent}% savings</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-xs text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">ROI Timeline</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gray-400" />
            <span className="font-medium text-gray-700">2-3 years</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSavingsCard;