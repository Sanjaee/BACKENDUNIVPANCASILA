const express = require("express");
const kontenEmpatController = require("../controllers/kontenEmpatController");

const router = express.Router();

router.get("/konten-empat", kontenEmpatController.fetchKontenEmpat);
router.put("/konten-empat", kontenEmpatController.editKontenEmpat);

module.exports = router;