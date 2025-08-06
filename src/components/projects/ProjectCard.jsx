
import React, { useState } from 'react';
import { Eye, Star, Clock, ExternalLink, Github } from 'lucide-react';
import { TechStackBadges } from './Utility/TechStackBadges';
import { ActionButtons } from './Utility/ActionButtons';

const ProjectCard = ({ project, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] border border-gray-100 ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      }`}
      style={{ 
        animationDelay: `${index * 150}ms`,
        height: '520px',
        minHeight: '520px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassmorphism Header */}
      <div 
        className={`relative bg-gradient-to-br ${project.gradient} overflow-hidden`}
        style={{ height: '180px' }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-12 right-8 w-16 h-16 bg-white rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-8 left-12 w-12 h-12 bg-white rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Project Letter with Modern Typography */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-6xl font-black opacity-40 transform group-hover:scale-110 transition-transform duration-500">
            {project.title.charAt(0)}
          </div>
        </div>
        
        {/* Modern Stats Bar */}
        <div className="absolute top-4 left-4 flex gap-3">
          <div className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            {project.views}
          </div>
          <div className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
            <Star className="w-3.5 h-3.5" />
            {project.stars}
          </div>
        </div>
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 right-4 bg-white/25 backdrop-blur-lg border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
          {project.category}
        </div>
        
        {/* Dynamic Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.liveDemoLink && (
                <button 
                  onClick={() => window.open(project.liveDemoLink, '_blank')}
                  className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}
              {project.githubLink && (
                <button 
                  onClick={() => window.open(project.githubLink, '_blank')}
                  className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section with Better Spacing */}
      <div className="p-6 flex flex-col" style={{ height: '340px' }}>
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4" style={{ minHeight: '52px' }}>
          <div className="flex-1 pr-3">
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-medium">{project.duration}</span>
          </div>
        </div>
        
        {/* Description with Better Typography */}
        <div className="mb-5" style={{ height: '84px' }}>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 overflow-hidden">
            {project.description}
          </p>
        </div>
        
        {/* Tech Stack with Improved Layout */}
        <div className="mb-5" style={{ minHeight: '48px' }}>
          <div className="flex flex-wrap gap-2">
            <TechStackBadges 
              techStack={project.techStack} 
              variant="modern" 
            />
          </div>
        </div>
        
        {/* Action Buttons using your existing component */}
        <div className="mb-5" style={{ minHeight: '44px' }}>
          <ActionButtons project={project} />
        </div>
        
        {/* Footer with Modern Styling (optional - currently commented) */}
        {/* <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Completed {project.completedDate}</span>
            </div>
            {project.difficulty && (
              <div className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                project.difficulty === 'Advanced' ? 'bg-gradient-to-r from-red-100 to-red-50 text-red-700 border border-red-200' :
                project.difficulty === 'Intermediate' ? 'bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 border border-amber-200' :
                'bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 border border-emerald-200'
              }`}>
                {project.difficulty}
              </div>
            )}
          </div>
        </div> */}
      </div>
      
      {/* Subtle Border Glow on Hover */}
      <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
    </div>
  );
};

export default ProjectCard;
