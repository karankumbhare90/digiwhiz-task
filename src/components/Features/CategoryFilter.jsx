import React from 'react';

const CategoryFilter = ({ categories, selected, onSelect }) => (
  <div className="flex flex-wrap justify-center gap-2 mb-12">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onSelect(category)}
        className={`px-5 py-2 transition-all duration-300 ${selected === category
          ? 'bg-accent text-white'
          : 'bg-white text-secondary hover:bg-gray-100'
          }`}
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategoryFilter