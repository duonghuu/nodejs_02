const { getAllUsers } = require("../services/CRUDService");
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

module.exports = {
    getHomepage,
    getHoiDanIt,
    postCreateUser,
    getCreateUser
}