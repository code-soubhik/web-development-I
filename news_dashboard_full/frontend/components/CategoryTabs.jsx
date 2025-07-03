import React from 'react';

const categories = ['general', 'business', 'technology', 'sports', 'health'];

function CategoryTabs({ setCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 py-4 bg-blue-50">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 capitalize"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;