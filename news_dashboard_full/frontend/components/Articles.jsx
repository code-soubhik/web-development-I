import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';

function Articles({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
        setArticles(res.data.articles);
      } catch (err) {
        setError('Failed to load news.');
      }
      setLoading(false);
    }
    fetchNews();
  }, [category]);

  if (loading) return <p className="text-center py-10 text-blue-600">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
  if (articles.length === 0) return <p className="text-center py-10 text-gray-600">No articles found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map((a, idx) => (
        <ArticleCard key={idx} article={a} />
      ))}
    </div>
  );
}

export default Articles;