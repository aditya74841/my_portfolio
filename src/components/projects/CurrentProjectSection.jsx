import React from 'react';
import CurrentProjectCard from './CurrentProjectCard';

const CurrentProjectsSection = ({ projects, isVisible }) => {
  return (
    <div className="mb-12 sm:mb-20">
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full px-4 py-2 mb-4 text-sm font-medium">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Live Projects
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Currently Building
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Exciting projects in development that showcase cutting-edge technologies and innovative solutions
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <CurrentProjectCard 
            key={project.id} 
            project={project} 
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentProjectsSection;
