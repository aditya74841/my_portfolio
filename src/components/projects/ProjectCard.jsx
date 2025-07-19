import React, { useState } from 'react';
import { Github, ExternalLink, Code, Eye, Star, Clock } from 'lucide-react';
import { TechStackBadges } from './Utility/TechStackBadges';
import { ActionButtons } from './Utility/ActionButtons';


const ProjectCard = ({ project, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Header */}
      <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-4xl sm:text-6xl font-bold opacity-30">
            {project.title.charAt(0)}
          </div>
        </div>
        
        {/* Project Stats */}
        <div className="absolute top-3 left-3 flex gap-2">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {project.views}
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Star className="w-3 h-3" />
            {project.stars}
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-white bg-opacity-20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
          {project.category}
        </div>
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-70' : 'opacity-0'
        }`} />
      </div>
      
      <div className="p-4 sm:p-6">
        {/* Title and Date */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>{project.duration}</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <TechStackBadges 
          techStack={project.techStack} 
          variant="gradient" 
        />
        
        {/* Features */}
        {/* <ProjectFeatures features={project.features} /> */}
        
        {/* Action Buttons */}
        <ActionButtons project={project} />
        
        {/* Project Info */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Completed: {project.completedDate}</span>
          <span className={`px-2 py-1 rounded-full ${
            project.difficulty === 'Advanced' ? 'bg-red-100 text-red-600' :
            project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
            'bg-green-100 text-green-600'
          }`}>
            {project.difficulty}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
