const mongoose = require("mongoose");
const { Schema } = mongoose;

const referralSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    profitMade: {
        type: Number,
        default: 0
    },
    referralLink: {
        type: String,
        unique: true
    },
    referralCode: {
        type: String,
        required: true,
    },
    req_date: {
        type: Date
    }
})

const referralLinkModel = mongoose.model("refLink", referralSchema);

module.exports = referralLinkModel;