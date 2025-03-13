const express = require("express");
const router = express.Router();
const { getHomepage, getHoiDanIt, postCreateUser } = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/hoidanit", getHoiDanIt);
router.post("/create-user", postCreateUser);

module.exports = router;
