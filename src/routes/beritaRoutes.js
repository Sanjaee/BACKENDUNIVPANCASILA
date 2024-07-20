const express = require('express');
const router = express.Router();
const beritaController = require('../controllers/beritaController');

router.get('/berita', beritaController.getBerita);
router.put('/berita', beritaController.updateBerita);

module.exports = router;
