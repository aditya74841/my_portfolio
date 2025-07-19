import React from 'react';
import { Calendar, TrendingUp } from 'lucide-react';

const Header = ({ isVisible }) => {
  return (
    <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg border border-white/20">
        <Calendar className="w-4 h-4 text-indigo-600" />
        <span className="text-sm font-medium text-gray-700">Daily Updates</span>
      </div>
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
        My Journey Updates
      </h1>
      
      <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Follow my daily progress, thoughts, and discoveries as I build amazing projects and learn new technologies
      </p>
      
      <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <TrendingUp className="w-4 h-4" />
          <span>Real-time updates</span>
        </div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <span>Interactive comments</span>
      </div>
    </div>
  );
};

export default Header;
