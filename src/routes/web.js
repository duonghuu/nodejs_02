const express = require("express");
const router = express.Router();
const { getHomepage, getHoiDanIt, postCreateUser, getCreateUser, getUpdateUser } = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/hoidanit", getHoiDanIt);
router.post("/create-user", postCreateUser);
router.get("/create", getCreateUser);
router.get("/update/:id", getUpdateUser);

module.exports = router;
