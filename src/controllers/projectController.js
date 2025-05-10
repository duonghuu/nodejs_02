const { createEmptyCustomerService, getAllProjectsService } = require("../services/projectService");

module.exports = {
    postCreateEmptyProjectAPI: async (req, res) => {
        let result = await createEmptyCustomerService(req.body);
        if (result) {
            return res.status(200).json({
                errorCode: 0,
                data: result
            })
        } else {
            return res.status(500).json({
                errorCode: 1,
                errorMessage: "Error"
            })
        }
    },
    getProjectsAPI: async (req, res) => {
        let limit = req.query.limit;
        let page = req.query.page;
        let data = null;
        if (limit && page) {
            data = await getAllProjectsService(limit, page, req.query);
        } else {
            data = await getAllProjectsService();
        }
        if (data) {
            return res.status(200).json({
                errorCode: 0,
                data: data
            })
        } else {
            return res.status(500).json({
                errorCode: 1,
                errorMessage: "Error"
            })
        }
    }
}