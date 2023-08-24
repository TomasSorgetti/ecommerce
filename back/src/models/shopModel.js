const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Shoping",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "Shoping",
    }
  );
};
