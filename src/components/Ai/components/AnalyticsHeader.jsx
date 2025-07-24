import React from 'react';

const AnalyticsHeader = ({ useDummyData }) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-white mb-2">AI Chat Analytics</h1>
      <p className="text-blue-200 text-lg">Analyze user interactions and conversation patterns</p>
      {useDummyData && (
        <div className="mt-4 text-sm text-yellow-200 bg-yellow-900/30 border border-yellow-600/50 p-3 rounded-lg">
          📊 API connection failed. Currently showing demo data for visualization.
        </div>
      )}
    </div>
  );
};

export default AnalyticsHeader;
