import React from 'react';

const CreateStreakModal = ({ show, onClose, streak, onChange, onCreate }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white rounded-t-2xl">
          <h2 className="text-2xl font-bold">Create New Streak</h2>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Streak Name
              </label>
              <input
                type="text"
                value={streak.name}
                onChange={(e) => onChange({ ...streak, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-black"
                placeholder="e.g., Daily Exercise"
              />
            </div>

            {/* Description Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={streak.description}
                onChange={(e) => onChange({ ...streak, description: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none text-black"
                rows="3"
                placeholder="Describe your streak goal..."
              ></textarea>
            </div>

            {/* Count Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Days
              </label>
              <input
                type="number"
                value={streak.count}
                onChange={(e) => onChange({ ...streak, count: parseInt(e.target.value) })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-black"
                min="1"
                max="365"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onCreate}
              disabled={!streak.name}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Create Streak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStreakModal;
