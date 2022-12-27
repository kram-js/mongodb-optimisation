class UsersManager extends Map {
	constructor(userId) {
		super();
		this.userId = userId;
	}
	getAndCreateIfNotExists() {
		return this.has(this.userId)
			? this.get(this.userIdId)
			: this.set(this.userId, new UserManager(this.userId)).get(this.userId);
	}
}

class UserManager extends Map {
	constructor(userId) {
		super();
		this.userId = userId;
		this.model = require("./model");
	}
	async sync() {
		const values = await this.model.findOne({ userId: this.userId });
		for (const key in values?.toObject()) {
			if (!key.includes("_")) this.set(key, values[key]);
		}
		return this;
	}
	async save() {
		const values = {};
		this.forEach((v, k) => (values[k] = v));
		(await this.model.findOne({ userId: this.userId }))
			? await this.model.updateOne(
					{ userId: this.userId },
					{ userId: this.userId, ...values }
			  )
			: await this.model.create({ userId: this.userId, ...values });

		return { userId: this.userId, ...values };
	}
}

exports.UsersManager = UsersManager;
