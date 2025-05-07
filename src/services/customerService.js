const Customer = require("../models/customer");
const createCustomerService = async (formData) => {
    try {
        let result = await Customer.create({
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
        let result = await Customer.insertMany(arrData);
        return result;
    } catch (error) {
        return null;
    }
}

const getAllCustomerService = async (limit, page) => {
    try {
        let result = null;
        let skip = (page - 1) * limit;
        if (limit && page) {
            result = await Customer.find({}).limit(limit).skip(skip).exec();
        } else {
            result = await Customer.find({});
        }
        return result;
    } catch (error) {
        return null;
    }
}

const updateCustomerById = async (id, name, email, city) => {
    try {
        const result = await Customer.updateOne({ _id: id }, { name, email, city });
        return result;
    } catch (error) {
        return null;
    }
};

const deleteACustomerById = async (id) => {
    try {
        const result = await Customer.deleteById(id);
        return result;
    } catch (error) {
        return null;
    }
};

const deleteCustomersByIds = async (ids) => {
    try {
        const result = await Customer.delete({ _id: { $in: ids } });
        return result;
    } catch (error) {
        return null;
    }
};

module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomerService,
    updateCustomerById,
    deleteACustomerById,
    deleteCustomersByIds
}