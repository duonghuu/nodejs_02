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

module.exports = {
    createCustomerService
}