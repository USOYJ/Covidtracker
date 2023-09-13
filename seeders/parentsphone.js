const { parentsphone } = require('../models');

const parentsphoneData = [
  {
    title: '123-456-7890',
    user_id: 1,
  },
  {
    title: '098-765-4321',
    user_id: 2,
  },
  {
    title: '123-123-1234',
    user_id: 3,
  },
  {
    title: '456-456-4567',
    user_id: 4,
  },
];

const seedParentsphone = () => parentsphone.bulkCreate(parentsphoneData);

module.exports = seedParentsphone;