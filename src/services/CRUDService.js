const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM users');
    return results
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query(`SELECT * FROM users WHERE id = ${userId}`);
    return results && results.length > 0 ? results[0] : {}
};

module.exports = {
    getAllUsers,
    getUserById
}