import React from 'react';
import StreakGrid from './StreakGrid';

const StreakModal = ({ streak, onClose, onToggleDay }) => {
  if (!streak) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2">{streak.name}</h2>
              <p className="text-white/90">{streak.description}</p>
            </div>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-purple-600">
                {streak.currentStreak}
              </div>
              <div className="text-sm text-gray-600">Current Streak</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">
                {streak.longestStreak}
              </div>
              <div className="text-sm text-gray-600">Longest Streak</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-green-600">
                {streak.completionRate}%
              </div>
              <div className="text-sm text-gray-600">Completion Rate</div>
            </div>
            {/* <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-orange-600">
                {streak.currentStreak}/{streak.totalStreaks}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </div> */}
          </div>

          {/* Streak Calendar */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Streak Calendar</h3>
            <StreakGrid
              streakNumbers={streak.streakNumber}
              onDayClick={(value) => onToggleDay(streak.id, value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakModal;
