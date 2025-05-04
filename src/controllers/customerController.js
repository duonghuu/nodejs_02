const { createCustomerService } = require("../services/customerService");
const { uploadSingleFile } = require("../services/fileService");

module.exports = {
    postCreateCustomerAPI: async (req, res) => {
        let {name, address, phone, email, description} = req.body;
        let imageUrl = "";
        if (!req.files || Object.keys(req.files).length === 0) {
        } else {
            let fileObject;
            fileObject = req.files.image;
            let result = await uploadSingleFile(fileObject);
            imageUrl = result.path;
        }

        try {
            let formData = {
                name: name,
                address: address,
                phone: phone,
                email: email,
                image: imageUrl,
                description: description
            }
            let customer = await createCustomerService(formData);
            return res.status(200).json({
                errorCode: 0,
                data: customer
            })
            
        } catch (error) {
            return res.status(500).json({
                errorCode: 1,
                errorMessage: error
            })
        }
    },
}