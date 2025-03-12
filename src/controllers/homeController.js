const getHomepage = (req, res) => {
    return res.send("Hello World nodemon!");
};
const getHoiDanIt = (req, res) => {
    return res.render("sample");
};

module.exports = {
    getHomepage,
    getHoiDanIt
}