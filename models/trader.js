const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const traderSchema = new mongoose.Schema({
	mail: { type: String, unique: true },
	profilePhoto: { type: String },
	bio: { type: String },
	tradingType: { type: String },
	performance: { type: String },
	holding: { type: Schema.Types.Object, ref: "Holding" },
	position: { type: Schema.Types.Object, ref: "Position" },
	paperTrade: { type: Schema.Types.Object, ref: "PaperTrade" },
	investor: { type: boolean },
	friends: [{ type: Schema.Types.Object, ref: "User" }],
});

module.exports = mongoose.model("Trader", traderSchema);
