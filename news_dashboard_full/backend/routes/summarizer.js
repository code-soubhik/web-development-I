const express = require('express');
const router = express.Router();
const { summarizeArticle } = require('../controllers/summarizer.controller');

router.post('/summarize', summarizeArticle);

module.exports = router;