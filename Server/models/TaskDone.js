const mongoose = require("mongoose");
const { Schema } = mongoose;


const TaskDoneSchema = new Schema({
    UserID: String,
    TaskID: String,
    ButtonStatus: String,
    Icon: String,
    Link: String,
    Message: String,
    Value: Number,
    createdAt: { type: Date, default: Date.now }
})

TaskDoneSchema.index({ createdAt: 1 }, { expireAfterSeconds: 172800 });

const TaskDoneModel = mongoose.model("TaskDone", TaskDoneSchema);

module.exports = TaskDoneModel