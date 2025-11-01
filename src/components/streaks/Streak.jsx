import React from 'react'

const Streak = () => {
  return (
    <div>Streak</div>
  )
}

export default Streak



// import React, { useState } from 'react';
// import { useStreaks } from './useStreaks';
// import StatsCard from './StatsCard';
// import StreakCard from './StreakCard';
// import StreakModal from './StreakModal';
// import CreateStreakModal from './CreateStreakModal';
// import LoadingSpinner from './LoadingSpinner';
// import ErrorMessage from './ErrorMessage';

// const Streak = () => {
//   const {
//     streaks,
//     loading,
//     error,
//     fetchStreaks,
//     createStreak,
//     deleteStreak,
//     markComplete,
//     resetStreak,
//     incrementStreak,
//   } = useStreaks();

//   const [selectedStreak, setSelectedStreak] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [newStreak, setNewStreak] = useState({ name: '', description: '', count: 30 });

//   // Handle streak card click
//   const handleStreakClick = (streak) => {
//     setSelectedStreak(streak);
//     setShowModal(true);
//   };

//   // Create new streak
//   const handleCreateStreak = async () => {
//     if (!newStreak.name) return;
    
//     const result = await createStreak(newStreak);
//     if (result.success) {
//       setShowCreateModal(false);
//       setNewStreak({ name: '', description: '', count: 30 });
//     }
//   };

//   // Delete streak
//   const handleDeleteStreak = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this streak?')) return;
//     await deleteStreak(id);
//   };

//   // Toggle day completion
//   const handleToggleDay = async (streakId, streakValue) => {
//     await markComplete(streakId, streakValue);
//     // Update selected streak if modal is open
//     if (selectedStreak && selectedStreak._id === streakId) {
//       const updated = streaks.find((s) => s._id === streakId);
//       setSelectedStreak(updated);
//     }
//   };

//   // Reset streak
//   const handleResetStreak = async (id) => {
//     if (!window.confirm('Are you sure you want to reset this streak?')) return;
//     await resetStreak(id);
//   };

//   // Increment streak
//   const handleIncrementStreak = async (id, count) => {
//     await incrementStreak(id, count);
//   };

//   // Calculate stats
//   const totalStreaks = streaks.length;
//   const activeStreaks = streaks.filter((s) => s.isActive).length;
//   const longestStreak = streaks.length > 0 
//     ? Math.max(...streaks.map((s) => s.longestStreak)) 
//     : 0;
//   const avgCompletion = streaks.length > 0
//     ? Math.round(streaks.reduce((acc, s) => acc + (s.completionRate || 0), 0) / streaks.length)
//     : 0;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-4xl font-bold text-gray-800 mb-2">🔥 Streak Tracker</h1>
//             <p className="text-gray-600">Track your daily habits and build lasting streaks</p>
//           </div>
//           <button
//             onClick={() => setShowCreateModal(true)}
//             disabled={loading}
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//           >
//             + New Streak
//           </button>
//         </div>

//         {/* Error Message */}
//         {error && (
//           <div className="mb-8">
//             <ErrorMessage message={error} onRetry={fetchStreaks} />
//           </div>
//         )}

//         {/* Loading State */}
//         {loading && streaks.length === 0 ? (
//           <LoadingSpinner />
//         ) : (
//           <>
//             {/* Stats Overview */}
//             {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//               <StatsCard label="Total Streaks" value={totalStreaks} borderColor="border-purple-500" />
//               <StatsCard label="Active Streaks" value={activeStreaks} borderColor="border-blue-500" />
//               <StatsCard label="Longest Streak" value={`${longestStreak} days`} borderColor="border-green-500" />
//               <StatsCard label="Avg Completion" value={`${avgCompletion}%`} borderColor="border-orange-500" />
//             </div> */}

//             {/* Empty State */}
//             {streaks.length === 0 && !loading && (
//               <div className="text-center py-16">
//                 <div className="text-6xl mb-4">📊</div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">No Streaks Yet</h2>
//                 <p className="text-gray-600 mb-6">Create your first streak to start tracking your habits</p>
//                 <button
//                   onClick={() => setShowCreateModal(true)}
//                   className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
//                 >
//                   + Create First Streak
//                 </button>
//               </div>
//             )}

//             {/* Streaks Grid */}
//             {streaks.length > 0 && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {streaks.map((streak) => (
//                   <StreakCard key={streak._id} streak={streak} onClick={handleStreakClick}  onToggleDay={handleToggleDay}
                  
//                   onComplete={async (id) => {
//                     await markComplete(id); // call API
//                     fetchStreaks(); // refresh streaks
//                   }}/>
//                 ))}
//               </div>
//             )}
//           </>
//         )}

//         {/* Modals */}
//         {/* {showModal && selectedStreak && (
//           <StreakModal
//             streak={selectedStreak}
//             onClose={() => {
//               setShowModal(false);
//               setSelectedStreak(null);
//             }}
//             onToggleDay={handleToggleDay}
//           />
//         )} */}

//         <CreateStreakModal
//           show={showCreateModal}
//           onClose={() => {
//             setShowCreateModal(false);
//             setNewStreak({ name: '', description: '', count: 30 });
//           }}
//           streak={newStreak}
//           onChange={setNewStreak}
//           onCreate={handleCreateStreak}
//         />
//       </div>
//     </div>
//   );
// };

// export default Streak;







// import React, { useState } from 'react';

// const Streak = () => {
//   // Dummy data
//   const [streaks, setStreaks] = useState([
//     {
//       id: 1,
//       name: 'Daily Exercise',
//       description: '30 days fitness challenge',
//       currentStreak: 15,
//       longestStreak: 20,
//       completionRate: 75,
//       totalStreaks: 30,
//       completedStreaks: 22,
//       lastCompletedDate: '2025-10-21',
//       isActive: true,
//       streakNumber: Array.from({ length: 30 }, (_, i) => ({
//         value: i + 1,
//         completed: i < 22,
//         completedAt: i < 22 ? '2025-10-20' : null,
//       })),
//     },
//     {
//       id: 2,
//       name: 'Reading Books',
//       description: 'Read 50 pages daily',
//       currentStreak: 8,
//       longestStreak: 12,
//       completionRate: 60,
//       totalStreaks: 40,
//       completedStreaks: 24,
//       lastCompletedDate: '2025-10-22',
//       isActive: true,
//       streakNumber: Array.from({ length: 40 }, (_, i) => ({
//         value: i + 1,
//         completed: i < 24,
//         completedAt: i < 24 ? '2025-10-21' : null,
//       })),
//     },
//     {
//       id: 3,
//       name: 'Learning Code',
//       description: 'Code for 2 hours every day',
//       currentStreak: 25,
//       longestStreak: 25,
//       completionRate: 83,
//       totalStreaks: 60,
//       completedStreaks: 50,
//       lastCompletedDate: '2025-10-22',
//       isActive: true,
//       streakNumber: Array.from({ length: 60 }, (_, i) => ({
//         value: i + 1,
//         completed: i < 50,
//         completedAt: i < 50 ? '2025-10-22' : null,
//       })),
//     },
//   ]);

//   const [selectedStreak, setSelectedStreak] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [newStreak, setNewStreak] = useState({
//     name: '',
//     description: '',
//     count: 30,
//   });

//   const handleStreakClick = (streak) => {
//     setSelectedStreak(streak);
//     setShowModal(true);
//   };

//   const handleCreateStreak = () => {
//     const newStreakData = {
//       id: streaks.length + 1,
//       name: newStreak.name,
//       description: newStreak.description,
//       currentStreak: 0,
//       longestStreak: 0,
//       completionRate: 0,
//       totalStreaks: newStreak.count,
//       completedStreaks: 0,
//       lastCompletedDate: null,
//       isActive: true,
//       streakNumber: Array.from({ length: newStreak.count }, (_, i) => ({
//         value: i + 1,
//         completed: false,
//         completedAt: null,
//       })),
//     };
//     setStreaks([...streaks, newStreakData]);
//     setShowCreateModal(false);
//     setNewStreak({ name: '', description: '', count: 30 });
//   };

//   const toggleStreakComplete = (streakId, streakValue) => {
//     setStreaks(
//       streaks.map((streak) => {
//         if (streak.id === streakId) {
//           const updatedStreakNumbers = streak.streakNumber.map((sn) => {
//             if (sn.value === streakValue) {
//               return {
//                 ...sn,
//                 completed: !sn.completed,
//                 completedAt: !sn.completed ? new Date().toISOString() : null,
//               };
//             }
//             return sn;
//           });
//           const completedCount = updatedStreakNumbers.filter((s) => s.completed).length;
//           return {
//             ...streak,
//             streakNumber: updatedStreakNumbers,
//             completedStreaks: completedCount,
//             completionRate: Math.round((completedCount / streak.totalStreaks) * 100),
//           };
//         }
//         return streak;
//       })
//     );
//     if (selectedStreak && selectedStreak.id === streakId) {
//       const updated = streaks.find((s) => s.id === streakId);
//       setSelectedStreak({ ...updated });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-4xl font-bold text-gray-800 mb-2">
//               🔥 Streak Tracker
//             </h1>
//             <p className="text-gray-600">Track your daily habits and build lasting streaks</p>
//           </div>
//           <button
//             onClick={() => setShowCreateModal(true)}
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
//           >
//             + New Streak
//           </button>
//         </div>

//         {/* Stats Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
//             <div className="text-gray-600 text-sm font-medium mb-1">Total Streaks</div>
//             <div className="text-3xl font-bold text-gray-800">{streaks.length}</div>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
//             <div className="text-gray-600 text-sm font-medium mb-1">Active Streaks</div>
//             <div className="text-3xl font-bold text-gray-800">
//               {streaks.filter((s) => s.isActive).length}
//             </div>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
//             <div className="text-gray-600 text-sm font-medium mb-1">Longest Streak</div>
//             <div className="text-3xl font-bold text-gray-800">
//               {Math.max(...streaks.map((s) => s.longestStreak))} days
//             </div>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
//             <div className="text-gray-600 text-sm font-medium mb-1">Avg Completion</div>
//             <div className="text-3xl font-bold text-gray-800">
//               {Math.round(
//                 streaks.reduce((acc, s) => acc + s.completionRate, 0) / streaks.length
//               )}
//               %
//             </div>
//           </div>
//         </div>

//         {/* Streaks Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {streaks.map((streak) => (
//             <div
//               key={streak.id}
//               onClick={() => handleStreakClick(streak)}
//               className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
//             >
//               <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 text-white">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-bold">{streak.name}</h3>
//                   <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
//                     🔥 {streak.currentStreak}
//                   </span>
//                 </div>
//                 <p className="text-white/80 text-sm">{streak.description}</p>
//               </div>

//               <div className="p-6">
//                 {/* Progress Bar */}
//                 <div className="mb-4">
//                   <div className="flex justify-between text-sm text-gray-600 mb-2">
//                     <span>Progress</span>
//                     <span className="font-semibold">{streak.completionRate}%</span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                     <div
//                       className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
//                       style={{ width: `${streak.completionRate}%` }}
//                     ></div>
//                   </div>
//                 </div>

//                 {/* Stats */}
//                 <div className="grid grid-cols-2 gap-4 text-center">
//                   <div className="bg-purple-50 rounded-lg p-3">
//                     <div className="text-2xl font-bold text-purple-600">
//                       {streak.completedStreaks}
//                     </div>
//                     <div className="text-xs text-gray-600">Completed</div>
//                   </div>
//                   <div className="bg-blue-50 rounded-lg p-3">
//                     <div className="text-2xl font-bold text-blue-600">
//                       {streak.longestStreak}
//                     </div>
//                     <div className="text-xs text-gray-600">Longest</div>
//                   </div>
//                 </div>

//                 {/* Mini Grid Preview */}
//                 <div className="mt-4 grid grid-cols-10 gap-1">
//                   {streak.streakNumber.slice(0, 30).map((sn) => (
//                     <div
//                       key={sn.value}
//                       className={`aspect-square rounded ${
//                         sn.completed
//                           ? 'bg-gradient-to-br from-purple-500 to-blue-500'
//                           : 'bg-gray-200'
//                       }`}
//                       title={`Day ${sn.value}`}
//                     ></div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Detail Modal */}
//         {showModal && selectedStreak && (
//           <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
//               <div className="sticky top-0 bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h2 className="text-3xl font-bold mb-2">{selectedStreak.name}</h2>
//                     <p className="text-white/90">{selectedStreak.description}</p>
//                   </div>
//                   <button
//                     onClick={() => setShowModal(false)}
//                     className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
//                   >
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               <div className="p-6">
//                 {/* Stats Grid */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                   <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
//                     <div className="text-3xl font-bold text-purple-600">
//                       {selectedStreak.currentStreak}
//                     </div>
//                     <div className="text-sm text-gray-600">Current Streak</div>
//                   </div>
//                   <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
//                     <div className="text-3xl font-bold text-blue-600">
//                       {selectedStreak.longestStreak}
//                     </div>
//                     <div className="text-sm text-gray-600">Longest Streak</div>
//                   </div>
//                   <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
//                     <div className="text-3xl font-bold text-green-600">
//                       {selectedStreak.completionRate}%
//                     </div>
//                     <div className="text-sm text-gray-600">Completion Rate</div>
//                   </div>
//                   <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center">
//                     <div className="text-3xl font-bold text-orange-600">
//                       {selectedStreak.completedStreaks}/{selectedStreak.totalStreaks}
//                     </div>
//                     <div className="text-sm text-gray-600">Completed</div>
//                   </div>
//                 </div>

//                 {/* Streak Grid */}
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-4">Streak Calendar</h3>
//                   <div className="grid grid-cols-7 md:grid-cols-10 gap-2">
//                     {selectedStreak.streakNumber.map((sn) => (
//                       <button
//                         key={sn.value}
//                         onClick={() => toggleStreakComplete(selectedStreak.id, sn.value)}
//                         className={`aspect-square rounded-lg font-semibold text-sm transition-all transform hover:scale-105 ${
//                           sn.completed
//                             ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg'
//                             : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                         }`}
//                         title={sn.completed ? `Completed on ${sn.completedAt}` : 'Not completed'}
//                       >
//                         {sn.value}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Create Modal */}
//         {showCreateModal && (
//           <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
//               <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white rounded-t-2xl">
//                 <h2 className="text-2xl font-bold">Create New Streak</h2>
//               </div>

//               <div className="p-6">
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Streak Name
//                     </label>
//                     <input
//                       type="text"
//                       value={newStreak.name}
//                       onChange={(e) => setNewStreak({ ...newStreak, name: e.target.value })}
//                       className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
//                       placeholder="e.g., Daily Exercise"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Description
//                     </label>
//                     <textarea
//                       value={newStreak.description}
//                       onChange={(e) =>
//                         setNewStreak({ ...newStreak, description: e.target.value })
//                       }
//                       className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
//                       rows="3"
//                       placeholder="Describe your streak goal..."
//                     ></textarea>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Number of Days
//                     </label>
//                     <input
//                       type="number"
//                       value={newStreak.count}
//                       onChange={(e) =>
//                         setNewStreak({ ...newStreak, count: parseInt(e.target.value) })
//                       }
//                       className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
//                       min="1"
//                       max="365"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex gap-3 mt-6">
//                   <button
//                     onClick={() => setShowCreateModal(false)}
//                     className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={handleCreateStreak}
//                     disabled={!newStreak.name}
//                     className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//                   >
//                     Create Streak
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Streak;
