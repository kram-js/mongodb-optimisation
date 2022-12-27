const mongoose = require("mongoose");

const GuildsModel = new mongoose.Schema({
	guildId: String,
	prefix: String,
});

module.exports = mongoose.model("guilds", GuildsModel);
