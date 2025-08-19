// import React, { useState, useEffect } from "react";
// import { 
//   FaEnvelope, 
//   FaPhoneAlt, 
//   FaGithub, 
//   FaLinkedin, 
//   FaGlobe, 
//   FaDownload, 
//   FaClipboard, 
//   FaExternalLinkAlt,
//   FaMapMarkerAlt,
//   FaCode,
//   FaRocket,
//   FaAward,
//   FaCalendarAlt
// } from "react-icons/fa";
// import { HiSparkles } from "react-icons/hi";
// import CV from "../../assets/aditya_resume.pdf";
// import SEO from "../../SEO";
// import { toast } from "react-hot-toast";

// export default function ResumeRedesign() {
//   const [isScrolled, setIsScrolled] = useState(false);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleCopyLink = () => {
//     if (navigator.clipboard) {
//       navigator.clipboard.writeText(window.location.href).then(() => {
//         toast.success("Link copied to clipboard! 🎉");
//       });
//     }
//   };

//   return (
//     <>
//       <SEO
//         title="Aditya Ranjan — Full Stack Developer | Resume"
//         description="Aditya Ranjan — Full Stack Developer. MERN stack, real-time apps, cloud deployments. Download CV or contact directly."
//         keywords="Aditya Ranjan, Full Stack Developer, MERN, Resume, CV"
//       />

//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//         {/* Background Pattern */}
//         <div className="fixed inset-0 opacity-30">
//           <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//           <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
//           <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
//         </div>

//         {/* Mobile Navigation Bar */}
//         <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:hidden ${
//           isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
//         }`}>
//           <div className="px-4 py-3">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
//                   AR
//                 </div>
//                 <div>
//                   <div className="font-bold text-gray-900">Aditya Ranjan</div>
//                   <div className="text-xs text-gray-600">Full Stack Developer</div>
//                 </div>
//               </div>
//               <div className="flex gap-2">
//                 <a href={CV} download className="p-2 rounded-lg bg-indigo-600 text-white">
//                   <FaDownload className="w-4 h-4" />
//                 </a>
//                 <a href="mailto:aditya@iamadityaranjan.com" className="p-2 rounded-lg bg-white border border-gray-200">
//                   <FaEnvelope className="w-4 h-4 text-gray-600" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-12">
//           <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
            
//             {/* Main Content */}
//             <main className="xl:col-span-8 space-y-6 lg:space-y-8 mt-20 lg:mt-0">
              
//               {/* Hero Section */}
//               <section className="relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 lg:p-10">
//                 <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full -translate-y-20 translate-x-20"></div>
                
//                 <div className="relative">
//                   <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
//                     <div className="flex flex-col sm:flex-row sm:items-start gap-6">
//                       <div className="relative group">
//                         <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
//                           AR
//                         </div>
//                         <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
//                           <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
//                         </div>
//                       </div>

//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-2">
//                           <h1 className="text-3xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 bg-clip-text text-transparent">
//                             Aditya Ranjan
//                           </h1>
//                           <HiSparkles className="text-yellow-500 text-2xl animate-spin" style={{animationDuration: '3s'}} />
//                         </div>
                        
//                         <div className="flex flex-wrap items-center gap-3 mb-4">
//                           <p className="text-lg font-bold text-indigo-600">Full Stack Developer</p>
//                           <span className="text-gray-400">•</span>
//                           <div className="flex items-center gap-1 text-sm text-gray-600">
//                             <FaMapMarkerAlt className="text-red-500" />
//                             <span>Available Globally</span>
//                           </div>
//                         </div>
                        
//                         <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl">
//                           I craft <span className="font-semibold text-indigo-600">production-grade web applications</span> that scale beautifully. 
//                           Passionate about clean architecture, measurable impact, and lightning-fast delivery. 
//                           <span className="inline-block ml-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
//                             🚀 Available for hire
//                           </span>
//                         </p>

//                         <div className="flex flex-wrap gap-3">
//                           <a 
//                             href={CV} 
//                             download 
//                             className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//                           >
//                             <FaDownload className="group-hover:animate-bounce" />
//                             Download Resume
//                           </a>

//                           <a 
//                             href="mailto:aditya@iamadityaranjan.com" 
//                             className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border-2 border-indigo-200 text-indigo-700 font-semibold hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300"
//                           >
//                             <FaEnvelope />
//                             Let's Talk
//                           </a>

//                           <button 
//                             onClick={handleCopyLink} 
//                             className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all duration-300"
//                           >
//                             <FaClipboard />
//                             Share
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Stats Cards */}
//                     <div className="grid grid-cols-3 gap-3 lg:gap-4">
//                       <StatCard 
//                         icon={<FaCode className="text-blue-600" />}
//                         value="2+" 
//                         label="Years Exp" 
//                         color="blue"
//                       />
//                       <StatCard 
//                         icon={<FaRocket className="text-purple-600" />}
//                         value="30%" 
//                         label="Performance" 
//                         sublabel="Improvement"
//                         color="purple"
//                       />
//                       <StatCard 
//                         icon={<FaAward className="text-green-600" />}
//                         value="15+" 
//                         label="Projects" 
//                         sublabel="Delivered"
//                         color="green"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* Tech Stack */}
//               <section className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-6 lg:p-8">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white">
//                     <FaCode />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">Tech Stack & Expertise</h2>
//                 </div>
                
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
//                   {[
//                     { name: "React", level: 95, color: "blue" },
//                     { name: "Node.js", level: 90, color: "green" },
//                     { name: "TypeScript", level: 88, color: "indigo" },
//                     { name: "MongoDB", level: 85, color: "emerald" },
//                     { name: "Next.js", level: 92, color: "purple" },
//                     { name: "Socket.io", level: 80, color: "yellow" },
//                     { name: "AWS", level: 75, color: "orange" },
//                     { name: "Docker", level: 70, color: "cyan" },
//                     { name: "GraphQL", level: 78, color: "pink" },
//                     { name: "Redis", level: 72, color: "red" },
//                   ].map((tech) => (
//                     <TechBadge key={tech.name} {...tech} />
//                   ))}
//                 </div>
//               </section>

//               {/* Experience */}
//               <section className="space-y-6">
//                 <SectionHeader 
//                   title="Professional Journey" 
//                   subtitle="Building impactful solutions"
//                   icon={<FaCalendarAlt className="text-indigo-600" />}
//                 />

//                 <div className="space-y-6">
//                   <ExperienceCard
//                     company="CodenCreative"
//                     role="Full Stack Developer"
//                     duration="Feb 2024 — Present"
//                     location="On-site • Chandigarh"
//                     type="current"
//                     bullets={[
//                       "🎯 Led frontend development for research applications, implementing interactive data visualizations that boosted user engagement by 25%",
//                       "⚡ Architected performance optimizations across e-commerce platforms — achieved 40% bundle size reduction and 30% faster load times",
//                       "🔧 Built comprehensive component library with TypeScript, enabling code reuse across 5+ applications and reducing development time by 50%",
//                       "📊 Implemented advanced code-splitting and lazy-loading strategies, improving Core Web Vitals scores across all projects"
//                     ]}
//                     achievements={["25% engagement ↗", "40% bundle size ↘", "50% dev time ↘"]}
//                   />

//                   <ExperienceCard
//                     company="BlackWater Coffee Pvt. Ltd."
//                     role="Full Stack Developer"
//                     duration="Dec 2022 — Jan 2024"
//                     location="On-site • Punjab"
//                     type="previous"
//                     bullets={[
//                       "🏪 Engineered enterprise POS & Kitchen Display Systems, reducing checkout processing time by 40% through optimized data workflows",
//                       "📦 Developed real-time inventory management system with live stock updates, improving inventory accuracy by 30%",
//                       "🔗 Built integrated dashboards connecting operations, finance, and inventory departments for seamless cross-functional collaboration",
//                       "💡 Implemented microservices architecture that scaled to handle 1000+ concurrent users during peak hours"
//                     ]}
//                     achievements={["40% faster checkout", "30% inventory accuracy ↗", "1000+ concurrent users"]}
//                   />
//                 </div>
//               </section>

//               {/* Projects Showcase */}
//               <section className="space-y-6">
//                 <SectionHeader 
//                   title="Featured Projects" 
//                   subtitle="Innovation in action"
//                   icon={<FaRocket className="text-purple-600" />}
//                 />

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   <ProjectCard
//                     title="AuditPro Management System"
//                     desc="Enterprise-grade audit platform featuring multimedia response handling, real-time collaboration, comprehensive analytics dashboard, and automated reporting workflows."
//                     tech={["Node.js", "Next.js", "MongoDB", "Socket.io", "Cloudinary", "Chart.js"]}
//                     links={[
//                       { label: "API Documentation", url: "https://auditpro-backend-woxv.onrender.com/api-docs/" },
//                       { label: "Frontend Repository", url: "https://github.com/aditya74841/AuditPro_frontend" }
//                     ]}
//                     featured={true}
//                     stats={["Real-time sync", "Multi-media support", "Analytics dashboard"]}
//                   />

//                   <ProjectCard
//                     title="CollaborativeCanvas"
//                     desc="Real-time collaborative drawing application with multi-user synchronization, advanced canvas tools, layer management, and seamless conflict resolution."
//                     tech={["React", "Socket.io", "Canvas API", "WebRTC"]}
//                     links={[
//                       { label: "Live Demo", url: "https://www.sketchbook-eight.vercel.app/" }
//                     ]}
//                     stats={["Multi-user sync", "Real-time drawing", "Conflict resolution"]}
//                   />

//                   <ProjectCard
//                     title="Portfolio Ecosystem"
//                     desc="Modern portfolio platform with interactive resume, project showcase, SEO optimizations, and recruiter-friendly design patterns."
//                     tech={["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"]}
//                     links={[
//                       { label: "Live Portfolio", url: "https://iamadityaranjan.com" }
//                     ]}
//                     stats={["SEO optimized", "Mobile-first", "Performance focused"]}
//                   />
//                 </div>
//               </section>

//               {/* Education */}
//               <section className="space-y-6">
//                 <SectionHeader 
//                   title="Education & Certification" 
//                   subtitle="Building strong foundations"
//                   icon={<FaAward className="text-green-600" />}
//                 />
                
//                 <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-6 lg:p-8">
//                   <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                     <div className="flex items-start gap-6">
//                       <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white shadow-lg">
//                         <FaAward className="w-8 h-8" />
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Technology</h3>
//                         <div className="text-indigo-600 font-semibold mb-1">Computer Science Engineering</div>
//                         <div className="text-gray-600 mb-3">Amritsar College of Engineering & Technology</div>
//                         <div className="flex flex-wrap gap-2">
//                           {["Data Structures", "Web Development", "Database Systems", "Software Engineering"].map((subject) => (
//                             <span key={subject} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
//                               {subject}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="text-right">
//                       <div className="text-2xl font-bold text-gray-900">7.4 CGPA</div>
//                       <div className="text-sm text-gray-600">2019 — 2023</div>
//                       <div className="mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
//                         Graduated
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//             </main>

//             {/* Sticky Sidebar */}
//             <aside className="xl:col-span-4 hidden lg:block">
//               <div className="sticky top-6 space-y-6">
                
//                 {/* Contact Card */}
//                 <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
//                   <div className="text-center mb-6">
//                     <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4">
//                       AR
//                     </div>
//                     <h3 className="font-bold text-xl text-gray-900">Aditya Ranjan</h3>
//                     <p className="text-indigo-600 font-semibold">Full Stack Developer</p>
//                     <div className="flex items-center justify-center gap-2 mt-2">
//                       <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                       <span className="text-sm text-green-600 font-medium">Available for opportunities</span>
//                     </div>
//                   </div>

//                   <div className="space-y-3 mb-6">
//                     <ContactRow 
//                       icon={<FaPhoneAlt className="text-blue-600" />} 
//                       label="+91 74810 92465" 
//                       action={() => window.location.href = "tel:+917481092465"} 
//                     />
//                     <ContactRow 
//                       icon={<FaEnvelope className="text-red-600" />} 
//                       label="aditya@iamadityaranjan.com" 
//                       action={() => window.location.href = "mailto:aditya@iamadityaranjan.com"} 
//                     />
//                     <ContactRow 
//                       icon={<FaLinkedin className="text-blue-700" />} 
//                       label="LinkedIn Profile" 
//                       href="https://www.linkedin.com/in/iamadityaranjan/" 
//                     />
//                     <ContactRow 
//                       icon={<FaGithub className="text-gray-800" />} 
//                       label="GitHub Portfolio" 
//                       href="https://github.com/aditya74841" 
//                     />
//                     <ContactRow 
//                       icon={<FaGlobe className="text-green-600" />} 
//                       label="Personal Website" 
//                       href="https://iamadityaranjan.com" 
//                     />
//                   </div>

//                   <div className="grid grid-cols-2 gap-3">
//                     <a 
//                       href={CV} 
//                       download 
//                       className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//                     >
//                       <FaDownload />
//                       Resume
//                     </a>
//                     <button 
//                       onClick={handleCopyLink} 
//                       className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-all duration-300"
//                     >
//                       <FaClipboard />
//                       Share
//                     </button>
//                   </div>
//                 </div>

//                 {/* Availability Status */}
//                 <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
//                   <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
//                     <HiSparkles className="text-yellow-500" />
//                     Open to Opportunities
//                   </h4>
//                   <div className="grid grid-cols-2 gap-3">
//                     {["Full-time", "Contract", "Remote", "Freelance"].map((type) => (
//                       <div key={type} className="text-center p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
//                         <div className="text-sm font-semibold text-gray-800">{type}</div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
//                     <div className="text-sm text-gray-700">
//                       <strong className="text-green-800">Response Time:</strong> Within 24 hours
//                     </div>
//                   </div>
//                 </div>

//                 {/* Quick Stats */}
//                 <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
//                   <h4 className="font-bold text-gray-900 mb-4">Quick Stats</h4>
//                   <div className="space-y-3">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Projects Completed</span>
//                       <span className="font-bold text-indigo-600">15+</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Happy Clients</span>
//                       <span className="font-bold text-green-600">10+</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Code Quality</span>
//                       <span className="font-bold text-purple-600">A+</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Response Rate</span>
//                       <span className="font-bold text-blue-600">98%</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         </div>

//         {/* Enhanced Mobile Bottom Bar */}
//         <div className="fixed bottom-0 left-0 right-0 lg:hidden z-50">
//           <div className="bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-2xl">
//             <div className="px-4 py-4">
//               <div className="flex items-center gap-3">
//                 <a 
//                   href={CV} 
//                   download 
//                   className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg"
//                 >
//                   <FaDownload />
//                   Download Resume
//                 </a>
//                 <a 
//                   href="mailto:aditya@iamadityaranjan.com" 
//                   className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white border-2 border-indigo-200 text-indigo-700 font-bold shadow-lg"
//                 >
//                   <FaEnvelope />
//                   Email
//                 </a>
//                 <button 
//                   onClick={handleCopyLink}
//                   className="flex items-center justify-center p-4 rounded-2xl bg-gray-100 text-gray-700 shadow-lg"
//                 >
//                   <FaClipboard />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// /* -------------------- Enhanced Components -------------------- */

// const StatCard = ({ icon, value, label, sublabel, color = "blue" }) => {
//   const colorClasses = {
//     blue: "from-blue-50 to-indigo-50 border-blue-100",
//     purple: "from-purple-50 to-pink-50 border-purple-100",
//     green: "from-green-50 to-emerald-50 border-green-100"
//   };

//   return (
//     <div className={`bg-gradient-to-br ${colorClasses[color]} border rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-lg`}>
//       <div className="flex justify-center mb-2">{icon}</div>
//       <div className="text-2xl font-black text-gray-900 mb-1">{value}</div>
//       <div className="text-xs font-semibold text-gray-600">{label}</div>
//       {sublabel && <div className="text-xs text-gray-500">{sublabel}</div>}
//     </div>
//   );
// };

// const TechBadge = ({ name, level, color }) => {
//   const colorClasses = {
//     blue: "from-blue-500 to-blue-600",
//     green: "from-green-500 to-green-600",
//     indigo: "from-indigo-500 to-indigo-600",
//     emerald: "from-emerald-500 to-emerald-600",
//     purple: "from-purple-500 to-purple-600",
//     yellow: "from-yellow-500 to-yellow-600",
//     orange: "from-orange-500 to-orange-600",
//     cyan: "from-cyan-500 to-cyan-600",
//     pink: "from-pink-500 to-pink-600",
//     red: "from-red-500 to-red-600"
//   };

//   return (
//     <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-white/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//       <div className="text-center">
//         <div className="text-sm font-bold text-gray-900 mb-2">{name}</div>
//         <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
//           <div 
//             className={`h-2 rounded-full bg-gradient-to-r ${colorClasses[color]} transition-all duration-1000`}
//             style={{ width: `${level}%` }}
//           ></div>
//         </div>
//         <div className="text-xs text-gray-600 font-semibold">{level}%</div>
//       </div>
//     </div>
//   );
// };

// const SectionHeader = ({ title, subtitle, icon }) => (
//   <div className="flex items-center justify-between mb-6">
//     <div className="flex items-center gap-4">
//       <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg">
//         {icon}
//       </div>
//       <div>
//         <h2 className="text-2xl lg:text-3xl font-black text-gray-900">{title}</h2>
//         {subtitle && <p className="text-gray-600 font-medium">{subtitle}</p>}
//       </div>
//     </div>
//   </div>
// );

// const ExperienceCard = ({ company, role, duration, location, type, bullets = [], achievements = [] }) => (
//   <article className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 group">
//     <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 opacity-20 ${
//       type === 'current' ? 'bg-gradient-to-br from-green-400 to-blue-500' : 'bg-gradient-to-br from-purple-400 to-pink-500'
//     }`}></div>
    
//     <div className="relative">
//       <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
//         <div className="flex-1">
//           <div className="flex items-start gap-4">
//             <div className={`p-3 rounded-xl text-white shadow-lg ${
//               type === 'current' ? 'bg-gradient-to-br from-green-500 to-blue-600' : 'bg-gradient-to-br from-purple-500 to-pink-600'
//             }`}>
//               <FaRocket />
//             </div>
//             <div>
//               <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">{company}</h3>
//               <div className="text-indigo-600 font-bold text-lg mb-2">{role}</div>
//               <div className="flex flex-wrap items-center gap-3 text-sm">
//                 <span className="flex items-center gap-1 text-gray-600">
//                   <FaCalendarAlt className="text-blue-500" />
//                   {duration}
//                 </span>
//                 <span className="text-gray-400">•</span>
//                 <span className="flex items-center gap-1 text-gray-600">
//                   <FaMapMarkerAlt className="text-red-500" />
//                   {location}
//                 </span>
//                 {type === 'current' && (
//                   <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
//                     Current Role
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {achievements.length > 0 && (
//           <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
//             {achievements.map((achievement, i) => (
//               <span key={i} className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full whitespace-nowrap">
//                 {achievement}
//               </span>
//             ))}
//           </div>
//         )}
//       </div>

//       <ul className="space-y-4">
//         {bullets.map((bullet, i) => (
//           <li key={i} className="flex items-start gap-4">
//             <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex-shrink-0"></div>
//             <span className="text-gray-700 leading-relaxed">{bullet}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </article>
// );

// const ProjectCard = ({ title, desc, tech = [], links = [], featured = false, stats = [] }) => (
//   <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden group hover:shadow-2xl transition-all duration-300 ${
//     featured ? 'ring-2 ring-indigo-200' : ''
//   }`}>
//     {featured && (
//       <div className="absolute top-4 right-4 z-10">
//         <div className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold rounded-full">
//           ⭐ Featured
//         </div>
//       </div>
//     )}
    
//     <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-110 transition-transform duration-500"></div>
    
//     <div className="relative p-6 lg:p-8">
//       <div className="flex items-start gap-4 mb-4">
//         <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg">
//           <FaCode />
//         </div>
//         <div className="flex-1">
//           <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
//           <p className="text-gray-700 leading-relaxed">{desc}</p>
//         </div>
//       </div>

//       {stats.length > 0 && (
//         <div className="flex flex-wrap gap-2 mb-4">
//           {stats.map((stat, i) => (
//             <span key={i} className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
//               {stat}
//             </span>
//           ))}
//         </div>
//       )}

//       <div className="flex flex-wrap gap-2 mb-6">
//         {tech.map((t, i) => (
//           <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-semibold rounded-lg">
//             {t}
//           </span>
//         ))}
//       </div>

//       <div className="flex flex-wrap gap-3">
//         {links.map((link, i) => (
//           <a 
//             key={i} 
//             href={link.url} 
//             target="_blank" 
//             rel="noreferrer" 
//             className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//           >
//             {link.label}
//             <FaExternalLinkAlt className="text-xs" />
//           </a>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// const ContactRow = ({ icon, label, href, action }) => (
//   <div className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
//     <div className="flex items-center gap-4">
//       <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-white transition-colors duration-300">
//         {icon}
//       </div>
//       {href ? (
//         <a 
//           href={href} 
//           target="_blank" 
//           rel="noreferrer" 
//           className="text-sm font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300"
//         >
//           {label}
//         </a>
//       ) : (
//         <button 
//           onClick={action} 
//           className="text-sm font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300 text-left"
//         >
//           {label}
//         </button>
//       )}
//     </div>
//     <FaExternalLinkAlt className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//   </div>
// );



import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaUser,
  FaClipboard,
  FaExternalLinkAlt,
  FaCode,
  FaTools,
} from "react-icons/fa";
import CV from "../../assets/aditya_resume.pdf";
import SEO from "../../SEO";
import { toast } from "react-hot-toast";

const Resume = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);
  return (
    <>
      <SEO
        title="Aditya Ranjan | Resume"
        description="View the resume of Aditya Ranjan, Full Stack Developer. Explore skills, work experience, and projects. Download CV or contact for job opportunities."
        keywords="Aditya Ranjan, Resume, CV, Full Stack Developer, MERN Developer, React Developer, Node.js Developer"
      />

      <div className="bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 font-inter py-10 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 bg-white shadow-2xl rounded-3xl p-8 border border-slate-200 lg:sticky lg:top-6 h-fit">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">AR</span>
              </div>
              <h1 className="text-3xl font-bold mb-2 text-gray-900">
                Aditya Ranjan
              </h1>
              <p className="text-indigo-600 font-medium text-lg">Full Stack Developer</p>
              <p className="text-sm text-gray-500 mt-1">2+ Years Experience</p>
            </div>
            
            <div className="space-y-4 text-sm">
              <ContactItem icon={<FaPhoneAlt />} text="+91 74810 92465" />
              <ContactItem
                icon={<FaEnvelope />}
                text="aditya@iamadityaranjan.com"
                href="mailto:aditya@iamadityaranjan.com"
              />
              <ContactItem
                icon={<FaLinkedin />}
                text="LinkedIn Profile"
                href="https://www.linkedin.com/in/iamadityaranjan/"
              />
              <ContactItem
                icon={<FaGithub />}
                text="GitHub Profile"
                href="https://github.com/aditya74841"
              />
              <ContactItem
                icon={<FaGlobe />}
                text="Portfolio Website"
                href="https://iamadityaranjan.com"
              />
              
              <div className="pt-4 border-t border-gray-200">
                <ContactItem
                  icon={<FaUser />}
                  text="Download Resume"
                  href={CV}
                  download
                />
                <div
                  className="flex items-center cursor-pointer text-indigo-600 hover:text-indigo-700 transition-colors mt-3 p-2 rounded-lg hover:bg-indigo-50"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast && toast.success("Link copied!");
                  }}
                >
                  <FaClipboard className="mr-3" /> Copy CV Link
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3 space-y-10">
            <ResumeSection title="Professional Summary" icon={<FaUser />}>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <p className="text-gray-700 leading-relaxed">
                  Passionate Full Stack Developer with 2+ years of hands-on experience building scalable web applications. 
                  Proven track record of improving system performance by 30% and reducing operational costs. 
                  Expertise in modern JavaScript frameworks, real-time applications, and cloud technologies. 
                  Strong problem-solving skills with a focus on clean, maintainable code and user-centric solutions.
                </p>
              </div>
            </ResumeSection>

            <ResumeSection title="Work Experience" icon={<FaCode />}>
              <div className="space-y-6">
                <ExperienceItem
                  company="CodenCreative"
                  role="Full Stack Developer"
                  duration="Feb 2024 – Present"
                  location="On-Site"
                  points={[
                    "Led frontend development for research applications with interactive data visualization, improving user satisfaction by 25%",
                    "Optimized e-commerce platform performance by 30% and boosted user engagement by 20% through code optimization",
                    "Built reusable React components and implemented lazy loading, reducing bundle size by 40%",
                    "Collaborated with cross-functional teams to deliver projects on time, exceeding client expectations"
                  ]}
                />
                <ExperienceItem
                  company="BlackWater Coffee Pvt. Ltd."
                  role="Full Stack Developer"
                  duration="Dec 2022 – Jan 2024"
                  location="On-Site"
                  points={[
                    "Engineered high-performance POS system, reducing checkout times by 40% and improving operational efficiency",
                    "Developed advanced inventory management module, reducing stock discrepancies by 30%",
                    "Built Kitchen Display System (KDS) with real-time data flow using Socket.io for seamless operations",
                    "Integrated multiple departments (inventory, kitchen, finance) into unified dashboard system"
                  ]}
                />
              </div>
            </ResumeSection>

            <ResumeSection title="Key Projects" icon={<FaTools />}>
              <div className="grid gap-6">
                <ProjectCard
                  title="Audit Management System"
                  description="Enterprise-grade audit management platform enabling companies to efficiently audit multiple store locations. Features standardized questionnaires, multimedia response collection, and real-time collaboration."
                  highlights={[
                    "Supports photo, video, file & text responses",
                    "Real-time auditing & assignment system",
                    "Scalable microservices architecture",
                    "Advanced analytics & reporting"
                  ]}
                  technologies={["Node.js", "Express.js", "MongoDB", "Next.js", "Socket.io", "Cloudinary", "JWT"]}
                  links={[
                    { text: "API Documentation", url: "https://auditpro-backend-woxv.onrender.com/api-docs/", type: "api" },
                    { text: "Frontend Code", url: "https://github.com/aditya74841/AuditPro_frontend", type: "github" }
                  ]}
                />
                
                <ProjectCard
                  title="Professional Portfolio Suite"
                  description="Comprehensive portfolio ecosystem showcasing technical capabilities with responsive design and modern UI. Includes project showcase, interactive resume, and professional presentation."
                  highlights={[
                    "Fully responsive design",
                    "Interactive resume/CV platform",
                    "Project showcase with live demos",
                    "SEO optimized for recruiters"
                  ]}
                  technologies={["React.js", "Next.js", "Tailwind CSS", "Vite", "EmailJS", "Netlify"]}
                  links={[
                    { text: "Project Showcase", url: "https://iamadityaranjan.com/projects", type: "demo" },
                    { text: "Online Resume", url: "https://iamadityaranjan.com/cv", type: "demo" }
                  ]}
                />
                
                <ProjectCard
                  title="Collaborative Sketchbook"
                  description="Real-time collaborative drawing platform with multi-user support. Features live canvas sharing, drawing tools, and seamless user experience."
                  highlights={[
                    "Real-time collaboration",
                    "Live drawing synchronization",
                    "Multi-user support",
                    "Responsive canvas interface"
                  ]}
                  technologies={["React.js", "Socket.io", "Express.js", "Node.js", "Canvas API"]}
                  links={[
                    { text: "Live Demo", url: "https://www.sketchbook-eight.vercel.app/", type: "demo" }
                  ]}
                />
              </div>
            </ResumeSection>

            <ResumeSection title="Technical Skills" icon={<FaTools />}>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <SkillCategory title="Frontend" items={["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "HTML5/CSS3"]} />
                  <SkillCategory title="Backend" items={["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Microservices"]} />
                  <SkillCategory title="Database" items={["MongoDB", "MySQL", "Database Design", "Query Optimization"]} />
                  <SkillCategory title="DevOps & Tools" items={["Git", "GitHub", "Postman", "Netlify", "Vercel"]} />
                  <SkillCategory title="Real-time" items={["Socket.io", "WebSockets", "Live Collaboration"]} />
                  <SkillCategory title="Cloud & Storage" items={["Cloudinary", "File Upload", "Media Management"]} />
                </div>
              </div>
            </ResumeSection>

            <ResumeSection title="Education" icon={<FaUser />}>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="space-y-6">
                  <EducationItem
                    degree="Bachelor of Technology"
                    field="Computer Science"
                    institution="Amritsar College of Engineering & Technology"
                    duration="2019 – 2023"
                    cgpa="7.4"
                    subjects={["Data Structures & Algorithms", "Web Development", "Database Systems", "Software Engineering"]}
                  />
                  <EducationItem
                    degree="Senior Secondary (XII)"
                    field="Science (Mathematics)"
                    institution="Deochand Mahavidyalaya"
                    duration="2016 – 2018"
                    percentage="70%"
                  />
                </div>
              </div>
            </ResumeSection>
          </main>
        </div>
      </div>
    </>
  );
};

const ContactItem = ({ icon, text, href, download = false }) => (
  <div className="flex items-center p-2 rounded-lg hover:bg-slate-50 transition-colors">
    <span className="mr-3 text-indigo-500 text-lg">{icon}</span>
    {href ? (
      <a
        href={href}
        download={download}
        target="_blank"
        rel="noreferrer"
        className="text-gray-700 hover:text-indigo-600 transition-colors text-sm font-medium"
      >
        {text}
      </a>
    ) : (
      <span className="text-gray-700 text-sm">{text}</span>
    )}
  </div>
);

const ResumeSection = ({ title, icon, children }) => (
  <section>
    <div className="flex items-center mb-6">
      <span className="text-indigo-500 text-xl mr-3">{icon}</span>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    {children}
  </section>
);

const ExperienceItem = ({ company, role, duration, location, points }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{company}</h3>
        <p className="text-indigo-600 font-medium">{role}</p>
      </div>
      <div className="text-right text-sm text-gray-500">
        <p>{duration}</p>
        <p>{location}</p>
      </div>
    </div>
    <ul className="space-y-2">
      {points.map((point, idx) => (
        <li key={idx} className="flex items-start">
          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ title, description, highlights, technologies, links }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
    
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {highlights.map((highlight, idx) => (
          <div key={idx} className="flex items-center text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {highlight}
          </div>
        ))}
      </div>
    </div>
    
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span key={idx} className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
    
    <div className="flex flex-wrap gap-3 pt-2">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          {link.text}
          <FaExternalLinkAlt className="ml-1 text-xs" />
        </a>
      ))}
    </div>
  </div>
);

const SkillCategory = ({ title, items }) => (
  <div>
    <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center">
          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
          <span className="text-sm text-gray-700">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const EducationItem = ({ degree, field, institution, duration, cgpa, percentage, subjects }) => (
  <div>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
      <div>
        <h4 className="font-bold text-gray-900">{degree}</h4>
        <p className="text-indigo-600 font-medium">{field}</p>
        <p className="text-gray-600 text-sm">{institution}</p>
      </div>
      <div className="text-right text-sm text-gray-500">
        <p>{duration}</p>
        {cgpa && <p>CGPA: {cgpa}</p>}
        {percentage && <p>{percentage}</p>}
      </div>
    </div>
    {subjects && (
      <div className="mt-2">
        <p className="text-sm text-gray-600">
          <strong>Key Subjects:</strong> {subjects.join(", ")}
        </p>
      </div>
    )}
  </div>
);

export default Resume;