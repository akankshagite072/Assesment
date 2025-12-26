
const { DataTypes } = require("sequelize");
module.exports = (sequelize) => sequelize.define("Product", {
  name: { type: DataTypes.STRING, allowNull: false },
  casNumber: { type: DataTypes.STRING, unique: true, allowNull: false },
  unit: { type: DataTypes.STRING, allowNull: false }
});
