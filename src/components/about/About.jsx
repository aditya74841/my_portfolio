// import React, { useEffect, useState } from "react";
// import "./about.css";
// import CV from "../../assets/aditya_resume.pdf";

// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";
// import SEO from "../../SEO";
// import { Link } from "react-router-dom";

// const About = () => {
//   const [githubStats, setGithubStats] = useState({
//     followers: 0,
//     public_repos: 0,
//     stargazers: 0,
//   });
//   const [error, setError] = useState(null);
//   const [darkMode] = useState(true);

//   useEffect(() => {
//     const fetchGithubStats = async () => {
//       const token = process.env.REACT_APP_GITHUB_TOKEN;
//       const headers = token ? { Authorization: `Bearer ${token}` } : {};

//       try {
//         const response = await fetch(
//           "https://api.github.com/users/aditya74841",
//           {
//             headers,
//           }
//         );
//         if (!response.ok) {
//           throw new Error(`GitHub API error: ${response.status}`);
//         }
//         const data = await response.json();
//         // Calculate total stars across repositories
//         const reposResponse = await fetch(
//           "https://api.github.com/users/aditya74841/repos",
//           { headers }
//         );
//         if (!reposResponse.ok) {
//           throw new Error(`GitHub Repos API error: ${reposResponse.status}`);
//         }
//         const repos = await reposResponse.json();
//         const totalStars = repos.reduce(
//           (acc, repo) => acc + repo.stargazers_count,
//           0
//         );

//         setGithubStats({
//           followers: data.followers,
//           public_repos: data.public_repos,
//           stargazers: totalStars,
//         });
//       } catch (err) {
//         setError(err.message);
//         console.error("Error fetching GitHub stats:", err);
//       }
//     };

//     fetchGithubStats();
//   }, []);

 

//   return (
//     <>
//       <SEO
//         title="About Aditya Ranjan | Full Stack Developer"
//         description="Learn more about Aditya Ranjan, a passionate Full Stack Web Developer with experience in building dynamic applications using modern technologies."
//         keywords="Aditya Ranjan, Full Stack Developer, Web Developer, React Developer, Node.js, Web Development"
//       />
//       <section id="about">
//         <h5>Get to Know</h5>
//         <h2>About Me</h2>

//         <div className=" container mx-auto">
//           {/* <div className="about__me hidden">
//           <div className="about__me-image">
//             <img style={{}} src={ME} alt="About Image" />
//           </div>
//         </div> */}
//           <div className="about__content">
//             <div className="about__cards">
//               <article className="about__card">
//                 <FaAward className="about__icon mx-auto" />
//                 <h5>Experience</h5>
//                 <small>2 Years</small>
//               </article>

//               <article className="about__card">
//                 <FiUsers className="about__icon mx-auto" />
//                 <h5>Code</h5>
//                 <small>10000+ lines</small>
//               </article>

//               <article className="about__card">
//                 <VscFolderLibrary className="about__icon mx-auto" />
//                 <h5>Completed</h5>
//                 <small>10+ Projects</small>
//               </article>
//             </div>
//             <p>
//               {" "}
//               Greetings, recruiters and tech professionals!👋 <br />I am a
//               highly skilled and passionate full stack developer with extensive
//               experience in building dynamic, high-performance web applications
//               using cutting-edge technologies such as HTML, CSS, JavaScript,
//               React, and Next.js. On the back-end, I harness the power of Python
//               and Node.js to develop robust, scalable solutions, efficiently
//               managing databases, RESTful APIs, and ensuring seamless deployment
//               processes.
//             </p>
//             {/* <div style={{justifyContent:'space-between',alignItems:'center'}}> */}
//             <a href="#contact" className="btn btn-primary">
//               {" "}
//               Let's Talk
//             </a>
//             <a
//               href={CV}
//               download
//               className="btn"
//               style={{
//                 marginLeft: 10,
//               }}
//             >
//               Download CV
//             </a>
//             {/* </div> */}
//           </div>
//           {/* // SOCIAL STATS */}
//           {/* <div className="flex justify-between">
//             <div
//               className={`max-w-lg mx-auto rounded-xl shadow-lg p-6 mb-12 transform hover:scale-105 transition-all duration-300 ${
//                 darkMode
//                   ? "bg-gray-800 border-gray-700"
//                   : "bg-white border-gray-200"
//               } border`}
//             >
//               <h3
//                 className={`text-2xl font-semibold mb-4 ${
//                   darkMode ? "text-blue-400" : "text-blue-600"
//                 }`}
//               >
//                 GitHub Stats
//               </h3>
//               {error ? (
//                 <p className="text-red-500 dark:text-red-400 text-center">
//                   Error fetching GitHub stats: {error}
//                 </p>
//               ) : (
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   <div>
//                     <p className="text-lg font-semibold">
//                       {githubStats.followers}
//                     </p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Followers
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-lg font-semibold">
//                       {githubStats.public_repos}
//                     </p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Repos
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-lg font-semibold">
//                       {githubStats.stargazers}
//                     </p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Stars
//                     </p>
//                   </div>
//                 </div>
//               )}
//               <Link
//                 to="/aditya-github"
//                 className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
//               >
//                 View More on GitHub
//               </Link>
//             </div>
//             <div
//               className={`max-w-md mx-auto rounded-xl shadow-lg p-6 mb-12 transform hover:scale-105 transition-all duration-300 ${
//                 darkMode
//                   ? "bg-gray-800 border-gray-700"
//                   : "bg-white border-gray-200"
//               } border`}
//             >
//               <h3
//                 className={`text-2xl font-semibold mb-4 ${
//                   darkMode ? "text-blue-400" : "text-blue-600"
//                 }`}
//               >
//                 GitHub Stats
//               </h3>
//               {error ? (
//                 <p className="text-red-500 dark:text-red-400 text-center">
//                   Error fetching GitHub stats: {error}
//                 </p>
//               ) : (
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   <div>
//                     <p className="text-lg font-semibold">
//                       {githubStats.followers}
//                     </p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Followers
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-lg font-semibold">
//                       {githubStats.public_repos}
//                     </p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Repos
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-lg font-semibold">
//                       {githubStats.stargazers}
//                     </p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Stars
//                     </p>
//                   </div>
//                 </div>
//               )}
//               <Link
//                 to="/aditya-github"
//                 className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
//               >
//                 View More on GitHub
//               </Link>
//             </div>
//           </div> */}

//           <div className="flex justify-between flex-col sm:flex-row gap-6 mb-12 mt-12">
//             {/* GitHub Stats Card */}
//             <div
//               className={`flex-1 max-w-md rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 ${
//                 darkMode
//                   ? "bg-gray-800 border-gray-700"
//                   : "bg-white border-gray-200"
//               } border`}
//             >
//               <h3
//                 className={`text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
//                   darkMode
//                     ? "from-blue-400 to-purple-400"
//                     : "from-blue-600 to-purple-600"
//                 }`}
//               >
//                 GitHub Stats
//               </h3>
//               {error ? (
//                 <p className="text-red-500 dark:text-red-400 text-center">
//                   Error fetching GitHub stats: {error}
//                 </p>
//               ) : (
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   <div>
//                     <p className="text-lg font-semibold">
//                       {githubStats.followers}
//                     </p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Followers
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-lg font-semibold">
//                       {githubStats.public_repos}
//                     </p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Repos
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-lg font-semibold">
//                       {githubStats.stargazers}
//                     </p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Stars
//                     </p>
//                   </div>
//                 </div>
//               )}
//               <Link
//                 to="/aditya-github"
//                 className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
//               >
//                 View More on GitHub
//               </Link>
//             </div>

//             {/* LeetCode Stats Card */}
//             <div
//               className={`flex-1 max-w-md rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 ${
//                 darkMode
//                   ? "bg-gray-800 border-gray-700"
//                   : "bg-white border-gray-200"
//               } border`}
//             >
//               <h3
//                 className={`text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
//                   darkMode
//                     ? "from-blue-400 to-purple-400"
//                     : "from-blue-600 to-purple-600"
//                 }`}
//               >
//                 LeetCode Stats
//               </h3>
//               {error ? (
//                 <p className="text-red-500 dark:text-red-400 text-center">
//                   Error fetching LeetCode stats: {error}
//                 </p>
//               ) : (
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   <div>
//                     {/* <p className="text-lg font-semibold">{leetcodeStats.solved}</p> */}
//                     <p className="text-lg font-semibold">
//                       {githubStats.followers}
//                     </p>

//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Solved
//                     </p>
//                   </div>
//                   <div>
//                     {/* <p className="text-lg font-semibold">{leetcodeStats.ranking}</p> */}
//                     <p className="text-lg font-semibold">770,314</p>

//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Ranking
//                     </p>
//                   </div>
//                   <div>
//                     {/* <p className="text-lg font-semibold">{leetcodeStats.contests}</p> */}
//                     <p className="text-lg font-semibold">
//                       15
//                     </p>

//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Contests
//                     </p>
//                   </div>
//                 </div>
//               )}
//               <a
//                 href="https://leetcode.com/aditya7884"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
//               >
//                 View More on LeetCode
//               </a>
//             </div>
//           </div>
//           {/* <GitHubProfile /> */}
//           {/* <LeetCodeProfile username={"aditya7884"} /> */}
//         </div>
//         <div className=""></div>
//       </section>
//     </>
//   );
// };

// export default About;



import React, { useEffect, useState } from "react";
import CV from "../../assets/aditya_resume.pdf";
import { FaAward, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { FiUsers, FiCode, FiMessageCircle } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import SEO from "../../SEO";
import { Link } from "react-router-dom";

const About = () => {
  const [githubStats, setGithubStats] = useState({
    followers: 0,
    public_repos: 0,
    stargazers: 0,
  });
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const fetchGithubStats = async () => {
      const token = process.env.REACT_APP_GITHUB_TOKEN;
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      try {
        const response = await fetch(
          "https://api.github.com/users/aditya74841",
          { headers }
        );
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        const data = await response.json();
        
        const reposResponse = await fetch(
          "https://api.github.com/users/aditya74841/repos",
          { headers }
        );
        if (!reposResponse.ok) {
          throw new Error(`GitHub Repos API error: ${reposResponse.status}`);
        }
        const repos = await reposResponse.json();
        const totalStars = repos.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0
        );

        setGithubStats({
          followers: data.followers,
          public_repos: data.public_repos,
          stargazers: totalStars,
        });
      } catch (err) {
        setError(err.message);
        console.error("Error fetching GitHub stats:", err);
      }
    };

    fetchGithubStats();
  }, []);

  const aboutCards = [
    {
      icon: FaAward,
      title: "Experience",
      value: "2+ Years",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      iconColor: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: FiCode,
      title: "Lines of Code",
      value: "10,000+",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: VscFolderLibrary,
      title: "Projects",
      value: "10+ Completed",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <>
      <SEO
        title="About Aditya Ranjan | Full Stack Developer"
        description="Learn more about Aditya Ranjan, a passionate Full Stack Web Developer with experience in building dynamic applications using modern technologies."
        keywords="Aditya Ranjan, Full Stack Developer, Web Developer, React Developer, Node.js, Web Development"
      />
      
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h5 className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light mb-2">
              Get to Know
            </h5>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Stats Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {aboutCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className={`group relative ${card.bgColor} backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/20`}
                >
                  <div className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`text-2xl ${card.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center font-medium">
                    {card.value}
                  </p>
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">👋</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                  Hello, I'm Aditya!
                </h3>
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Greetings, recruiters and tech professionals! I am a highly skilled and passionate 
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> full stack developer</span> with 
                extensive experience in building dynamic, high-performance web applications using cutting-edge 
                technologies such as <span className="font-semibold text-purple-600 dark:text-purple-400">HTML, CSS, JavaScript, React, and Next.js</span>. 
                On the back-end, I harness the power of <span className="font-semibold text-cyan-600 dark:text-cyan-400">Python and Node.js</span> to 
                develop robust, scalable solutions, efficiently managing databases, RESTful APIs, and ensuring seamless deployment processes.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <FiMessageCircle className="group-hover:rotate-12 transition-transform duration-300" />
                  Let's Talk
                </a>
                <a
                  href={CV}
                  download
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-600"
                >
                  <FaDownload className="group-hover:bounce transition-transform duration-300" />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* GitHub Stats */}
            <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🐙</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent dark:from-gray-200 dark:to-gray-400">
                  GitHub Stats
                </h3>
              </div>
              
              {error ? (
                <p className="text-red-500 text-center py-8">
                  Error fetching GitHub stats: {error}
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FiUsers className="text-blue-600 dark:text-blue-400 text-xl" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {githubStats.followers}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Followers
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BiGitRepoForked className="text-green-600 dark:text-green-400 text-xl" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {githubStats.public_repos}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Repositories
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <AiOutlineStar className="text-yellow-600 dark:text-yellow-400 text-xl" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {githubStats.stargazers}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Stars
                    </p>
                  </div>
                </div>
              )}
              
              <Link
                to="/aditya-github"
                className="group/btn flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full hover:from-gray-700 hover:to-gray-500 transition-all duration-300 transform hover:scale-105"
              >
                View More on GitHub
                <FaExternalLinkAlt className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* LeetCode Stats */}
            <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  LeetCode Stats
                </h3>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 dark:text-green-400 text-xl">✅</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {githubStats.followers}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Solved
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 dark:text-purple-400 text-xl">🏅</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    770,314
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ranking
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 dark:text-blue-400 text-xl">🎯</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    15
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Contests
                  </p>
                </div>
              </div>
              
              <a
                href="https://leetcode.com/aditya7884"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                View More on LeetCode
                <FaExternalLinkAlt className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
