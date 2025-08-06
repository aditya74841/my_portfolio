


import React, { useEffect, useState } from "react";

const GitHubProfile = () => {
  const username = "aditya74841";
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [events, setEvents] = useState([]);
  const [showAllRepos, setShowAllRepos] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      const token = process.env.REACT_APP_GITHUB_TOKEN;
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      try {
        const [profileRes, repoRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, { headers }),
          fetch(`https://api.github.com/users/${username}/repos`, { headers }),
          fetch(`https://api.github.com/users/${username}/events/public`, { headers }),
        ]);

        if (!profileRes.ok || !repoRes.ok || !eventsRes.ok) {
          const message = `Status: ${profileRes.status}, Repo: ${repoRes.status}, Events: ${eventsRes.status}`;
          throw new Error(`GitHub API error: ${message}`);
        }

        const profileData = await profileRes.json();
        const repoData = await repoRes.json();
        const eventsData = await eventsRes.json();

        setProfile(profileData);
        setRepos(repoData);
        setEvents(eventsData);
        setError(null);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubData();
  }, [username]);



  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <p className="text-center text-xl text-red-500 dark:text-red-400">
          Error: {error}
        </p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <p className="text-center text-xl text-gray-500 dark:text-gray-400 animate-pulse">
          Loading GitHub data...
        </p>
      </div>
    );
  }

  const displayedRepos = showAllRepos ? repos : repos.slice(0, 8);

  return (
    <div
      className={`min-h-screen py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Dark Mode Toggle */}
      {/* <div className="flex justify-end mb-6">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div> */}

      {/* Profile Section */}
      <div className="max-w-5xl mx-auto">
        <div
          className={`rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center gap-8 transform hover:scale-[1.01] transition-all duration-300 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <img
            src={profile.avatar_url}
            alt="avatar"
            className="w-36 h-36 rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-lg transform hover:rotate-2 transition duration-300"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {profile.name}
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              @{profile.login}
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-base">
              {profile.bio || "No bio available."}
            </p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <p className="flex items-center gap-1">
                <span className="text-blue-500">👥</span>
                <strong>{profile.followers}</strong> Followers
              </p>
              <p className="flex items-center gap-1">
                <span className="text-blue-500">➡️</span>
                <strong>{profile.following}</strong> Following
              </p>
              <p className="flex items-center gap-1">
                <span className="text-blue-500">📚</span>
                <strong>{profile.public_repos}</strong> Repos
              </p>
            </div>
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>

        {/* Repositories */}
        <h2
          className={`text-3xl font-semibold mb-6 border-b-2 pb-2 ${
            darkMode
              ? "border-blue-400 text-blue-400"
              : "border-blue-600 text-blue-600"
          }`}
        >
          Repositories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedRepos.length > 0 ? (
            displayedRepos.map((repo) => (
              <div
                key={repo.id}
                className={`rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 ${
                  darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                } border`}
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4 text-sm h-16 overflow-hidden text-ellipsis">
                  {repo.description || "No description available."}
                </p>
                <div className="text-xs flex justify-between text-gray-500 dark:text-gray-400">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                  <span>🧑‍💻 {repo.language || "N/A"}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
              No repositories available.
            </p>
          )}
        </div>

        {/* Show All Button */}
        {repos.length > 8 && !showAllRepos && (
          <div className="text-center">
            <button
              onClick={() => setShowAllRepos(true)}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Show All Repositories
            </button>
          </div>
        )}

        {/* Activity */}
        <h2
          className={`text-3xl font-semibold mb-6 border-b-2 pb-2 ${
            darkMode
              ? "border-blue-400 text-blue-400"
              : "border-blue-600 text-blue-600"
          }`}
        >
          Recent GitHub Activity
        </h2>
        <ul className="space-y-4 mb-12">
          {events.length > 0 ? (
            events.slice(0, 5).map((event) => (
              <li
                key={event.id}
                className={`p-4 rounded-lg shadow border transform hover:scale-[1.02] transition-all duration-300 ${
                  darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                }`}
              >
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>{event.type}</strong> in{" "}
                  <a
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    href={`https://github.com/${event.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.repo.name}
                  </a>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {new Date(event.created_at).toLocaleString()}
                </p>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No recent activity available.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default GitHubProfile;

