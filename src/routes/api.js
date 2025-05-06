const express = require("express");
const routerAPI = express.Router();
const {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileAPI,
    postUploadMultipleFilesAPI
} = require("../controllers/apiController");
const { postCreateCustomerAPI, postCreateArrayCustomerAPI, getCustomerAPI, putUpdateCustomerAPI, deleteCustomerAPI, deleteArrayCustomerAPI } = require("../controllers/customerController");

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", postUploadSingleFileAPI);
routerAPI.post("/files", postUploadMultipleFilesAPI);

routerAPI.get("/customers", getCustomerAPI);
routerAPI.put("/customers", putUpdateCustomerAPI);
routerAPI.delete("/customers", deleteCustomerAPI);
routerAPI.post("/customers", postCreateCustomerAPI);
routerAPI.post("/customers-many", postCreateArrayCustomerAPI);
routerAPI.delete("/customers-many", deleteArrayCustomerAPI);

module.exports = routerAPI;
