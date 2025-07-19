import React from 'react';
import { Filter, Hash } from 'lucide-react';

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  updates, 
  isVisible 
}) => {
  return (
    <div className={`mb-8 md:mb-12 transition-all duration-1000 delay-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 text-gray-700 mb-4">
          <Filter className="w-5 h-5" />
          <h3 className="text-lg md:text-xl font-semibold">Filter by Category</h3>
        </div>
        <p className="text-gray-600 text-sm">Choose a category to see specific updates</p>
      </div>
      
      <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
        <FilterButton
          key="all"
          isActive={selectedCategory === "all"}
          onClick={() => setSelectedCategory("all")}
          count={updates.length}
          icon={<Hash className="w-4 h-4" />}
        >
          All Updates
        </FilterButton>
        
        {categories.map((category) => (
          <FilterButton
            key={category._id}
            isActive={selectedCategory === category.name}
            onClick={() => setSelectedCategory(category.name)}
            count={updates.filter(u => u.createdBy?.name === category.name).length}
            icon={<Hash className="w-4 h-4" />}
          >
            {category.name}
          </FilterButton>
        ))}
      </div>
    </div>
  );
};

const FilterButton = ({ children, isActive, onClick, count, icon }) => (
  <button
    onClick={onClick}
    className={`group flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
      isActive
        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
        : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-200'
    }`}
  >
    {icon}
    <span>{children}</span>
    <span className={`text-xs px-2 py-1 rounded-full ${
      isActive ? 'bg-white/20' : 'bg-gray-100 text-gray-600'
    }`}>
      {count}
    </span>
  </button>
);

export default CategoryFilter;
