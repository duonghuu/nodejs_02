const { default: aqp } = require("api-query-params");
const Project = require("../models/project");

const createEmptyCustomerService = async (objData) => {
    try {
        if (objData.type === "EMPTY-PROJECT") {
            let result = await Project.create(objData);
            return result;
        }
        if (objData.type === "ADD-USERS") {
            let myProject = await Project.findById(objData.projectId).exec();
            for (let i = 0; i < objData.usersArr.length; i++) {
                myProject.usersInfo.push(objData.usersArr[i]);
            }
            let result = await myProject.save();
            return result;
        }
        if (objData.type === "REMOVE-USERS") {
            let myProject = await Project.findById(objData.projectId).exec();
            for (let i = 0; i < objData.usersArr.length; i++) {
                myProject.usersInfo.remove({_id:objData.usersArr[i]});
            }
            let result = await myProject.save();
            return result;
        }
        return null
    } catch (error) {
        return null;
    }
}

const getAllProjectsService = async (limit, page, queryString) => {
    try {
        let result = null;
        let skip = (page - 1) * limit;
        const { filter, population } = aqp(queryString, {
            'blacklist': ['page']
        });
        if (limit && page) {
            result = await Project.find(filter)
                .populate(population)
                .limit(limit)
                .skip(skip).exec();
        } else {
            result = await Project.find({});
        }
        return result;
    } catch (error) {
        console.log('error', error);
        return null;
    }
}

const deleteAProjectById = async (id) => {
    try {
        const result = await Project.deleteById(id);
        return result;
    } catch (error) {
        return null;
    }
};

const updateProjectById = async (id, name, startDate, endDate, description) => {
    try {
        const updateDate = {};
        if (name) {
            updateDate.name = name;
        }
        if (startDate) {
            updateDate.startDate = startDate;
        }
        if (endDate) {
            updateDate.endDate = endDate;
        }
        if (description) {
            updateDate.description = description;
        }
        const result = await Project.updateOne({ _id: id }, updateDate);
        return result;
    } catch (error) {
        return null;
    }
};

module.exports = {
    createEmptyCustomerService,
    getAllProjectsService,
    deleteAProjectById,
    updateProjectById
}
