const express = require('express');
const router = express.Router();
const { generateUrl, getUrl } = require('../controllers/urlController');

// POST /api/generate
router.post('/generate', generateUrl);

// GET /api/url/:shorturl
router.get('/url/:shorturl', getUrl);

module.exports = router;
