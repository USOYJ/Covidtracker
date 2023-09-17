/* eslint-disable no-unused-vars */
const sequelize = require('../config/connection');
const { Child} = require('../models');

const childData = require('./childData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const children = await Child.bulkCreate(childData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();




