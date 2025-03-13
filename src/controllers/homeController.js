const getHomepage = (req, res) => {
    return res.render("home");
};
const getHoiDanIt = (req, res) => {
    return res.render("sample");
};

module.exports = {
    getHomepage,
    getHoiDanIt
}