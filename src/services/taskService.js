const { default: aqp } = require("api-query-params");
const Task = require("../models/task");

const createTaskService = async (data) => {
    try {
        if (data.type === "EMPTY-TASK") {
            let result = await Task.create(data);
            return result;
        }
        return null
    } catch (error) {
        return null;
    }
}

const getAllTasksService = async (limit, page, queryString) => {
    try {
        let result = null;
        let skip = (page - 1) * limit;
        const { filter } = aqp(queryString, {
            'blacklist': ['page']
        });
        if (limit && page) {
            result = await Task.find(filter)
                .limit(limit)
                .skip(skip).exec();
        } else {
            result = await Task.find({});
        }
        return result;
    } catch (error) {
        console.log('error', error);
        return null;
    }
}

const deleteTaskById = async (id) => {
    try {
        const result = await Task.deleteById(id);
        return result;
    } catch (error) {
        return null;
    }
};

const updateTaskById = async (id, data) => {
    try {
        const result = await Task.updateOne({ _id: id }, {...data});
        return result;
    } catch (error) {
        return null;
    }
};

module.exports = {
    createTaskService,
    getAllTasksService,
    updateTaskById,
    deleteTaskById
}
