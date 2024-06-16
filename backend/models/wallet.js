const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  balance: { type: Number, required: true },
  dateCreated: { type: Date, default: Date.now },
});

const Wallet = mongoose.model("Wallet", walletSchema);

module.exports = Wallet;
