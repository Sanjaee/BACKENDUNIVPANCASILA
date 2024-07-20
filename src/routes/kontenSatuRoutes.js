const express = require('express');
const kontenSatuController = require('../controllers/kontenSatuController');

const router = express.Router();

router.get('/konten-satu', kontenSatuController.getKontenSatu);
router.put('/konten-satu', kontenSatuController.updateKontenSatu);

module.exports = router;
