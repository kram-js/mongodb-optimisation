class GuildsManager extends Map {
	constructor(guildId) {
		super();
		this.guildId = guildId;
	}
	getAndCreateIfNotExists() {
		return this.has(this.guildId)
			? this.get(this.guildId)
			: this.set(this.guildId, new GuildManager(this.guildId)).get(
					this.guildId
			  );
	}
}

class GuildManager extends Map {
	constructor(guildId) {
		super();
		this.guildId = guildId;
		this.model = require("./model");
	}
	async save() {
		const values = {};
		this.forEach((v, k) => (values[k] = v));
		(await this.model.findOne({ guildId: this.guildId }))
			? await this.model.updateOne(
					{ guildId: this.guildId },
					{ guildId: this.guildId, ...values }
			  )
			: await his.model.create({ guildId: this.guildId, ...values });
		return { guildId: this.guildId, ...values };
	}
}

exports.GuildsManager = GuildsManager;
