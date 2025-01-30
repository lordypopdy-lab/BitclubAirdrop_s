const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  referrerId: { type: String, default: null },
  miningRewards: { type: Number, default: 0 },
  referralRewards: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);