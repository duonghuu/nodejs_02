const express = require("express");
const router = express.Router();
const { getHomepage, getHoiDanIt, postCreateUser, getCreateUser, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/hoidanit", getHoiDanIt);
router.post("/create-user", postCreateUser);
router.get("/create", getCreateUser);
router.get("/update/:id", getUpdatePage);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postHandleRemoveUser);

module.exports = router;
