const Child = require('./Child');
const Schedule = require('./Schedule');
const User = require('./User');

Schedule.belongsTo(Child, {
  foreignKey: 'child_id'
});

Child.hasOne(Schedule, {
  foreignKey:'child_id'
});

module.exports = {Child, User, Schedule};