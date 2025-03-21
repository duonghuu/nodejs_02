const getHomepage = (req, res) => {
    return res.render("home");
};
const getHoiDanIt = (req, res) => {
    return res.render("sample");
};

const postCreateUser = (req, res) => {
    let {email, name, city} = req.body
    // A simple SELECT query
    connection.query(
        `INSERT INTO users (name, email, city) VALUES (?, ?, ?)`,
        [name, email, city],
        function (err, results, fields) {
            res.send("Create user success");
        }
    );
};

module.exports = {
    getHomepage,
    getHoiDanIt,
    postCreateUser
}