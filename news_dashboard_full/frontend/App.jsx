import React, { useState } from 'react';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import Articles from './components/Articles';

function App() {
  const [category, setCategory] = useState('general');
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <CategoryTabs setCategory={setCategory} />
      <Articles category={category} />
    </div>
  );
}

export default App;