const path = require('node:path');

const uploadSingleFile = async (fileObject) => {
    let fileOriginName = path.basename(fileObject.name, path.extname(fileObject.name));
    let extName = path.extname(fileObject.name);
    let fileName = `${fileOriginName}-${+new Date().getTime()}${extName}`;
    let uploadPath = path.resolve(__dirname, '../public/images/upload/', fileName);
    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            error: null,
            path: fileName
        }
    } catch (error) {
        return {
            status: 'failed',
            error: error,
            path: null
        }
    }
}

const uploadMultipleFiles = async (fileArray) => {
    let resultArray = [];
    let countSuccess = 0;
    try {
        for (let i = 0; i < fileArray.length; i++) {
            let fileObject = fileArray[i];
            let fileOriginName = path.basename(fileObject.name, path.extname(fileObject.name));
            let extName = path.extname(fileObject.name);
            let finalName = `${fileOriginName}-${+new Date().getTime()}${extName}`;
            let uploadPath = path.resolve(__dirname, '../public/images/upload/', finalName);
            // Use the mv() method to place the file somewhere on your server
            try {
                await fileObject.mv(uploadPath);
                resultArray.push({
                    status: 'success',
                    error: null,
                    fileName: fileObject.name,
                    path: finalName
                });
                countSuccess++;
            } catch (error) {
                resultArray.push({
                    status: 'failed',
                    error: error,
                    fileName: fileObject.name,
                    path: null
                });
            }
        }
        return {
            countSuccess: countSuccess,
            detail: resultArray
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles
}