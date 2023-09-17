const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const today = new Date();

class Child extends Model { }

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
    parent_phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: true,
        len: [10, 10],
      },
    },
    admission_date: {
      type: DataTypes.DATE,
      defaultValue: today,
      // Show only the date portion by MM/DD/YYYY
      get() {
        return this.getDataValue('admission_date').toLocaleDateString('en-US');
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'child',
  }
);

module.exports = Child;
