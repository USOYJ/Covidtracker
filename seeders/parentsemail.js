const { parentsemail } = require('../models');

const parentsemailData = [
  {
    title: 'brandonpapa@email.com',
    user_id: 1,
  },
  {
    title: 'akashdada@email.com',
    user_id: 2,
  },
  {
    title: 'tiffmama@email.com',
    user_id: 3,
  },
  {
    title: 'kateyaya@email.com',
    user_id: 4,
  },
];

const seedParentsemail = () => parentsemail.bulkCreate(parentsemailData);

module.exports = seedParentsemail;