import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaUser,
} from "react-icons/fa";
import CV from "../../assets/aditya_resume.pdf";
import SEO from "../../SEO";
const Resume = () => {
  return (
    <>
      <SEO
        title="Aditya Ranjan | Resume"
        description="View the resume of Aditya Ranjan, Full Stack Developer. Explore skills, work experience, and projects. Download CV or contact for job opportunities."
        keywords="Aditya Ranjan, Resume, CV, Full Stack Developer, MERN Developer, React Developer, Node.js Developer"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 font-inter">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
          {/* Sidebar */}
          <aside className="md:col-span-1 bg-white shadow-xl rounded-xl p-6 border border-gray-200 md:sticky md:top-6 h-fit">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-1 text-gray-900">
                Aditya Ranjan
              </h1>
              <p className="text-sm text-gray-600">Full Stack Developer</p>
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <p className="flex items-center">
                <FaPhoneAlt className="mr-3 text-indigo-500" /> +91 74810 92465
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-3 text-indigo-500" />{" "}
                <a
                  href="mailto:aditya74810@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  aditya74810@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <FaLinkedin className="mr-3 text-indigo-500" />
                <a
                  href="https://www.linkedin.com/in/iamadityaranjan/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
              <p className="flex items-center">
                <FaGithub className="mr-3 text-indigo-500" />
                <a
                  href="https://github.com/aditya74841"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p className="flex items-center">
                <FaGlobe className="mr-3 text-indigo-500" />
                <a
                  href="https://iamadityaranjan.com"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </p>
              <p className="flex items-center">
                <FaUser className="mr-3 text-indigo-500" /> {/* Changed icon */}
                <a href={CV} download className="text-blue-600 hover:underline">
                  Download CV
                </a>
              </p>
            </div>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-3 space-y-12">
            {/* Summary */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">
                Professional Summary
              </h2>
              <p className="text-base leading-relaxed">
                Full Stack Developer with 2+ years of hands-on experience in
                building modern web applications. Proficient in React, Node.js,
                and scalable backend systems. Passionate about clean code,
                real-time applications, and problem-solving through technology.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">
                Work Experience
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold">CodenCreative</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Full Stack Developer · Feb 2024 – Mar 2025
                </p>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  <li>
                    Led frontend development for research tools with interactive
                    charting libraries.
                  </li>
                  <li>
                    Boosted e-commerce site performance by 30% and user
                    engagement by 20%.
                  </li>
                  <li>
                    Built optimized reusable components and implemented lazy
                    loading.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  BlackWater Coffee Pvt. Ltd.
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  Full Stack Developer · Dec 2022 – Jan 2024
                </p>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  <li>Developed a POS system cutting checkout time by 40%.</li>
                  <li>
                    Integrated inventory, kitchen, and finance workflows into a
                    seamless dashboard.
                  </li>
                  <li>
                    Created a responsive KDS with real-time data flow using
                    Socket.io.
                  </li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">
                Projects
              </h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong>Audit Management System:</strong> Real-time auditing
                  and assignment platform with media uploads, analytics, and
                  microservices.{" "}
                  <a
                    href="https://github.com/aditya74841/AuditPro_backend"
                    className="text-blue-600 hover:underline"
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <strong>Collaborative Sketchbook:</strong> A live drawing
                  platform with user collaboration via Socket.io, Express, and
                  React.
                  <a
                    href="https://www.sketchbook-eight.vercel.app/"
                    className="text-blue-600 hover:underline"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </li>
                {/* <li>
                <strong>Special App:</strong> A full-stack custom app for niche
                product interaction.{" "}
                <a
                  href="https://www.aspecialapp.com/"
                  className="text-blue-600 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </li> */}
              </ul>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Frontend:</strong> React, Redux, Next.js, TypeScript,
                  Tailwind CSS
                </div>
                <div>
                  <strong>Backend:</strong> Node.js, Express.js
                </div>
                <div>
                  <strong>Database:</strong> MongoDB, MySQL
                </div>
                <div>
                  <strong>Tools:</strong> Git, Postman, Cloudinary
                </div>
                <div>
                  <strong>Realtime:</strong> Socket.io
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4 border-b pb-2">
                Education
              </h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong>B.Tech – Computer Science</strong>, ACET Amritsar ·
                  2019–2023 · CGPA: 7.4
                  <p className="text-sm text-gray-500">
                    Key Subjects: Data Structures, Algorithms, Web Development,
                    Databases
                  </p>
                </li>
                <li>
                  <strong>Senior Secondary (XII)</strong>, Deochand
                  Mahavidyalaya · 2016–2018 · 70%
                  <p className="text-sm text-gray-500">
                    Major: Science (Mathematics)
                  </p>
                </li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Resume;
