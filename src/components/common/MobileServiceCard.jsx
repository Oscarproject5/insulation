import React from 'react';
import { ChevronRight } from 'lucide-react';

const MobileServiceCard = ({ icon, title, description, onClick, badge }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md transition-shadow"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
          {icon}
        </div>
      </div>
      <div className="flex-1 text-left">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          {badge && (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-0.5">{description}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
    </button>
  );
};

export default MobileServiceCard;