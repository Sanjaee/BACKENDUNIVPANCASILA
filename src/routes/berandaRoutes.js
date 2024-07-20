const express = require('express');
const router = express.Router();
const berandaController = require('../controllers/berandaController');

router.get('/beranda', berandaController.getBeranda);
router.put('/beranda', berandaController.updateBeranda);

module.exports = router;
