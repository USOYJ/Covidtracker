const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Firstname = sequelize.define('firstname', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Firstname;
