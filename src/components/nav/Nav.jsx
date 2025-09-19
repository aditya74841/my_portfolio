import React, { useState, useEffect, useRef, useCallback } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsFolder2Open } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [isVisible, setIsVisible] = useState(false);
  // const [isScrolling, setIsScrolling] = useState(false);
  const observerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 200);
    // setIsScrolling(true);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      // setIsScrolling(false);
    }, 150);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observerCallback = (entries) => {
      let mostVisible = entries[0];
      entries.forEach((entry) => {
        if (entry.intersectionRatio > mostVisible.intersectionRatio) {
          mostVisible = entry;
        }
      });

      if (mostVisible && mostVisible.intersectionRatio > 0.1) {
        const sectionId = `#${mostVisible.target.id}`;
        setActiveNav(sectionId);
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['home', 'about', 'experience', 'services', 'portfolio', 'testimonials', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleNavClick = (href) => {
    setActiveNav(href);
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    {
      href: "#home",
      icon: AiOutlineHome,
      label: "Home",
      title: "Go to Home Section"
    },
    {
      href: "#about",
      icon: AiOutlineUser,
      label: "About",
      title: "Go to About Section"
    },
    {
      href: "#experience",
      icon: BiBook,
      label: "Experience",
      title: "Go to Experience Section"
    },
    {
      href: "#services",
      icon: RiServiceLine,
      label: "Skills",
      title: "Go to Skills Section"
    },
    {
      href: "#portfolio",
      icon: BsFolder2Open,
      label: "Portfolio",
      title: "Go to Portfolio Section"
    },
    {
      href: "#testimonials",
      icon: FaRegComments,
      label: "Reviews",
      title: "Go to Testimonials Section"
    },
    {
      href: "#contact",
      icon: BiMessageSquareDetail,
      label: "Contact",
      title: "Go to Contact Section"
    }
  ];

  return (
    <>
      {/* Desktop Vertical Navigation */}
      <nav className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 hidden lg:block ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}>
        <div className="flex flex-col gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-600/50 rounded-2xl p-4 shadow-lg">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                title={item.title}
                aria-label={item.label}
                className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 ${
                  activeNav === item.href
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-110'
                    : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }`}
              >
                <Icon className="text-lg" />
                
                {/* Tooltip */}
                <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                  {item.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 dark:border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </span>
                
                {/* Active indicator */}
                {activeNav === item.href && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-600/50 px-2 py-2">
          <div className="flex items-center justify-around max-w-lg mx-auto">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  title={item.title}
                  aria-label={item.label}
                  className={`group relative flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
                    activeNav === item.href
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-110'
                      : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="text-lg mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                  
                  {/* Active indicator */}
                  {activeNav === item.href && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-white rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
