const express = require("express");
const router = express.Router();
const { getHomepage, getHoiDanIt } = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/hoidanit", getHoiDanIt);

module.exports = router;
