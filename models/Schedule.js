const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Schedule extends Model {

}
Schedule.init(
  {
    monday: {type:DataTypes.BOOLEAN},
    tuesday: {type:DataTypes.BOOLEAN},
    wednesday: {type:DataTypes.BOOLEAN},
    thursday: {type:DataTypes.BOOLEAN},
    friday: {type:DataTypes.BOOLEAN},
    child_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'child',
        key:'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'schedule',
  }
);
module.exports = Schedule;
