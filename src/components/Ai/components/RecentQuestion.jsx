import React from 'react';
import { Globe, Clock, MessageCircle } from 'lucide-react';

const RecentQuestions = ({ data }) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Questions</h3>
      <div className="space-y-4">
        {data.slice(0, 10).map((item, index) => (
          <div 
            key={item._id} 
            className="border-l-4 border-blue-500 pl-6 py-4 bg-gradient-to-r from-blue-50 to-transparent hover:from-blue-100 transition-all duration-200 rounded-r-lg"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
                <MessageCircle size={16} className="text-blue-600" />
                {item.title}
              </h4>
              <span className="text-xs text-gray-500 whitespace-nowrap ml-4 bg-gray-100 px-2 py-1 rounded">
                {new Date(item.createdAt).toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">{item.response}</p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded">
                <Globe size={12} />
                {item.ipAddress}
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded">
                <Clock size={12} />
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentQuestions;
