import React from 'react';
import { Activity } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <Activity className="animate-spin text-white mx-auto mb-4" size={48} />
          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
        </div>
        <h2 className="text-white text-xl font-semibold mb-2">Loading Analytics</h2>
        <p className="text-blue-200">Please wait while we fetch your data...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
