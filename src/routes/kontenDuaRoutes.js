const express = require("express");
const kontenDuaController = require("../controllers/kontenDuaController");

const router = express.Router();

router.get("/konten-dua", kontenDuaController.getKontenDua);
router.put("/konten-dua", kontenDuaController.updateKontenDua);

module.exports = router;
