import React, { useEffect, useState } from "react";
// import GitHubCalendar from "react-github-contribution-calendar";

const GitHubProfile = () => {
  const username = "aditya74841";
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]); // Ensure this is initialized as an array
  const [events, setEvents] = useState([]);
  const [showAllRepos, setShowAllRepos] = useState(false); // State to control showing all repos

  useEffect(() => {
    const fetchGitHubData = async () => {
        const token = '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'; 
        const headers = {
          Authorization: `Bearer ${token}`,
        };
      
        try {
          const [profileRes, repoRes, eventsRes] = await Promise.all([
            fetch(`https://api.github.com/users/${username}`, { headers }),
            fetch(`https://api.github.com/users/${username}/repos`, { headers }),
            fetch(`https://api.github.com/users/${username}/events/public`, { headers }),
          ]);
      
          const profileData = await profileRes.json();
          const repoData = await repoRes.json();
          const eventsData = await eventsRes.json();
      
          setProfile(profileData);
          setRepos(repoData);
          setEvents(eventsData);
        } catch (error) {
          console.error("Error fetching GitHub data:", error);
        }
      };
      
    fetchGitHubData();
  }, [username]);

  if (!profile)
    return (
      <p className="text-center mt-10 text-gray-500">Loading GitHub data...</p>
    );

  // Slice the first 8 repositories to show initially
  const displayedRepos = showAllRepos ? repos : repos.slice(0, 8);

  return (
    <div className="mt-4 mx-auto font-sans bg-transparent min-h-screen">
      {/* Profile Section */}
      <div className="bg-white shadow-xl rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center gap-6">
        <img
          src={profile.avatar_url}
          alt="avatar"
          className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-md"
        />
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{profile.name}</h1>
          <p className="text-gray-500 text-lg">@{profile.login}</p>
          <p className="mt-2 text-gray-600">{profile.bio}</p>
          <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-700">
            <p>
              <strong>{profile.followers}</strong> Followers
            </p>
            <p>
              <strong>{profile.following}</strong> Following
            </p>
            <p>
              <strong>{profile.public_repos}</strong> Repos
            </p>
          </div>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>

      {/* Repositories */}
      <h2 className="text-3xl font-semibold text-white mb-6 border-b pb-2">
        Repositories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {displayedRepos.length > 0 ? (
          displayedRepos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-5 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-blue-600 hover:underline">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h3>
              <p className="text-gray-600 mt-1 mb-3 text-sm h-20 overflow-hidden text-ellipsis">
                {repo.description ? repo.description : "No description available."}
              </p>
              <div className="text-xs flex justify-between text-gray-500">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
                <span>🧑‍💻 {repo.language || "N/A"}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No repositories available.</p>
        )}
      </div>
      
      {/* Show All Button */}
      {repos.length > 8 && !showAllRepos && (
        <div className="text-center">
          <button
            onClick={() => setShowAllRepos(true)}
            className="px-4 py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Show All Repositories
          </button>
        </div>
      )}

      {/* Activity */}
      <h2 className="text-3xl font-semibold text-white mb-6 border-b pb-2">
        Recent GitHub Activity
      </h2>
      <ul className="space-y-4 mb-12">
        {events.slice(0, 5).map((event) => (
          <li
            key={event.id}
            className="bg-white p-4 rounded-lg shadow border border-gray-100"
          >
            <p className="text-sm text-gray-700">
              <strong>{event.type}</strong> in{" "}
              <a
                className="text-blue-600 hover:underline"
                href={`https://github.com/${event.repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.repo.name}
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(event.created_at).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubProfile;
