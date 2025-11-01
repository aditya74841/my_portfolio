import React from 'react';

const StatsCard = ({ label, value, borderColor }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${borderColor}`}>
      <div className="text-gray-600 text-sm font-medium mb-1">{label}</div>
      <div className="text-3xl font-bold text-gray-800">{value}</div>
    </div>
  );
};

export default StatsCard;
