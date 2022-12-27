const mongoose = require("mongoose");

const UsersModel = new mongoose.Schema({
	userId: String,
	username: String,
});

module.exports = mongoose.model("users", UsersModel);
