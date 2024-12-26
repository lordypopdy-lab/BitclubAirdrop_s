const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
    Icon: String,
    Message: String,
    Value: Number,
    TaskID: String,
    Link: String,
    ButtonStatus: String,
    createdAt: { type: Date, default: Date.now }
});

const TaskModel = mongoose.model("TaskModel", taskSchema);

module.exports = TaskModel;