const express = require("express");
const router = express.Router();
const {
  fetchKontenTiga,
  editKontenTiga,
} = require("../controllers/kontenTigaController");

router.get("/konten-tiga", fetchKontenTiga);
router.put("/konten-tiga", editKontenTiga);

module.exports = router;
