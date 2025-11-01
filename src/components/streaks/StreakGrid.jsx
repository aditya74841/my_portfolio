import React from 'react';

const StreakGrid = ({ streakNumbers, onDayClick }) => {
  return (
    <div className="grid grid-cols-7 md:grid-cols-10 gap-2">
      {streakNumbers.map((sn) => (
        <button
          key={sn.value}
          onClick={() => onDayClick(sn.value)}
          className={`aspect-square rounded-lg font-semibold text-sm transition-all transform hover:scale-105 ${
            sn.completed
              ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
          title={sn.completed ? `Completed on ${sn.completedAt}` : 'Not completed'}
        >
          {sn.value}
        </button>
      ))}
    </div>
  );
};

export default StreakGrid;
