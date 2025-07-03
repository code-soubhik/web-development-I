import React, { useState } from 'react';
import axios from 'axios';

function ArticleCard({ article }) {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSummarize() {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/summarize', {
        content: article.content
      });
      setSummary(res.data.summary);
    } catch (err) {
      setSummary('Failed to summarize.');
    }
    setLoading(false);
  }

  return (
    <div className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition duration-300">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
        <p className="text-sm text-gray-600 mb-1">{article.source.name} — {article.author || 'Unknown Author'}</p>
        <a href={article.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-sm">Read Full Article</a>
        <div className="mt-4">
          <button onClick={handleSummarize} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Summarize
          </button>
          {loading && <p className="text-sm mt-2 text-gray-500">Summarizing...</p>}
          {summary && (
            <ul className="mt-2 text-sm text-gray-700 list-none">
              {summary.split('\n').map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;