const express = require("express");
const navbarController = require("../controllers/navbarController");

const router = express.Router();

router.get("/navbar", navbarController.getNavbar);
router.put("/navbar", navbarController.updateNavbar);

module.exports = router;
