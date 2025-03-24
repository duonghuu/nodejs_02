const { getAllUsers, getUserById } = require("../services/CRUDService");
const connection = require("../config/database");
const getHomepage = async (req, res) => {
    let results = await getAllUsers();
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
    const [results, fields] = await connection.query(
        `INSERT INTO users (name, email, city) VALUES (?, ?, ?)`,
        [name, email, city],
    );
    res.send("Create user success");
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    return res.render("edit", {
        userEdit: user
    });
};

module.exports = {
    getHomepage,
    getHoiDanIt,
    postCreateUser,
    getCreateUser,
    getUpdatePage
}