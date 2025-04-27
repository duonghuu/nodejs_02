require("dotenv").config();
const mongoose = require('mongoose');

// Create the connection to database

const dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];

const connection = async () => {
    const options = {
        useNewUrlParser: true,
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD
    }
    await mongoose.connect(process.env.DB_HOST, options,
    () => {
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value == state).label, "to database"); // connected to db
    });
};

module.exports = connection;
