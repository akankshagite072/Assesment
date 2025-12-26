const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "../database.sqlite"),
  logging: false
});

const db = {};

// Models
db.User = require("./User")(sequelize, DataTypes);
db.Product = require("./Product")(sequelize, DataTypes);
db.Inventory = require("./Inventory")(sequelize, DataTypes);

// Associations
db.Product.hasOne(db.Inventory);
db.Inventory.belongsTo(db.Product);

// Sequelize
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
