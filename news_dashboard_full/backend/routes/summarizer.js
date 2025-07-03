const express = require('express');
const router = express.Router();
const { summarizeArticle, topHeadlines } = require('../controllers/summarizer.controller');

router.post('/summarize', summarizeArticle);

router.get('/top-headlines', topHeadlines);

module.exports = router;