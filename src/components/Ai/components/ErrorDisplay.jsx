import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

const ErrorDisplay = ({ error, onRetry }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="bg-red-100 rounded-full p-4 mx-auto mb-4 w-fit">
          <AlertTriangle className="text-red-600" size={48} />
        </div>
        <h2 className="text-white text-xl font-semibold mb-2">Error Loading Analytics</h2>
        <p className="text-blue-200 mb-6">{error}</p>
        <button 
          onClick={onRetry}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 mx-auto transform hover:scale-105"
        >
          <RefreshCw size={20} />
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorDisplay;
