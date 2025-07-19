// import React from "react";
// import "./nav.css";

// import { AiOutlineHome } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
// import { BiBook } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { useState } from "react";

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState("#home");
//   return (
//     <nav>
//       <a
//         href="#home"
//         title="Go to Home Section"
//         aria-label="Home"
//         onClick={() => setActiveNav("#home")}
//         className={activeNav === "#home" ? "active" : ""}
//       >
//         <AiOutlineHome />
//       </a>
//       <a
//         href="#about"
//         title="Go to About Section"
//         aria-label="About"
//         onClick={() => setActiveNav("#about")}
//         className={activeNav === "#about" ? "active" : ""}
//       >
//         <AiOutlineUser />
//       </a>
//       <a
//         href="#experience"
//         title="Go to Experience Section"
//         aria-label="Experience"
//         onClick={() => setActiveNav("#experience")}
//         className={activeNav === "#experience" ? "active" : ""}
//       >
//         <BiBook />
//       </a>
//       <a
//         href="#services"
//         title="Go to Services Section"
//         aria-label="Services"
//         onClick={() => setActiveNav("#service")}
//         className={activeNav === "#services" ? "active" : ""}
//       >
//         <RiServiceLine />
//       </a>
//       <a
//         href="#contact"
//         title="Go to Contact Section"
//         aria-label="Contact"
//         onClick={() => setActiveNav("#contact")}
//         className={activeNav === "#contact" ? "active" : ""}
//       >
//         <BiMessageSquareDetail />
//       </a>
//     </nav>
//   );
// };

// export default Nav;



// import React, { useState, useEffect } from "react";
// import { AiOutlineHome } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
// import { BiBook } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
// import { BiMessageSquareDetail } from "react-icons/bi";

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState("#home");
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Navigation items array for easier management
//   const navItems = [
//     {
//       href: "#home",
//       icon: AiOutlineHome,
//       label: "Home",
//       title: "Go to Home Section"
//     },
//     {
//       href: "#about",
//       icon: AiOutlineUser,
//       label: "About",
//       title: "Go to About Section"
//     },
//     {
//       href: "#experience",
//       icon: BiBook,
//       label: "Experience",
//       title: "Go to Experience Section"
//     },
//     {
//       href: "#services",
//       icon: RiServiceLine,
//       label: "Services",
//       title: "Go to Services Section"
//     },
//     {
//       href: "#contact",
//       icon: BiMessageSquareDetail,
//       label: "Contact",
//       title: "Go to Contact Section"
//     }
//   ];

//   return (
//     <>
//       {/* Desktop Navigation */}
//       <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 hidden md:block ${
//         isScrolled ? 'top-4' : 'top-6'
//       }`}>
//         <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
//           {navItems.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <a
//                 key={index}
//                 href={item.href}
//                 title={item.title}
//                 aria-label={item.label}
//                 onClick={() => setActiveNav(item.href)}
//                 className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${
//                   activeNav === item.href
//                     ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-110'
//                     : 'text-white/70 hover:text-white hover:bg-white/10'
//                 }`}
//               >
//                 <Icon className="text-xl" />
                
//                 {/* Tooltip */}
//                 <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
//                   {item.label}
//                 </span>
                
//                 {/* Active indicator */}
//                 {activeNav === item.href && (
//                   <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
//                 )}
//               </a>
//             );
//           })}
//         </div>
//       </nav>

//       {/* Mobile Navigation */}
//       <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
//         <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-2 shadow-lg">
//           {navItems.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <a
//                 key={index}
//                 href={item.href}
//                 title={item.title}
//                 aria-label={item.label}
//                 onClick={() => setActiveNav(item.href)}
//                 className={`group relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
//                   activeNav === item.href
//                     ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-110'
//                     : 'text-white/70 hover:text-white hover:bg-white/10'
//                 }`}
//               >
//                 <Icon className="text-lg" />
//                 <span className="text-xs mt-1 opacity-80">{item.label}</span>
                
//                 {/* Active indicator */}
//                 {activeNav === item.href && (
//                   <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
//                 )}
//               </a>
//             );
//           })}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Nav;


// import React, { useState, useEffect, useRef } from "react";
// import { AiOutlineHome } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
// import { BiBook } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
// import { BiMessageSquareDetail } from "react-icons/bi";

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState("#home");
//   const [isVisible, setIsVisible] = useState(false);
//   const observerRef = useRef(null);
//   const sectionsRef = useRef({});

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 200);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     // Create intersection observer
//     const observerOptions = {
//       root: null,
//       rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle 50% of viewport
//       threshold: 0
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const sectionId = `#${entry.target.id}`;
//           setActiveNav(sectionId);
//         }
//       });
//     };

//     observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

//     // Observe all sections
//     const sections = ['home', 'about', 'experience', 'services', 'portfolio', 'testimonials', 'contact'];
//     sections.forEach((sectionId) => {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         sectionsRef.current[sectionId] = element;
//         observerRef.current.observe(element);
//       }
//     });

//     return () => {
//       if (observerRef.current) {
//         observerRef.current.disconnect();
//       }
//     };
//   }, []);

//   const handleNavClick = (href) => {
//     setActiveNav(href);
    
//     // Smooth scroll to section
//     const targetId = href.substring(1); // Remove # from href
//     const targetElement = document.getElementById(targetId);
    
//     if (targetElement) {
//       targetElement.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     }
//   };

//   const navItems = [
//     {
//       href: "#home",
//       icon: AiOutlineHome,
//       label: "Home",
//       title: "Go to Home Section"
//     },
//     {
//       href: "#about",
//       icon: AiOutlineUser,
//       label: "About",
//       title: "Go to About Section"
//     },
//     {
//       href: "#experience",
//       icon: BiBook,
//       label: "Experience",
//       title: "Go to Experience Section"
//     },
//     {
//       href: "#services",
//       icon: RiServiceLine,
//       label: "Skills",
//       title: "Go to Skills Section"
//     },
//     {
//       href: "#contact",
//       icon: BiMessageSquareDetail,
//       label: "Contact",
//       title: "Go to Contact Section"
//     }
//   ];

//   return (
//     <>
//       {/* Desktop Vertical Navigation */}
//       <nav className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 hidden lg:block ${
//         isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
//       }`}>
//         <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg">
//           {navItems.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <button
//                 key={index}
//                 onClick={() => handleNavClick(item.href)}
//                 title={item.title}
//                 aria-label={item.label}
//                 className={`group relative flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 hover:scale-110 ${
//                   activeNav === item.href
//                     ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-110'
//                     : 'text-white/70 hover:text-white hover:bg-white/10'
//                 }`}
//               >
//                 <Icon className="text-xl" />
                
//                 {/* Tooltip */}
//                 <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
//                   {item.label}
//                   <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
//                 </span>
                
//                 {/* Active indicator */}
//                 {activeNav === item.href && (
//                   <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-full"></div>
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </nav>

//       {/* Mobile Bottom Navigation */}
//       <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
//         <div className="bg-white/10 backdrop-blur-md border-t border-white/20 px-4 py-3">
//           <div className="flex items-center justify-around max-w-md mx-auto">
//             {navItems.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <button
//                   key={index}
//                   onClick={() => handleNavClick(item.href)}
//                   title={item.title}
//                   aria-label={item.label}
//                   className={`group relative flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 ${
//                     activeNav === item.href
//                       ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-110'
//                       : 'text-white/70 hover:text-white hover:bg-white/10'
//                   }`}
//                 >
//                   <Icon className="text-xl mb-1" />
//                   <span className="text-xs font-medium">{item.label}</span>
                  
//                   {/* Active indicator */}
//                   {activeNav === item.href && (
//                     <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-full"></div>
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Nav;


import React, { useState, useEffect, useRef, useCallback } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsFolder2Open } from "react-icons/bs"; // ✅ Correct icon from Bootstrap Icons
import { FaRegComments } from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [isVisible, setIsVisible] = useState(false);
  // eslint-disable-next-line
  const [ isScrolling,setIsScrolling] = useState(false);
  const observerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 200);
    setIsScrolling(true);

    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Set scrolling to false after scroll ends
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
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
      rootMargin: '-20% 0px -20% 0px', // More sensitive detection
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observerCallback = (entries) => {
      // Find the section with the highest intersection ratio
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

    // Observe all sections
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
      // Calculate offset for better positioning
      const offset = 80; // Adjust this value based on your needs
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
      icon: BsFolder2Open, // ✅ Corrected icon
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
        <div className="flex flex-col gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg">
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
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="text-lg" />
                
                {/* Tooltip */}
                <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                  {item.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </span>
                
                {/* Active indicator */}
                {activeNav === item.href && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-white rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-white/10 backdrop-blur-md border-t border-white/20 px-2 py-2">
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
                      : 'text-white/70 hover:text-white hover:bg-white/10'
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
