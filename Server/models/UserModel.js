const mongoose = require("mongoose");
const { Schema } = mongoose;

const userChema = new Schema({
    Name: String,
    userID: String,
    Balance: Number,
    WalletAddress: String,
    createdAt: { type: Date, default: Date.now }
});

const UserModel = mongoose.model("UserModel", userChema);
module.exports = UserModel;