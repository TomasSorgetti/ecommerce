require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const userModel = require("./models/userModel");
const addressModel = require("./models/addressModel");
const productModel = require("./models/productModel");
const shopModel = require("./models/shopModel");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false }
);

userModel(sequelize);
addressModel(sequelize);
productModel(sequelize);
shopModel(sequelize);


const { user, address, product, Shoping } = sequelize.models;

user.belongsToMany(address, { through: "UserAddress" });
address.belongsToMany(user, { through: "UserAddress" });

product.belongsToMany(user, { through: "Favoritos" });
user.belongsToMany(product, { through: "Favoritos" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
