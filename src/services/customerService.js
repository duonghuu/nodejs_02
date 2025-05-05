const Custommer = require("../models/customer");
const createCustomerService = async (formData) => {
    try {
        let result = await Custommer.create({
            name: formData.name,
            address: formData.address,
            phone: formData.phone,
            email: formData.email,
            image: formData.image,
            description: formData.description
        });
        return result;
    } catch (error) {
        return null;
    }
}

const createArrayCustomerService = async (arrData) => {
    try {
        let result = await Custommer.insertMany(arrData);
        return result;
    } catch (error) {
        return null;
    }
}

const getAllCustomerService = async () => {
    try {
        let result = await Custommer.find({});
        return result;
    } catch (error) {
        return null;
    }
}

const updateCustomerById = async (id, name, email, city) => {
    try {
        const result = await Custommer.updateOne({ _id: id }, { name, email, city });
        return result;
    } catch (error) {
        return null;
    }
};

module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomerService,
    updateCustomerById
}