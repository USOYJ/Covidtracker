const { firstname } = require('../models');

const firstnameData = [
  {
    title: 'Brandon',
    user_id: 1,
  },
  {
    title: 'Akash',
    user_id: 2,
  },
  {
    title: 'Tiffany',
    user_id: 3,
  },
  {
    title: 'Katie',
    user_id: 4,
  },
];

const seedFirstnames = () => firstname.bulkCreate(firstnameData);

module.exports = seedFirstnames;
