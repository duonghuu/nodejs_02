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

module.exports = {
    uploadSingleFile
}