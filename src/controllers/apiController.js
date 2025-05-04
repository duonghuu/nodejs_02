const User = require("../models/user");
const { uploadSingleFile, uploadMultipleFiles } = require("../services/fileService");
const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results
    });
};

const postCreateUserAPI = async (req, res) => {
    let {email, name, city} = req.body
    let user = await User.create({name, email, city});
    return res.status(200).json({
        errorCode: 0,
        data: user
    });
};

const putUpdateUserAPI = async (req, res) => {
    let {email, name, city, userId} = req.body
    if (!userId) {
        return res.status(400).json({
            errorCode: 1,
            errorMessage: "Missing required params!"
        });
    }
    let user = await User.updateOne({ _id: userId }, { email, name, city });
    return res.status(200).json({
        errorCode: 0,
        data: user
    });
};

const deleteUserAPI = async (req, res) => {
    let { userId } = req.body
    if (!userId) {
        return res.status(400).json({
            errorCode: 1,
            errorMessage: "Missing required params!"
        });
    }
    let user = await User.deleteOne({ _id: userId });
    return res.status(200).json({
        errorCode: 0,
        data: user
    });
};

const postUploadSingleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            errorCode: 1,
            errorMessage: "Please select a file to upload."
        })
    }
    let fileObject;
    fileObject = req.files.image;
    let result = await uploadSingleFile(fileObject);
    return res.status(200).json({
        errorCode: 0,
        data: result
    });
}

const postUploadMultipleFilesAPI = async (req, res) => {
    let fileArray;
    fileArray = req.files.image;
    let result = await uploadMultipleFiles(fileArray);
    return res.status(200).json({
        errorCode: 0,
        data: result
    });
}

module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileAPI,
    postUploadMultipleFilesAPI
}