const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "address",
    {
      street: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      streetNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      celphoneContact: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableNAme: "address",
    }
  );
};
