const { createCustomerService, createArrayCustomerService, getAllCustomerService, updateCustomerById, deleteACustomerById, deleteCustomersByIds } = require("../services/customerService");
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
    postCreateArrayCustomerAPI: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers);
        if (customers) {
            return res.status(200).json({
                errorCode: 0,
                data: customers
            })
        } else {
            return res.status(500).json({
                errorCode: 1,
                errorMessage: "Error"
            })
        }
    },
    getCustomerAPI: async (req, res) => {
        let customers = await getAllCustomerService();
        if (customers) {
            return res.status(200).json({
                errorCode: 0,
                data: customers
            })
        } else {
            return res.status(500).json({
                errorCode: 1,
                errorMessage: "Error"
            })
        }
    },
    putUpdateCustomerAPI: async (req, res) => {
        let customer = await updateCustomerById(req.body.id, req.body.name, req.body.email, req.body.city);
        if (customer) {
            return res.status(200).json({
                errorCode: 0,
                data: customer
            })
        } else {
            return res.status(500).json({
                errorCode: 1,
                errorMessage: "Error"
            })
        }
    },
    deleteCustomerAPI: async (req, res) => {
        let { id } = req.body;
        let result = await deleteACustomerById(id);
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
    },
    deleteArrayCustomerAPI: async (req, res) => {
        // console.log('deleteArrayCustomerAPI',req.body.customersId);
        //[ '68189b9b440cf452644553b5', '68189b9b440cf452644553b6' ]
        let customers = await deleteCustomersByIds(req.body.customersId);
        if (customers) {
            return res.status(200).json({
                errorCode: 0,
                data: customers
            })
        } else {
            return res.status(500).json({
                errorCode: 1,
                errorMessage: "Error"
            })
        }
    },
}