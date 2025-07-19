
// EmptyState.jsx
import React from 'react';
import { Calendar, Search } from 'lucide-react';

const EmptyState = ({ selectedCategory }) => (
  <div className="flex flex-col items-center justify-center py-16">
    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
      <Search className="w-8 h-8 text-gray-400" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      No updates found
    </h3>
    <p className="text-gray-600 text-center max-w-md">
      {selectedCategory === 'all' 
        ? "There are no updates available at the moment. Check back later!"
        : `No updates found for "${selectedCategory}". Try selecting a different category.`
      }
    </p>
  </div>
);

export default EmptyState;