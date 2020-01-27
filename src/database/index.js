const Sequelize = require("sequelize");

const dbConfig = require("../config/database");

const User = require("../models/User");

const Address = require("../models/Address");

const Tech = require("../models/Tech");

const db = new Sequelize(dbConfig);

User.init(db);
Address.init(db);
Tech.init(db);

User.associate(db.models);
Address.associate(db.models);
Tech.associate(db.models);

module.exports = db;
