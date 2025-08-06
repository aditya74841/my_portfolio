
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle } from "lucide-react";

const LeetCodeProfile = ({ username = "aditya7884" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await axios.post(
          "https://leetcode.com/graphql",
          {
            query: `
              query userPublicProfile($username: String!) {
                matchedUser(username: $username) {
                  username
                  profile {
                    userAvatar
                    realName
                    reputation
                  }
                  submitStats: submitStatsGlobal {
                    acSubmissionNum {
                      difficulty
                      count
                    }
                  }
                  contributions {
                    points
                  }
                  badges {
                    name
                    icon
                  }
                  submissionCalendar
                  recentSubmissions {
                    title
                    statusDisplay
                    timestamp
                  }
                }
              }
            `,
            variables: { username },
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Cookie": `LEETCODE_SESSION=${process.env.REACT_APP_LEETCODE_SESSION}; csrftoken=${process.env.REACT_APP_CSRF_TOKEN}`,
            },
          }
        );

        const user = response.data.data.matchedUser;
        if (!user) {
          throw new Error("User not found");
        }

        setData({
          userProfile: { profile: user.profile },
          totalSolved: user.submitStats.acSubmissionNum.find(d => d.difficulty === "All")?.count || 0,
          easySolved: user.submitStats.acSubmissionNum.find(d => d.difficulty === "Easy")?.count || 0,
          mediumSolved: user.submitStats.acSubmissionNum.find(d => d.difficulty === "Medium")?.count || 0,
          hardSolved: user.submitStats.acSubmissionNum.find(d => d.difficulty === "Hard")?.count || 0,
          contributionPoint: user.contributions.points,
          reputation: user.profile.reputation,
          badges: user.badges || [],
          submissionCalendar: user.submissionCalendar ? JSON.parse(user.submissionCalendar) : {},
          recentSubmissions: user.recentSubmissions || [],
        });
      } catch (err) {
        setError("Error fetching LeetCode data: " + err.message);
        console.error("Error fetching LeetCode data", err);
        // Fallback to mock data
        setData({
          userProfile: { profile: { avatar: "https://assets.leetcode.com/users/avatars/avatar_1652630457.png", realName: "Aditya Ranjan" } },
          totalSolved: 150,
          easySolved: 70,
          mediumSolved: 60,
          hardSolved: 20,
          contributionPoint: 500,
          reputation: 100,
          badges: [{ name: "Daily Challenge", icon: "https://example.com/badge.png" }],
          submissionCalendar: { "1696118400": 2, "1696204800": 1 },
          recentSubmissions: [
            { title: "Two Sum", statusDisplay: "Accepted", timestamp: 1696118400 },
            { title: "Reverse Linked List", statusDisplay: "Accepted", timestamp: 1696204800 },
          ],
        });
      } finally {
        setLoading(false);
      }
    };
    fetchLeetCodeData();
  }, [username]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const formatDate = (timestamp) => new Date(timestamp * 1000).toLocaleDateString();

  if (loading)
    return (
      <div
        className={`text-center py-10 ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Loading LeetCode profile...
      </div>
    );

  if (error && !data)
    return (
      <div
        className={`text-center py-10 ${
          darkMode ? "text-red-400" : "text-red-500"
        }`}
      >
        {error}
      </div>
    );

  const { userProfile, totalSolved, easySolved, mediumSolved, hardSolved, contributionPoint, reputation, badges, submissionCalendar, recentSubmissions } = data;

  return (
    <div
      className={`relative w-full min-h-screen px-4 sm:px-6 lg:px-8 py-10 font-sans overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-6">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Main Content */}
      <div
        className={`max-w-5xl mx-auto bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border ${
          darkMode ? "border-gray-700" : "border-gray-200"
        } rounded-2xl shadow-xl p-8 transform hover:scale-[1.01] transition-all duration-300`}
      >
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
          <img
            src={userProfile?.profile?.avatar || "https://assets.leetcode.com/users/avatars/avatar_1652630457.png"}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-indigo-300 dark:border-indigo-500 shadow-lg transform hover:rotate-2 transition duration-300"
          />
          <div className="text-center sm:text-left">
            <h1
              className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                darkMode ? "from-blue-400 to-purple-400" : "from-blue-600 to-purple-600"
              }`}
            >
              {userProfile?.profile?.realName || "Aditya Ranjan"}
            </h1>
            <p className="text-[#4db5ff] text-base">@{username}</p>
            <p
              className={`text-sm mt-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              🌟 {contributionPoint} Points | ❤️ {reputation} Reputation
            </p>
            <a
              href={`https://leetcode.com/u/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Visit LeetCode Profile
            </a>
          </div>
        </div>

        {/* Problem Solving Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <StatCard label="Total Solved" value={totalSolved} color="blue" />
          <StatCard label="Easy" value={easySolved} color="green" />
          <StatCard label="Medium" value={mediumSolved} color="yellow" />
          <StatCard label="Hard" value={hardSolved} color="red" />
        </div>

        {/* Skill Progress Bars */}
        <div className="mb-10 space-y-4">
          <ProgressBar label="Easy" value={easySolved} total={totalSolved} />
          <ProgressBar label="Medium" value={mediumSolved} total={totalSolved} />
          <ProgressBar label="Hard" value={hardSolved} total={totalSolved} />
        </div>

        {/* Badges */}
        {badges?.length > 0 && (
          <div className="mb-10">
            <h2
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              🏅 Badges
            </h2>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className={`flex items-center px-3 py-1 rounded-full shadow-sm text-sm font-medium ${
                    darkMode
                      ? "bg-purple-900/50 text-purple-300"
                      : "bg-purple-50 text-purple-800"
                  }`}
                >
                  <img src={badge.icon} alt={badge.name} className="w-5 h-5 mr-2" />
                  {badge.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Submissions */}
        <div className="mb-10">
          <h2
            className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            🕓 Recent Submissions
          </h2>
          <ul className="space-y-3">
            {recentSubmissions.slice(0, 5).map((sub, idx) => (
              <li
                key={idx}
                className={`border p-4 rounded-xl shadow-sm flex justify-between items-center ${
                  darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"
                }`}
              >
                <div>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    {sub.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Status: {sub.statusDisplay || sub.status}
                  </p>
                </div>
                <span className="text-sm text-gray-400 dark:text-gray-300">
                  {formatDate(sub.timestamp)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Submission Calendar */}
        <div>
          <h2
            className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            📅 Submission Activity (Last 28 Days)
          </h2>
          <div className="grid grid-cols-7 gap-2 text-center text-xs">
            {Object.entries(submissionCalendar)
              .slice(-28)
              .map(([date, count], i) => {
                const intensity = count > 0 ? Math.min(count * 20, 100) : 0;
                return (
                  <div
                    key={i}
                    className={`p-2 rounded-xl font-medium ${
                      count > 0
                        ? `bg-indigo-${100 + intensity * 2} text-indigo-${
                            900 - intensity * 2
                          } dark:bg-indigo-${300 + intensity} dark:text-indigo-${
                            800 - intensity
                          }`
                        : "bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500"
                    }`}
                    title={`${new Date(date * 1000).toDateString()}: ${count} submissions`}
                  >
                    {count}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, color }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
    green: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
    red: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
  };

  return (
    <div
      className={`p-5 rounded-2xl shadow-md hover:scale-105 transition-all ${colors[color]}`}
    >
      <CheckCircle className="mx-auto mb-2" size={24} />
      <p className="text-2xl font-bold text-center">{value}</p>
      <p className="text-sm text-center">{label}</p>
    </div>
  );
};

const ProgressBar = ({ label, value, total }) => {
  const percent = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div>
      <p className="text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">
        {label} ({value})
      </p>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-indigo-500 dark:bg-indigo-400 h-2.5 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default LeetCodeProfile;
