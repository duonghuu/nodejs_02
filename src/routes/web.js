const express = require("express");
const router = express.Router();
const { getHomepage, getHoiDanIt, postCreateUser, getCreateUser } = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/hoidanit", getHoiDanIt);
router.post("/create-user", postCreateUser);
router.get("/create", getCreateUser);

module.exports = router;
