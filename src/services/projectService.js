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

module.exports = {
    createEmptyCustomerService,
    getAllProjectsService
/*************  ✨ Windsurf Command 🌟  *************/
}

// Schema hasn't been registered for model "projects".
// Use mongoose.model() if you have defined a model for "projects".
// Use the model associated with your collection instead of creating a Model without a schema.
// Pass {strict: false} if you don't have a schema defined for the collection.
// See http://mongoosejs.com/docs/models.html#strict
/*******  4a19df3f-afa3-42aa-995a-120113472a89  *******/