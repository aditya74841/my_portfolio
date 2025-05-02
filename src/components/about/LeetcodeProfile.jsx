// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import { CheckCircle } from "lucide-react";

// const LeetCodeProfile = ({ username }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLeetCodeData = async () => {
//       try {
//         const res = await axios.get(
//           `https://alfa-leetcode-api.onrender.com/userProfile/${username}`
//         );
//         setData(res.data);
//         // console.log(res.data);
//       } catch (err) {
//         console.error("Error fetching LeetCode data", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchLeetCodeData();
//   }, [username]);

//   if (loading)
//     return (
//       <div className="text-center py-10 text-gray-500">
//         Loading LeetCode profile...
//       </div>
//     );
//   if (!data)
//     return (
//       <div className="text-center py-10 text-gray-500">No data available.</div>
//     );

//   const {
//     userProfile,
//     totalSolved,
//     easySolved,
//     mediumSolved,
//     hardSolved,
//     contributionPoint,
//     ranking,
//     reputation,
//     badges,
//     submissionCalendar,
//     recentSubmissions,
//   } = data;

//   const formatDate = (timestamp) =>
//     new Date(timestamp * 1000).toLocaleDateString();

//   return (
//     <div className="w-full mx-auto mt-10 px-6 py-8 bg-transparent rounded-2xl shadow-lg font-sans">
//       {/* Profile Header */}
//       <div className="flex items-center gap-6 mb-8">
//         <img
//           src={
//             userProfile?.profile?.avatar ||
//             "https://assets.leetcode.com/users/avatars/avatar_1652630457.png"
//           }
//           alt="Avatar"
//           className="w-20 h-20 rounded-full border-4 border-indigo-200 shadow-md"
//         />
//         <div>
//           <h1 className="text-2xl font-bold text-white-800">
//             {/* {userProfile?.profile?.realName || username} */}
//             Aditya Ranjan
//           </h1>
//           <p className="text-[#4db5ff] text-sm">@{username}</p>
//           {/* <p className="text-sm text-indigo-600 mt-1">Ranking: #{ranking}</p> */}
//           <p className="text-sm text-white-600">
//             🌟 {contributionPoint} Points | ❤️ {reputation} Reputation
//           </p>
//         </div>
//       </div>

//       {/* Problem Solving Stats */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
//         <StatCard label="Total Solved" value={totalSolved} color="blue" />
//         <StatCard label="Easy" value={easySolved} color="green" />
//         <StatCard label="Medium" value={mediumSolved} color="yellow" />
//         <StatCard label="Hard" value={hardSolved} color="red" />
//       </div>

//       {/* Badges */}
//       {badges?.length > 0 && (
//         <div className="mb-10">
//           <h2 className="text-lg font-semibold text-white mb-3">🏅 Badges</h2>
//           <div className="flex flex-wrap gap-3">
//             {badges.map((badge, i) => (
//               <div
//                 key={i}
//                 className="flex items-center bg-purple-50 px-3 py-1 rounded-full shadow-sm text-purple-800 font-medium text-sm"
//               >
//                 <img
//                   src={badge.icon}
//                   alt={badge.name}
//                   className="w-5 h-5 mr-2"
//                 />
//                 {badge.name}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Recent Submissions */}
//       <div className="mb-10">
//         <h2 className="text-lg font-semibold text-white mb-3">
//           🕓 Recent Submissions
//         </h2>
//         <ul className="space-y-3">
//           {recentSubmissions.slice(0, 5).map((sub, idx) => (
//             <li
//               key={idx}
//               className="bg-gray-50 border p-4 rounded-xl shadow-sm flex justify-between items-center"
//             >
//               <div>
//                 <p className="text-indigo-600 font-medium">{sub.title}</p>
//                 <p className="text-xs text-gray-500">Status: {sub.status}</p>
//               </div>
//               <span className="text-sm text-gray-400">
//                 {formatDate(sub.timestamp)}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Submission Calendar */}
//       <div>
//         <h2 className="text-lg font-semibold text-white mb-3">
//           📅 Submission Activity (Last 28 Days)
//         </h2>
//         <div className="grid grid-cols-7 gap-2 text-center text-xs">
//           {Object.entries(submissionCalendar)
//             .slice(-28)
//             .map(([date, count], i) => (
//               <div
//                 key={i}
//                 className={`p-2 rounded-xl font-medium ${
//                   count > 0
//                     ? "bg-indigo-100 text-indigo-700"
//                     : "bg-gray-100 text-gray-400"
//                 }`}
//                 title={`${new Date(
//                   date * 1000
//                 ).toDateString()}: ${count} submissions`}
//               >
//                 {count}
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const StatCard = ({ label, value, color }) => {
//   const colors = {
//     blue: "bg-blue-100 text-blue-800",
//     green: "bg-green-100 text-green-800",
//     yellow: "bg-yellow-100 text-yellow-800",
//     red: "bg-red-100 text-red-800",
//   };

//   return (
//     <div
//       className={`p-5 rounded-2xl shadow-md hover:scale-105 transition-all ${colors[color]}`}
//     >
//       <CheckCircle className="mx-auto mb-2" size={24} />
//       <p className="text-2xl font-bold text-center">{value}</p>
//       <p className="text-sm text-center">{label}</p>
//     </div>
//   );
// };
// export default LeetCodeProfile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle } from "lucide-react";

const LeetCodeProfile = ({ username }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const res = await axios.get(
          `https://alfa-leetcode-api.onrender.com/userProfile/${username}`
        );
        setData(res.data);
      } catch (err) {
        console.error("Error fetching LeetCode data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeetCodeData();
  }, [username]);

  if (loading)
    return (
      <div className="text-center py-10 text-gray-500">
        Loading LeetCode profile...
      </div>
    );
  if (!data)
    return (
      <div className="text-center py-10 text-gray-500">No data available.</div>
    );

  const {
    userProfile,
    totalSolved,
    easySolved,
    mediumSolved,
    hardSolved,
    contributionPoint,
   
    reputation,
    badges,
    submissionCalendar,
    recentSubmissions,
  } = data;

  const formatDate = (timestamp) =>
    new Date(timestamp * 1000).toLocaleDateString();

  return (
    <div className="relative w-full min-h-screen px-6 py-10 font-sans overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e293b] animate-pulse -z-10" />

      <div className="w-full mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src={
              userProfile?.profile?.avatar ||
              "https://assets.leetcode.com/users/avatars/avatar_1652630457.png"
            }
            alt="Avatar"
            className="w-20 h-20 rounded-full border-4 border-indigo-200 shadow-md"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">
              Aditya Ranjan
            </h1>
            <p className="text-[#4db5ff] text-sm">@{username}</p>
            <p className="text-sm text-white">
              🌟 {contributionPoint} Points | ❤️ {reputation} Reputation
            </p>
          </div>
        </div>

        {/* Problem Solving Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
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
            <h2 className="text-lg font-semibold text-white mb-3">🏅 Badges</h2>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center bg-purple-50 px-3 py-1 rounded-full shadow-sm text-purple-800 font-medium text-sm"
                >
                  <img
                    src={badge.icon}
                    alt={badge.name}
                    className="w-5 h-5 mr-2"
                  />
                  {badge.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Submissions */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3">
            🕓 Recent Submissions
          </h2>
          <ul className="space-y-3">
            {recentSubmissions.slice(0, 5).map((sub, idx) => (
              <li
                key={idx}
                className="bg-gray-50 border p-4 rounded-xl shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="text-indigo-600 font-medium">{sub.title}</p>
                  <p className="text-xs text-gray-500">Status: {sub.status}</p>
                </div>
                <span className="text-sm text-gray-400">
                  {formatDate(sub.timestamp)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Submission Calendar */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            📅 Submission Activity (Last 28 Days)
          </h2>
          <div className="grid grid-cols-7 gap-2 text-center text-xs">
            {Object.entries(submissionCalendar)
              .slice(-28)
              .map(([date, count], i) => (
                <div
                  key={i}
                  className={`p-2 rounded-xl font-medium ${
                    count > 0
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-gray-100 text-gray-400"
                  }`}
                  title={`${new Date(
                    date * 1000
                  ).toDateString()}: ${count} submissions`}
                >
                  {count}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, color }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
    red: "bg-red-100 text-red-800",
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
  const percent = Math.round((value / total) * 100);
  return (
    <div>
      <p className="text-sm font-medium mb-1 text-white">
        {label} ({value})
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-500 h-2.5 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default LeetCodeProfile;

