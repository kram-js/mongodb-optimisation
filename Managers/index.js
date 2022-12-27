const { GuildsManager } = require("./guilds");
const { UsersManager } = require("./users");

class Managers {
	guilds(guildId) {
		return new GuildsManager(guildId);
	}
	users(userId) {
		return new UsersManager(userId);
	}
}

exports.Managers = Managers;
