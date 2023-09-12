const sequelize = require('../config/connection');
const { Child } = require('../models');

const childData = require('./childData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const children = await Child.bulkCreate(childData, {
    individualHooks: true,
    returning: true,
  });

  // Inserting the children data into the child table
  for (const child of children) {
    await Child.create({
      ...child,
    });
  }

  process.exit(0);
};

seedDatabase();
