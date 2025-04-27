const { getAllUsers, getUserById, updateUserById, deleteUserById } = require("../services/CRUDService");
const connection = require("../config/database");
const User = require("../models/user");
const getHomepage = async (req, res) => {
    let results = [];
    return res.render("home", {
        listUsers: results
    });
};
const getHoiDanIt = (req, res) => {
    return res.render("sample");
};

const getCreateUser = (req, res) => {
    return res.render("create");
};

const postCreateUser = async (req, res) => {
    let {email, name, city} = req.body
    // const [results, fields] = await connection.query(
    //     `INSERT INTO users (name, email, city) VALUES (?, ?, ?)`,
    //     [name, email, city],
    // );
    await User.create({name, email, city});
    res.send("Create user success");
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    return res.render("edit", {
        userEdit: user
    });
};

const postUpdateUser = async (req, res) => {
    let {email, name, city, userId} = req.body
    await updateUserById(userId, name, email, city);
    res.redirect("/");
};

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    return res.render("delete", {
        userEdit: user
    });
};

const postHandleRemoveUser = async (req, res) => {
    let { userId } = req.body
    await deleteUserById(userId);
    res.redirect("/");
};

module.exports = {
    getHomepage,
    getHoiDanIt,
    postCreateUser,
    getCreateUser,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}