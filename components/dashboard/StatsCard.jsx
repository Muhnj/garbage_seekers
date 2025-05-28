import React from 'react';
import { 
  FiUsers, FiTruck, FiClock, FiDollarSign 
} from 'react-icons/fi';

const iconMap = {
  users: <FiUsers size={24} />,
  truck: <FiTruck size={24} />,
  clock: <FiClock size={24} />,
  'dollar-sign': <FiDollarSign size={24} />
};

const StatsCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${color} text-white`}>
          {iconMap[icon]}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;