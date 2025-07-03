const axios = require('axios');

async function summarizeArticle(req, res) {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: 'Missing article content' });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `Summarize the following article in 3 bullet points:\n${content}`
              }
            ]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const summary = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No summary generated';
    res.json({ summary });

  } catch (error) {
    console.error('Gemini API Error:', error.response?.data || error.message);
    res.status(500).json({ message: 'Summarization failed' });
  }
}

module.exports = { summarizeArticle };