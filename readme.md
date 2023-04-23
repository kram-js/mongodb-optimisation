> ### **_mongodb-optimisation_**

---

- By young2chen
- Using Mongoose@6

---

### **Installation**

```
npm i mongoose
```

---

### **Exemple**

```js
const mongoose = require("mongoose");
    { Managers } = require("./Managers"),
	managers = new Managers();

mongoose.connect("MongoDB-URL").then(async() => {
	console.log("Database logged in!");
    const guildManager =
     await managers.guilds("your-guildId").getAndCreateIfNotExists().sync();

    guildManager.set("prefix", "+").save();
});

```

---

### **Contacts**

> Errors / need help ? Discord: young2chen#3110
