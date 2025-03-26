require("dotenv").config();
const mongoose = require("mongoose");

var dbState = [{
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

// Create the connection to database
const connection = async () => {
    try {
        await mongoose.connect('mongodb://root:123456@127.0.0.1:27017');
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value == state).label, "to db");
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = connection;
