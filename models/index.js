const Child = require('./rename_child');
const Schedule = require('./rename_schedule');
const User = require('./User');

Schedule.belongsTo(Child, {
  foreignKey: 'child_id'
});

Child.hasOne(Schedule, {
  foreignKey:'child_id'
});

module.exports = {Child, User, Schedule};