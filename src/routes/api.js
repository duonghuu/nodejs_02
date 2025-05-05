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
const { postCreateCustomerAPI, postCreateArrayCustomerAPI, getCustomerAPI, putUpdateCustomerAPI } = require("../controllers/customerController");

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", postUploadSingleFileAPI);
routerAPI.post("/files", postUploadMultipleFilesAPI);

routerAPI.get("/customers", getCustomerAPI);
routerAPI.put("/customers", putUpdateCustomerAPI);
routerAPI.post("/customers", postCreateCustomerAPI);
routerAPI.post("/customers-many", postCreateArrayCustomerAPI);

module.exports = routerAPI;
