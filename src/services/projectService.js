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
        return null
    } catch (error) {
        return null;
    }
}

module.exports = {
    createEmptyCustomerService
}