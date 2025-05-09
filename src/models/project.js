const { default: mongoose, Schema } = require("mongoose");
var mongoose_delete = require('mongoose-delete');

const customerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    startDate: String,
    endDate: String,
    customerInfo: customerSchema,
    usersInfo: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    leader: userSchema,
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
}, {timestamps: true});

projectSchema.plugin(mongoose_delete, {overrideMethods: 'all'});

const Project = mongoose.model('project', projectSchema);
module.exports = Project;