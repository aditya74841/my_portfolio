// import React from "react";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaGithub,
//   FaLinkedin,
//   FaGlobe,
//   FaUser,
// } from "react-icons/fa";
// import CV from "../../assets/aditya_resume.pdf";
// import SEO from "../../SEO";
// import { FaClipboard } from "react-icons/fa"; // Add this with your other imports
// import { toast } from "react-hot-toast"; // Optional, if you're using toast for feedback
// // import ME from '../../assets/me.jpg';

// const Resume = () => {
//   return (
//     <>
//       <SEO
//         title="Aditya Ranjan | Resume"
//         description="View the resume of Aditya Ranjan, Full Stack Developer. Explore skills, work experience, and projects. Download CV or contact for job opportunities."
//         keywords="Aditya Ranjan, Resume, CV, Full Stack Developer, MERN Developer, React Developer, Node.js Developer"
//       />

//       {/* <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 font-inter"> */}
//       <div className=" bg-gray-200 text-gray-800 font-inter py-4 px-4">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-6 ">
//           <aside className="md:col-span-1 bg-white shadow-xl rounded-xl p-6 border border-gray-200 md:sticky md:top-6 h-fit">
//             <div className="text-center">
//               <h1 className="text-4xl font-bold mb-1 text-gray-900 ">
//                 Aditya Ranjan
//               </h1>
//               <p className="text-sm text-gray-600">Full Stack Developer</p>
//             </div>
//             <div className="mt-6 space-y-4 text-sm">
//               <p className="flex items-center">
//                 <FaPhoneAlt className="mr-3 text-indigo-500" /> +91 74810 92465
//               </p>
//               <p className="flex items-center">
//                 <FaEnvelope className="mr-3 text-indigo-500" />{" "}
//                 <a
//                   href="mailto:aditya74810@gmail.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   aditya74810@gmail.com
//                 </a>
//               </p>
//               <p className="flex items-center">
//                 <FaLinkedin className="mr-3 text-indigo-500" />
//                 <a
//                   href="https://www.linkedin.com/in/iamadityaranjan/"
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   LinkedIn
//                 </a>
//               </p>
//               <p className="flex items-center">
//                 <FaGithub className="mr-3 text-indigo-500" />
//                 <a
//                   href="https://github.com/aditya74841"
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   GitHub
//                 </a>
//               </p>
//               <p className="flex items-center">
//                 <FaGlobe className="mr-3 text-indigo-500" />
//                 <a
//                   href="https://iamadityaranjan.com"
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Portfolio
//                 </a>
//               </p>
//               <p className="flex items-center">
//                 <FaUser className="mr-3 text-indigo-500" />
//                 <a href={CV} download className="text-blue-600 hover:underline">
//                   Download CV
//                 </a>
//               </p>
//               <p
//                 className="flex items-center cursor-pointer"
//                 onClick={() => {
//                   navigator.clipboard.writeText(window.location.href);
//                   toast && toast.success("Link copied!");
//                 }}
//               >
//                 <FaClipboard className="mr-3 text-indigo-500" />
//                 <span className="text-blue-600 hover:underline">
//                   Copy CV Link
//                 </span>
//               </p>
//             </div>
//           </aside>

//           {/* Main Content */}
//           <main className="md:col-span-3 space-y-12">
//             {/* Summary */}
//             <section>
//               <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">
//                 Professional Summary
//               </h2>
//               <p className="text-base leading-relaxed">
//                 Full Stack Developer with 2+ years of hands-on experience in
//                 building modern web applications. Proficient in React, Node.js,
//                 and scalable backend systems. Passionate about clean code,
//                 real-time applications, and problem-solving through technology.
//               </p>
//             </section>

//             {/* Experience */}
//             <section>
//               <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">
//                 Work Experience
//               </h2>

//               <div className="mb-6">
//                 <h3 className="text-xl font-bold">CodenCreative</h3>
//                 <p className="text-sm text-gray-500 mb-2">
//                   Full Stack Developer · Feb 2024 – Present
//                 </p>
//                 <ul className="list-disc ml-6 space-y-2 text-sm">
//                   <li>
//                     Led frontend development for research tools with interactive
//                     charting libraries.
//                   </li>
//                   <li>
//                     Boosted e-commerce site performance by 30% and user
//                     engagement by 20%.
//                   </li>
//                   <li>
//                     Built optimized reusable components and implemented lazy
//                     loading.
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-xl font-bold">
//                   BlackWater Coffee Pvt. Ltd.
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-2">
//                   Full Stack Developer · Dec 2022 – Jan 2024
//                 </p>
//                 <ul className="list-disc ml-6 space-y-2 text-sm">
//                   <li>Developed a POS system cutting checkout time by 40%.</li>
//                   <li>
//                     Integrated inventory, kitchen, and finance workflows into a
//                     seamless dashboard.
//                   </li>
//                   <li>
//                     Created a responsive KDS with real-time data flow using
//                     Socket.io.
//                   </li>
//                 </ul>
//               </div>
//             </section>

//             {/* Projects */}
//             <section>
//               <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">
//                 Projects
//               </h2>
//               <ul className="space-y-3 text-sm">
//                 <li>
//                   <strong>Audit Management System:</strong> Real-time auditing
//                   and assignment platform with media uploads, analytics, and
//                   microservices.{" "}
//                   <a
//                     href="https://auditpro-backend-woxv.onrender.com/api-docs/"
//                     className="text-blue-600 hover:underline"
//                     rel="noreferrer"
//                     target="_blank"
//                   >
//                     Backend
//                   </a>
//                   {" | "}
//                   <a
//                     href="https://github.com/aditya74841/AuditPro_frontend"
//                     className="text-blue-600 hover:underline"
//                     rel="noreferrer"
//                     target="_blank"
//                   >
//                     Frontend
//                   </a>
//                 </li>
//                 <li>
//                   <strong>Collaborative Sketchbook:</strong> A live drawing
//                   platform with user collaboration via Socket.io, Express, and
//                   React.
//                   <a
//                     href="https://www.sketchbook-eight.vercel.app/"
//                     className="text-blue-600 hover:underline"
//                     rel="noreferrer"
//                     target="_blank"
//                   >
//                     Live Demo
//                   </a>
//                 </li>
//                 {/* <li>
//                 <strong>Special App:</strong> A full-stack custom app for niche
//                 product interaction.{" "}
//                 <a
//                   href="https://www.aspecialapp.com/"
//                   className="text-blue-600 hover:underline"
//                   rel="noreferrer"
//                   target="_blank"
//                 >
//                   Live Demo
//                 </a>
//               </li> */}
//               </ul>
//             </section>

//             {/* Skills */}
//             <section>
//               <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">
//                 Technical Skills
//               </h2>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
//                 <div>
//                   <strong>Frontend:</strong> React, Redux, Next.js, TypeScript,
//                   Tailwind CSS
//                 </div>
//                 <div>
//                   <strong>Backend:</strong> Node.js, Express.js
//                 </div>
//                 <div>
//                   <strong>Database:</strong> MongoDB, MySQL
//                 </div>
//                 <div>
//                   <strong>Tools:</strong> Git, Postman, Cloudinary
//                 </div>
//                 <div>
//                   <strong>Realtime:</strong> Socket.io
//                 </div>
//               </div>
//             </section>

//             {/* Education */}
//             <section>
//               <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">
//                 Education
//               </h2>
//               <ul className="space-y-3 text-sm">
//                 <li>
//                   <strong>B.Tech – Computer Science</strong>, ACET Amritsar ·
//                   2019–2023 · CGPA: 7.4
//                   <p className="text-sm text-gray-500">
//                     Key Subjects: Data Structures, Algorithms, Web Development,
//                     Databases
//                   </p>
//                 </li>
//                 <li>
//                   <strong>Senior Secondary (XII)</strong>, Deochand
//                   Mahavidyalaya · 2016–2018 · 70%
//                   <p className="text-sm text-gray-500">
//                     Major: Science (Mathematics)
//                   </p>
//                 </li>
//               </ul>
//             </section>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

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

      <div className="bg-gradient-to-br from-gray-100 to-white text-gray-800 font-inter py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1 bg-white shadow-xl rounded-2xl p-6 border border-gray-200 md:sticky md:top-6 h-fit">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold mb-1 text-gray-900">
                Aditya Ranjan
              </h1>
              <p className="text-sm text-gray-600">Full Stack Developer</p>
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <ContactItem icon={<FaPhoneAlt />} text="+91 74810 92465" />
              <ContactItem
                icon={<FaEnvelope />}
                text="aditya@iamadityaranjan.com"
                href="mailto:iamadityaranjan.com"
              />
              <ContactItem
                icon={<FaLinkedin />}
                text="LinkedIn"
                href="https://www.linkedin.com/in/iamadityaranjan/"
              />
              <ContactItem
                icon={<FaGithub />}
                text="GitHub"
                href="https://github.com/aditya74841"
              />
              <ContactItem
                icon={<FaGlobe />}
                text="Portfolio"
                href="https://iamadityaranjan.com"
              />
              <ContactItem
                icon={<FaUser />}
                text="Download CV"
                href={CV}
                download
              />
              <div
                className="flex items-center cursor-pointer text-blue-600 hover:underline"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast && toast.success("Link copied!");
                }}
              >
                <FaClipboard className="mr-3 text-indigo-500" /> Copy CV Link
              </div>
            </div>
          </aside>

          <main className="md:col-span-3 space-y-12">
            <ResumeSection title="Professional Summary">
              <p>
                Full Stack Developer with 2+ years of hands-on experience in building modern web applications. Proficient in React, Node.js, and scalable backend systems. Passionate about clean code, real-time applications, and problem-solving through technology.
              </p>
            </ResumeSection>

            <ResumeSection title="Work Experience">
              <ExperienceItem
                company="CodenCreative"
                role="Full Stack Developer"
                duration="Feb 2024 – Present"
                points={[
                  "Led frontend development for research tools with interactive charting libraries.",
                  "Boosted e-commerce site performance by 30% and user engagement by 20%.",
                  "Built optimized reusable components and implemented lazy loading.",
                ]}
              />
              <ExperienceItem
                company="BlackWater Coffee Pvt. Ltd."
                role="Full Stack Developer"
                duration="Dec 2022 – Jan 2024"
                points={[
                  "Developed a POS system cutting checkout time by 40%.",
                  "Integrated inventory, kitchen, and finance workflows into a seamless dashboard.",
                  "Created a responsive KDS with real-time data flow using Socket.io.",
                ]}
              />
            </ResumeSection>

            <ResumeSection title="Projects">
              <ul className="space-y-3 text-sm">
                <li>
                  <strong>Audit Management System:</strong> Real-time auditing and assignment platform with media uploads, analytics, and microservices.
                  <a href="https://auditpro-backend-woxv.onrender.com/api-docs/" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer"> Backend </a> |
                  <a href="https://github.com/aditya74841/AuditPro_frontend" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer"> Frontend </a>
                </li>
                <li>
                  <strong>Collaborative Sketchbook:</strong> A live drawing platform with user collaboration via Socket.io, Express, and React.
                  <a href="https://www.sketchbook-eight.vercel.app/" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer"> Live Demo </a>
                </li>
              </ul>
            </ResumeSection>

            <ResumeSection title="Technical Skills">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <SkillItem title="Frontend" items={["React", "Redux", "Next.js", "TypeScript", "Tailwind CSS"]} />
                <SkillItem title="Backend" items={["Node.js", "Express.js"]} />
                <SkillItem title="Database" items={["MongoDB", "MySQL"]} />
                <SkillItem title="Tools" items={["Git", "Postman", "Cloudinary"]} />
                <SkillItem title="Realtime" items={["Socket.io"]} />
              </div>
            </ResumeSection>

            <ResumeSection title="Education">
              <ul className="space-y-3 text-sm">
                <li>
                  <strong>B.Tech – Computer Science</strong>, ACET Amritsar · 2019–2023 · CGPA: 7.4
                  <p className="text-sm text-gray-500">Key Subjects: Data Structures, Algorithms, Web Development, Databases</p>
                </li>
                <li>
                  <strong>Senior Secondary (XII)</strong>, Deochand Mahavidyalaya · 2016–2018 · 70%
                  <p className="text-sm text-gray-500">Major: Science (Mathematics)</p>
                </li>
              </ul>
            </ResumeSection>
          </main>
        </div>
      </div>
    </>
  );
};

const ContactItem = ({ icon, text, href, download = false }) => (
  <p className="flex items-center">
    <span className="mr-3 text-indigo-500">{icon}</span>
    {href ? (
      <a
        href={href}
        download={download}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline"
      >
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </p>
);

const ResumeSection = ({ title, children }) => (
  <section>
    <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">
      {title}
    </h2>
    {children}
  </section>
);

const ExperienceItem = ({ company, role, duration, points }) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold">{company}</h3>
    <p className="text-sm text-gray-500 mb-2">
      {role} · {duration}
    </p>
    <ul className="list-disc ml-6 space-y-2 text-sm">
      {points.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </div>
);

const SkillItem = ({ title, items }) => (
  <div>
    <strong>{title}:</strong> {items.join(", ")}
  </div>
);

export default Resume;
