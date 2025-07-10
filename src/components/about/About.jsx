import React, { useEffect, useState } from "react";
import "./about.css";
import CV from "../../assets/aditya_resume.pdf";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import SEO from "../../SEO";
import { Link } from "react-router-dom";

const About = () => {
  const [githubStats, setGithubStats] = useState({
    followers: 0,
    public_repos: 0,
    stargazers: 0,
  });
  const [error, setError] = useState(null);
  const [darkMode] = useState(true);

  useEffect(() => {
    const fetchGithubStats = async () => {
      const token = process.env.REACT_APP_GITHUB_TOKEN;
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      try {
        const response = await fetch(
          "https://api.github.com/users/aditya74841",
          {
            headers,
          }
        );
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        const data = await response.json();
        // Calculate total stars across repositories
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

 

  return (
    <>
      <SEO
        title="About Aditya Ranjan | Full Stack Developer"
        description="Learn more about Aditya Ranjan, a passionate Full Stack Web Developer with experience in building dynamic applications using modern technologies."
        keywords="Aditya Ranjan, Full Stack Developer, Web Developer, React Developer, Node.js, Web Development"
      />
      <section id="about">
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className=" container mx-auto">
          {/* <div className="about__me hidden">
          <div className="about__me-image">
            <img style={{}} src={ME} alt="About Image" />
          </div>
        </div> */}
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon mx-auto" />
                <h5>Experience</h5>
                <small>2 Years</small>
              </article>

              <article className="about__card">
                <FiUsers className="about__icon mx-auto" />
                <h5>Code</h5>
                <small>10000+ lines</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon mx-auto" />
                <h5>Completed</h5>
                <small>10+ Projects</small>
              </article>
            </div>
            <p>
              {" "}
              Greetings, recruiters and tech professionals!👋 <br />I am a
              highly skilled and passionate full stack developer with extensive
              experience in building dynamic, high-performance web applications
              using cutting-edge technologies such as HTML, CSS, JavaScript,
              React, and Next.js. On the back-end, I harness the power of Python
              and Node.js to develop robust, scalable solutions, efficiently
              managing databases, RESTful APIs, and ensuring seamless deployment
              processes.
            </p>
            {/* <div style={{justifyContent:'space-between',alignItems:'center'}}> */}
            <a href="#contact" className="btn btn-primary">
              {" "}
              Let's Talk
            </a>
            <a
              href={CV}
              download
              className="btn"
              style={{
                marginLeft: 10,
              }}
            >
              Download CV
            </a>
            {/* </div> */}
          </div>
          {/* // SOCIAL STATS */}
          {/* <div className="flex justify-between">
            <div
              className={`max-w-lg mx-auto rounded-xl shadow-lg p-6 mb-12 transform hover:scale-105 transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              } border`}
            >
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                GitHub Stats
              </h3>
              {error ? (
                <p className="text-red-500 dark:text-red-400 text-center">
                  Error fetching GitHub stats: {error}
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-lg font-semibold">
                      {githubStats.followers}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Followers
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      {githubStats.public_repos}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Repos
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      {githubStats.stargazers}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Stars
                    </p>
                  </div>
                </div>
              )}
              <Link
                to="/aditya-github"
                className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                View More on GitHub
              </Link>
            </div>
            <div
              className={`max-w-md mx-auto rounded-xl shadow-lg p-6 mb-12 transform hover:scale-105 transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              } border`}
            >
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                GitHub Stats
              </h3>
              {error ? (
                <p className="text-red-500 dark:text-red-400 text-center">
                  Error fetching GitHub stats: {error}
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-lg font-semibold">
                      {githubStats.followers}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Followers
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      {githubStats.public_repos}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Repos
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      {githubStats.stargazers}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Stars
                    </p>
                  </div>
                </div>
              )}
              <Link
                to="/aditya-github"
                className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                View More on GitHub
              </Link>
            </div>
          </div> */}

          <div className="flex justify-between flex-col sm:flex-row gap-6 mb-12 mt-12">
            {/* GitHub Stats Card */}
            <div
              className={`flex-1 max-w-md rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              } border`}
            >
              <h3
                className={`text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
                  darkMode
                    ? "from-blue-400 to-purple-400"
                    : "from-blue-600 to-purple-600"
                }`}
              >
                GitHub Stats
              </h3>
              {error ? (
                <p className="text-red-500 dark:text-red-400 text-center">
                  Error fetching GitHub stats: {error}
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-lg font-semibold">
                      {githubStats.followers}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Followers
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      {githubStats.public_repos}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Repos
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      {githubStats.stargazers}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Stars
                    </p>
                  </div>
                </div>
              )}
              <Link
                to="/aditya-github"
                className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                View More on GitHub
              </Link>
            </div>

            {/* LeetCode Stats Card */}
            <div
              className={`flex-1 max-w-md rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              } border`}
            >
              <h3
                className={`text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
                  darkMode
                    ? "from-blue-400 to-purple-400"
                    : "from-blue-600 to-purple-600"
                }`}
              >
                LeetCode Stats
              </h3>
              {error ? (
                <p className="text-red-500 dark:text-red-400 text-center">
                  Error fetching LeetCode stats: {error}
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    {/* <p className="text-lg font-semibold">{leetcodeStats.solved}</p> */}
                    <p className="text-lg font-semibold">
                      {githubStats.followers}
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Solved
                    </p>
                  </div>
                  <div>
                    {/* <p className="text-lg font-semibold">{leetcodeStats.ranking}</p> */}
                    <p className="text-lg font-semibold">770,314</p>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Ranking
                    </p>
                  </div>
                  <div>
                    {/* <p className="text-lg font-semibold">{leetcodeStats.contests}</p> */}
                    <p className="text-lg font-semibold">
                      15
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Contests
                    </p>
                  </div>
                </div>
              )}
              <a
                href="https://leetcode.com/aditya7884"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                View More on LeetCode
              </a>
            </div>
          </div>
          {/* <GitHubProfile /> */}
          {/* <LeetCodeProfile username={"aditya7884"} /> */}
        </div>
        <div className=""></div>
      </section>
    </>
  );
};

export default About;
