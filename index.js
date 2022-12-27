const mongoose = require("mongoose"),
	{ Managers } = require("./Managers/index"),
	managers = new Managers();

mongoose.connect("Database-URL").then(() => {
	console.log("Database logged in!");
});
