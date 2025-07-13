

// import React from "react";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaGithub,
//   FaLinkedin,
//   FaGlobe,
//   FaUser,
//   FaClipboard,
// } from "react-icons/fa";
// import CV from "../../assets/aditya_resume.pdf";
// import SEO from "../../SEO";
// import { toast } from "react-hot-toast";

// const Resume = () => {
//   return (
//     <>
//       <SEO
//         title="Aditya Ranjan | Resume"
//         description="View the resume of Aditya Ranjan, Full Stack Developer. Explore skills, work experience, and projects. Download CV or contact for job opportunities."
//         keywords="Aditya Ranjan, Resume, CV, Full Stack Developer, MERN Developer, React Developer, Node.js Developer"
//       />

//       <div className="bg-gradient-to-br from-gray-100 to-white text-gray-800 font-inter py-10 px-4">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//           <aside className="md:col-span-1 bg-white shadow-xl rounded-2xl p-6 border border-gray-200 md:sticky md:top-6 h-fit">
//             <div className="text-center">
//               <h1 className="text-4xl font-extrabold mb-1 text-gray-900">
//                 Aditya Ranjan
//               </h1>
//               <p className="text-sm text-gray-600">Full Stack Developer</p>
//             </div>
//             <div className="mt-6 space-y-4 text-sm">
//               <ContactItem icon={<FaPhoneAlt />} text="+91 74810 92465" />
//               <ContactItem
//                 icon={<FaEnvelope />}
//                 text="aditya@iamadityaranjan.com"
//                 href="mailto:iamadityaranjan.com"
//               />
//               <ContactItem
//                 icon={<FaLinkedin />}
//                 text="LinkedIn"
//                 href="https://www.linkedin.com/in/iamadityaranjan/"
//               />
//               <ContactItem
//                 icon={<FaGithub />}
//                 text="GitHub"
//                 href="https://github.com/aditya74841"
//               />
//               <ContactItem
//                 icon={<FaGlobe />}
//                 text="Portfolio"
//                 href="https://iamadityaranjan.com"
//               />
//               <ContactItem
//                 icon={<FaUser />}
//                 text="Download CV"
//                 href={CV}
//                 download
//               />
//               <div
//                 className="flex items-center cursor-pointer text-blue-600 hover:underline"
//                 onClick={() => {
//                   navigator.clipboard.writeText(window.location.href);
//                   toast && toast.success("Link copied!");
//                 }}
//               >
//                 <FaClipboard className="mr-3 text-indigo-500" /> Copy CV Link
//               </div>
//             </div>
//           </aside>

//           <main className="md:col-span-3 space-y-12">
//             <ResumeSection title="Professional Summary">
//               <p>
//                 Full Stack Developer with 2+ years of hands-on experience in building modern web applications. Proficient in React, Node.js, and scalable backend systems. Passionate about clean code, real-time applications, and problem-solving through technology.
//               </p>
//             </ResumeSection>

//             <ResumeSection title="Work Experience">
//               <ExperienceItem
//                 company="CodenCreative"
//                 role="Full Stack Developer"
//                 duration="Feb 2024 – Present"
//                 points={[
//                   "Led frontend development for research tools with interactive charting libraries.",
//                   "Boosted e-commerce site performance by 30% and user engagement by 20%.",
//                   "Built optimized reusable components and implemented lazy loading.",
//                 ]}
//               />
//               <ExperienceItem
//                 company="BlackWater Coffee Pvt. Ltd."
//                 role="Full Stack Developer"
//                 duration="Dec 2022 – Jan 2024"
//                 points={[
//                   "Developed a POS system cutting checkout time by 40%.",
//                   "Integrated inventory, kitchen, and finance workflows into a seamless dashboard.",
//                   "Created a responsive KDS with real-time data flow using Socket.io.",
//                 ]}
//               />
//             </ResumeSection>

//             <ResumeSection title="Projects">
//               <ul className="space-y-3 text-sm">
//                 <li>
//                   <strong>Audit Management System:</strong> Real-time auditing and assignment platform with media uploads, analytics, and microservices.
//                   <a href="https://auditpro-backend-woxv.onrender.com/api-docs/" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer"> Backend </a> |
//                   <a href="https://github.com/aditya74841/AuditPro_frontend" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer"> Frontend </a>
//                 </li>
//                 <li>
//                   <strong>Collaborative Sketchbook:</strong> A live drawing platform with user collaboration via Socket.io, Express, and React.
//                   <a href="https://www.sketchbook-eight.vercel.app/" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer"> Live Demo </a>
//                 </li>
//               </ul>
//             </ResumeSection>

//             <ResumeSection title="Technical Skills">
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
//                 <SkillItem title="Frontend" items={["React", "Redux", "Next.js", "TypeScript", "Tailwind CSS"]} />
//                 <SkillItem title="Backend" items={["Node.js", "Express.js"]} />
//                 <SkillItem title="Database" items={["MongoDB", "MySQL"]} />
//                 <SkillItem title="Tools" items={["Git", "Postman", "Cloudinary"]} />
//                 <SkillItem title="Realtime" items={["Socket.io"]} />
//               </div>
//             </ResumeSection>

//             <ResumeSection title="Education">
//               <ul className="space-y-3 text-sm">
//                 <li>
//                   <strong>B.Tech – Computer Science</strong>, ACET Amritsar · 2019–2023 · CGPA: 7.4
//                   <p className="text-sm text-gray-500">Key Subjects: Data Structures, Algorithms, Web Development, Databases</p>
//                 </li>
//                 <li>
//                   <strong>Senior Secondary (XII)</strong>, Deochand Mahavidyalaya · 2016–2018 · 70%
//                   <p className="text-sm text-gray-500">Major: Science (Mathematics)</p>
//                 </li>
//               </ul>
//             </ResumeSection>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// const ContactItem = ({ icon, text, href, download = false }) => (
//   <p className="flex items-center">
//     <span className="mr-3 text-indigo-500">{icon}</span>
//     {href ? (
//       <a
//         href={href}
//         download={download}
//         target="_blank"
//         rel="noreferrer"
//         className="text-blue-600 hover:underline"
//       >
//         {text}
//       </a>
//     ) : (
//       <span>{text}</span>
//     )}
//   </p>
// );

// const ResumeSection = ({ title, children }) => (
//   <section>
//     <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">
//       {title}
//     </h2>
//     {children}
//   </section>
// );

// const ExperienceItem = ({ company, role, duration, points }) => (
//   <div className="mb-6">
//     <h3 className="text-xl font-bold">{company}</h3>
//     <p className="text-sm text-gray-500 mb-2">
//       {role} · {duration}
//     </p>
//     <ul className="list-disc ml-6 space-y-2 text-sm">
//       {points.map((point, idx) => (
//         <li key={idx}>{point}</li>
//       ))}
//     </ul>
//   </div>
// );

// const SkillItem = ({ title, items }) => (
//   <div>
//     <strong>{title}:</strong> {items.join(", ")}
//   </div>
// );

// export default Resume;


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
                  location="Remote"
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
                  location="Hybrid"
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