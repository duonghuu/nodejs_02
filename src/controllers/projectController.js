const { createEmptyCustomerService } = require("../services/projectService");

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
    }
}