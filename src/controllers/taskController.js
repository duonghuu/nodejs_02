const { createTaskService, getAllTasksService, updateTaskById, deleteTaskById } = require("../services/taskService");

module.exports = {
    postCreateTaskAPI: async (req, res) => {
        let result = await createTaskService(req.body);
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
    getTasksAPI: async (req, res) => {
        let limit = req.query.limit;
        let page = req.query.page;
        let data = null;
        if (limit && page) {
            data = await getAllTasksService(limit, page, req.query);
        } else {
            data = await getAllTasksService();
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
    },
    putUpdateTaskAPI: async (req, res) => {
        let result = await updateTaskById(req.body.id, req.body);
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
    deleteTaskAPI: async (req, res) => {
        let { id } = req.body;
        let result = await deleteTaskById(id);
        if (result) {
            return res.status(200).json({
                errorCode: 0,
                data: result
            });
        } else {
            return res.status(500).json({
                errorCode: 1,
                errorMessage: "Error"
            });
        }
    }
}