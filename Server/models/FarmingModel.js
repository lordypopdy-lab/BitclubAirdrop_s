const mongoose = require("mongoose");

const farmingSchema = new mongoose.Schema({
  userId: {
    type: String, 
    required: true,
    unique: true,
  },
  farmingStartTime: {
    type: Date, 
    required: true,
  },
  tokenBalance: {
    type: Number,
    default: 0.0,
  },
  claimed: {
    type: Boolean,
    default: false,
  },
  farmingDuration: {
    type: Number, 
    default: 3 * 60 * 60 * 1000, 
  },
});

const Farming = mongoose.model("Farming", farmingSchema);

module.exports = Farming;
