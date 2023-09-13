const { lastname } = require('../models');

const lastnameData = [
  {
    title: 'Alexander',
    user_id: 1,
  },
  {
    title: 'Patel',
    user_id: 2,
  },
  {
    title: 'Pabon',
    user_id: 3,
  },
  {
    title: 'Anderson',
    user_id: 4,
  },
];

const seedLastnames = () => lastname.bulkCreate(lastnameData);

module.exports = seedLastnames;