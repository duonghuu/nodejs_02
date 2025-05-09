const Project = require("../models/project");

const createEmptyCustomerService = async (objData) => {
    try {
        if (objData.type === "EMPTY-PROJECT") {
            let result = await Project.create(objData);
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