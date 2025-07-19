// ActionButtons.jsx
import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

export const ActionButtons = ({ project }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <a
        href={project.githubLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium"
      >
        <Github className="w-4 h-4" />
        <span className="hidden sm:inline">GitHub</span>
      </a>
      
      {project.liveDemoLink && (
        <a
          href={project.liveDemoLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="hidden sm:inline">Live Demo</span>
        </a>
      )}
      
      {project.apiDocsLink && (
        <a
          href={project.apiDocsLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium"
        >
          <Code className="w-4 h-4" />
          <span className="hidden sm:inline">API Docs</span>
        </a>
      )}
    </div>
  );
};