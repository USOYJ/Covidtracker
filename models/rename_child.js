const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Child extends Model {}

Child.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
    }
  },
  {
    // When adding hooks via the init() method, they go below
    // hooks: {
    //   // Use the beforeCreate hook to work with data before a new instance is created
    //   beforeCreate: async (newChildData) => {
    //     // In this case, we are taking the user's email address, and making all letters lower case before adding it to the database.
    //     newChildData.email = await newUserData.email.toLowerCase();
    //     return newUserData;
    //   },
    //   // Here, we use the beforeUpdate hook to make all of the characters lower case in an updated email address, before updating the database.
    //   beforeUpdate: async (updatedChildData) => {
    //     updatedChildData.email = await updatedUserData.email.toLowerCase();
    //     return updatedUserData;
    //   },
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'child',
  }
);

module.exports = Child;
