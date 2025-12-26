
const { DataTypes } = require("sequelize");
module.exports = (sequelize) => sequelize.define("Inventory", {
  quantity: { type: DataTypes.FLOAT, defaultValue: 0 }
});
