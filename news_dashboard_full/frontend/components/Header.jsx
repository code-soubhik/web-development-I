import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-xl font-bold text-blue-600">NewsAI</h1>
      <nav className="space-x-4">
        <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">My Summaries</a>
      </nav>
      <div className="flex items-center space-x-2">
        <input className="border px-2 py-1 rounded" type="text" placeholder="Search news..." />
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Search</button>
      </div>
    </header>
  );
}

export default Header;