import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Calendar, Sparkles, Zap,  TrendingUp } from 'lucide-react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Current projects you're working on
  const currentProjects = [
    {
      id: 'current-1',
      title: 'Audit Pro',
      description: 'Used to help companies for auditing',
      status: 'In Improvement',
      progress: 85,
      techStack: ['React', 'Node.js', 'ESLint', 'Express', 'MongoDB',"Nextjs"],
      expectedCompletion: 'August 2025',
      priority: 'high',
      icon: <Zap className="w-6 h-6" />
    },
    // {
    //   id: 'current-2', 
    //   title: 'Real-time Chat Application',
    //   description: 'Developing a scalable chat app with WebSocket integration and modern UI/UX',
    //   status: 'Planning',
    //   progress: 25,
    //   techStack: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Redis'],
    //   expectedCompletion: 'September 2025',
    //   priority: 'medium',
    //   icon: <Target className="w-6 h-6" />
    // }
  ];

  // All completed projects
  const completedProjects = [
    {
      id: 'proj-1',
      title: 'Url Shortner',
      description: 'A lightning-fast URL shortening service with custom aliases, comprehensive analytics, and QR code generation. Features real-time click tracking and user dashboard.',
      image: '/api/placeholder/400/300',
      category: 'web-app',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      githubLink: 'https://github.com/aditya74841/Url_Shortner',
      liveDemoLink: 'https://p1.iamadityaranjan.com/',
      features: ['Custom URL aliases', 'Analytics dashboard', 'QR code generation', 'Link expiration', 'Bulk operations'],
      completedDate: 'March 2025',
      gradient: 'from-blue-500 via-purple-500 to-pink-500'
    },
    {
      id: 'proj-2',
      title: 'Cura - Lifestyle E-commerce Platform',
      description: 'A premium e-commerce platform with stunning UI/UX, advanced filtering, wishlist functionality, and seamless checkout experience.',
      image: '/api/placeholder/400/300',
      category: 'e-commerce',
      techStack: ['React', 'Tailwind CSS', 'Redux', 'Stripe API', 'Firebase'],
      githubLink: 'https://github.com/aditya74841/Ecommerce_Frontend.github.io',
      liveDemoLink: 'https://p2.iamadityaranjan.com/',
      features: ['Product catalog', 'Shopping cart', 'Payment integration', 'Wishlist', 'Order tracking'],
      completedDate: 'February 2025',
      gradient: 'from-green-500 via-teal-500 to-blue-500'
    },
    {
      id: 'proj-3',
      title: 'Google Keep Clone Pro',
      description: 'An enhanced note-taking app with advanced features like collaborative editing, rich text formatting, and smart categorization.',
      image: '/api/placeholder/400/300',
      category: 'productivity',
      techStack: ['React', 'Firebase', 'Material-UI', 'Rich Text Editor'],
      githubLink: 'https://github.com/aditya74841/React_TODO_frontend',
      liveDemoLink: 'https://p3.iamadityaranjan.com/',
      features: ['Rich text editing', 'Collaborative notes', 'Smart search', 'Color coding', 'Export options'],
      completedDate: 'January 2025',
      gradient: 'from-yellow-500 via-orange-500 to-red-500'
    },
    {
      id: 'proj-4',
      title: 'Harmonic Music Portfolio',
      description: 'An immersive music portfolio with 3D visualizations, interactive audio player, and dynamic waveform displays.',
      image: '/api/placeholder/400/300',
      category: 'portfolio',
      techStack: ['React', 'Three.js', 'Web Audio API', 'GSAP', 'Tailwind'],
      githubLink: 'https://github.com/aditya74841/music_portfolio',
      liveDemoLink: 'https://p4.iamadityaranjan.com/',
      features: ['3D visualizations', 'Interactive audio player', 'Waveform display', 'Track analytics'],
      completedDate: 'December 2024',
      gradient: 'from-purple-500 via-pink-500 to-rose-500'
    },
    {
      id: 'proj-5',
      title: 'TaskMaster Pro',
      description: 'A comprehensive task management solution with team collaboration, time tracking, and advanced analytics.',
      image: '/api/placeholder/400/300',
      category: 'productivity',
      techStack: ['React', 'Node.js', 'JWT', 'MongoDB', 'Socket.io'],
      githubLink: 'https://github.com',
      liveDemoLink: 'https://p5.iamadityaranjan.com/login',
      features: ['Team collaboration', 'Time tracking', 'Analytics', 'Project templates', 'Mobile app'],
      completedDate: 'November 2024',
      gradient: 'from-indigo-500 via-blue-500 to-cyan-500'
    },
    {
      id: 'proj-6',
      title: 'NewsFlow - Inshorts Clone',
      description: 'A modern news aggregation platform with AI-powered summarization, personalized feeds, and offline reading.',
      image: '/api/placeholder/400/300',
      category: 'news',
      techStack: ['React', 'News API', 'PWA', 'IndexedDB', 'AI Integration'],
      githubLink: 'https://github.com/aditya74841/',
      features: ['AI summarization', 'Personalized feeds', 'Offline reading', 'Social sharing', 'Dark mode'],
      completedDate: 'October 2024',
      gradient: 'from-slate-500 via-gray-600 to-zinc-600'
    },
    {
      id: 'proj-7',
      title: 'WhatsApp Clone Plus',
      description: 'A feature-rich messaging app with end-to-end encryption, voice/video calls, and advanced group management.',
      image: '/api/placeholder/400/300',
      category: 'messaging',
      techStack: ['React', 'Socket.io', 'WebRTC', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/aditya74841/whatsapp-Clone',
      features: ['End-to-end encryption', 'Voice/video calls', 'Group management', 'File sharing', 'Status updates'],
      completedDate: 'September 2024',
      gradient: 'from-emerald-500 via-green-500 to-teal-500'
    },
    {
      id: 'proj-8',
      title: 'QuoteVerse API',
      description: 'A comprehensive quotes API with advanced filtering, user-generated content, and machine learning recommendations.',
      image: '/api/placeholder/400/300',
      category: 'api',
      techStack: ['Node.js', 'Express', 'MongoDB', 'Swagger', 'ML Integration'],
      githubLink: 'https://github.com/aditya74841/Quote-Backend',
      liveDemoLink: 'https://quote-backend-xqfm.onrender.com/api-docs/',
      apiDocsLink: 'https://quote-backend-xqfm.onrender.com/api-docs/',
      features: ['ML recommendations', 'User-generated content', 'Advanced filtering', 'Rate limiting', 'Caching'],
      completedDate: 'August 2024',
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: completedProjects.length, icon: '🚀' },
    { id: 'web-app', name: 'Web Apps', count: completedProjects.filter(p => p.category === 'web-app').length, icon: '💻' },
    { id: 'e-commerce', name: 'E-commerce', count: completedProjects.filter(p => p.category === 'e-commerce').length, icon: '🛒' },
    { id: 'productivity', name: 'Productivity', count: completedProjects.filter(p => p.category === 'productivity').length, icon: '📊' },
    { id: 'api', name: 'APIs', count: completedProjects.filter(p => p.category === 'api').length, icon: '🔗' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? completedProjects 
    : completedProjects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project, index }) => (
    <div 
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300`} />
      
      {/* Image section */}
      <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-4xl sm:text-6xl font-bold opacity-30 transition-opacity duration-300">
            {project.title.charAt(0)}
          </div>
        </div>
        
        {/* Floating badge */}
        <div className="absolute top-3 right-3 bg-white bg-opacity-20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
          {project.category}
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300" />
      </div>
      
      <div className="p-4 sm:p-6">
        {/* Title and date */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 transition-all duration-300">
            {project.title}
          </h3>
          <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap ml-2 bg-gray-100 px-2 py-1 rounded-full">
            {project.completedDate}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.techStack.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 rounded-full text-xs font-medium transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Features */}
        {project.features && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <Sparkles className="w-4 h-4 mr-1 text-yellow-500" />
              Key Features:
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {project.features.slice(0, 3).map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg transition-all duration-200 text-sm font-medium shadow-md"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg transition-all duration-200 text-sm font-medium shadow-md"
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
              className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg transition-all duration-200 text-sm font-medium shadow-md"
            >
              <Code className="w-4 h-4" />
              <span className="hidden sm:inline">API Docs</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const CurrentProjectCard = ({ project, index }) => (
    <div 
      className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-lg transition-all duration-300 ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Animated border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full bg-gradient-to-r ${
              project.priority === 'high' ? 'from-red-500 to-orange-500' :
              project.priority === 'medium' ? 'from-yellow-500 to-amber-500' :
              'from-green-500 to-emerald-500'
            } text-white`}>
              {project.icon}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 transition-all duration-300">
                {project.title}
              </h3>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'In Development' ? 'bg-yellow-100 text-yellow-800' :
            project.status === 'Planning' ? 'bg-blue-100 text-blue-800' :
            'bg-green-100 text-green-800'
          }`}>
            {project.status}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>
        
        {/* Progress section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              Progress
            </span>
            <span className="text-sm font-bold text-gray-800">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out shadow-sm"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
        
        {/* Tech stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.techStack.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="px-2 py-1 bg-white text-blue-800 rounded-full text-xs font-medium border border-blue-200 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Expected completion */}
        <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
          <Calendar className="w-4 h-4 mr-2 text-blue-500" />
          <span>Expected completion: <span className="font-semibold">{project.expectedCompletion}</span></span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Enhanced Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-12 sm:py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white opacity-10 rounded-full animate-pulse" />
          <div className="absolute top-1/2 -left-8 w-32 h-32 bg-white opacity-5 rounded-full animate-bounce" />
          <div className="absolute bottom-4 right-1/4 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Portfolio Showcase
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              My Creative Journey
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover a collection of innovative web applications, tools, and experiments crafted with passion and modern technologies
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Current Projects Section */}
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
            {currentProjects.map((project, index) => (
              <CurrentProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Explore by Category</h3>
            <p className="text-gray-600">Filter projects to find exactly what you're looking for</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`group relative px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  <span className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Completed Projects Section */}
        <div className="mb-12 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Completed Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of {filteredProjects.length} successful projects that demonstrate my skills and creativity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Project Statistics</h3>
            <p className="text-gray-600">A snapshot of my development journey and achievements</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{completedProjects.length}</div>
              <div className="text-gray-600 text-sm sm:text-base">Total Projects</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">{currentProjects.length}</div>
              <div className="text-gray-600 text-sm sm:text-base">In Progress</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                {[...new Set(completedProjects.flatMap(p => p.techStack))].length}
              </div>
              <div className="text-gray-600 text-sm sm:text-base">Technologies</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">
                {completedProjects.filter(p => p.liveDemoLink).length}
              </div>
              <div className="text-gray-600 text-sm sm:text-base">Live Demos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @media (max-width: 640px) {
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;