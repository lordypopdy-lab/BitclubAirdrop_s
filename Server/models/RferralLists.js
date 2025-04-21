const mongoose = require("mongoose");
const { Schema } = mongoose;

const referralSchema = new Schema({
    referedBy: {
        type: String
    },
    referralCode: {
        type: String,
        required: true,
    },
    req_date: {
        type: Date
    }
})

const referralListModel = mongoose.model("refList", referralSchema);

module.exports = referralListModel;