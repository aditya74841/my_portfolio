


import React from "react";

const StreakCard = ({ streak, onComplete }) => {
  const canCompleteToday =
    !streak.lastCompletedDate ||
    new Date(streak.lastCompletedDate).toDateString() !== new Date().toDateString();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">{streak.name}</h3>
        <p className="text-gray-600 text-sm">{streak.description}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-center">
        <div className="bg-purple-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-purple-600">{streak.currentStreak}</div>
          <div className="text-xs text-gray-600">Current</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-blue-600">{streak.longestStreak}</div>
          <div className="text-xs text-gray-600">Longest</div>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Completion</span>
          <span className="font-semibold">{streak.completionRate || 0}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${streak.completionRate || 0}%` }}
          ></div>
        </div>
      </div>

      {/* Mark Complete Button */}
      <button
        onClick={() => onComplete(streak._id)}
        disabled={!canCompleteToday}
        className={`w-full px-4 py-3 rounded-lg font-semibold text-white ${
          canCompleteToday
            ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg transform hover:scale-105 transition-all"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {canCompleteToday ? "Mark as Complete" : "Completed Today ✅"}
      </button>
    </div>
  );
};

export default StreakCard;



// import React from "react";

// const StreakCard = ({ streak, onClick, onToggleDay }) => {
//   // Handle day click with event propagation stop
//   const handleDayClick = (e, dayValue) => {
//     e.stopPropagation(); // Prevent card click event
//     onToggleDay(streak._id, dayValue);
//   };

//   return (
//     <div
//       onClick={() => onClick(streak)}
//       className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
//     >
//       {/* Header */}
//       <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 text-white">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="text-xl font-bold">{streak.name}</h3>
//           <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
//             🔥 {streak.currentStreak}
//           </span>
//         </div>
//         <p className="text-white/80 text-sm">{streak.description}</p>
//       </div>

//       {/* Body */}
//       <div className="p-6">
//         {/* Progress Bar */}
//         <div className="mb-4">
//           <div className="flex justify-between text-sm text-gray-600 mb-2">
//             <span>Progress</span>
//             <span className="font-semibold">
//               {streak.completionRate || 0}%
//             </span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//             <div
//               className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
//               style={{ width: `${streak.completionRate || 0}%` }}
//             ></div>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 gap-4 text-center">
//           <div className="bg-purple-50 rounded-lg p-3">
//             <div className="text-2xl font-bold text-purple-600">
//               {streak.currentStreak || 0}
//             </div>
//             <div className="text-xs text-gray-600">Completed</div>
//           </div>
//           <div className="bg-blue-50 rounded-lg p-3">
//             <div className="text-2xl font-bold text-blue-600">
//               {streak.longestStreak || 0}
//             </div>
//             <div className="text-xs text-gray-600">Longest</div>
//           </div>
//         </div>

//         {/* Mini Grid Preview with Toggle */}
//         <div className="mt-4 grid grid-cols-10 gap-1">
//           {streak.streakNumber.map((sn) => (
//             <button
//               key={sn.value}
//               onClick={(e) => handleDayClick(e, sn.value)}
//               className={`aspect-square rounded transition-all transform hover:scale-110 ${
//                 sn.completed
//                   ? "bg-gradient-to-br from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
//                   : "bg-gray-200 hover:bg-gray-300"
//               }`}
//               title={
//                 sn.completed
//                   ? `Day ${sn.value} - Completed`
//                   : `Day ${sn.value} - Click to complete`
//               }
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StreakCard;

