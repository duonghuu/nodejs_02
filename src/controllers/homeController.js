const getHomepage = (req, res) => {
    return res.render("home");
};
const getHoiDanIt = (req, res) => {
    return res.render("sample");
};

const postCreateUser = (req, res) => {
    console.log(req.body);
    res.send("postCreateUser");
};

module.exports = {
    getHomepage,
    getHoiDanIt,
    postCreateUser
}