const sequelize = require('../config/connection');
const seedFirstnames = require('./firstname');
const seedLastnames = require('./lastname');
const seedParentsemail = require('./parentsemail');
const seedParentsphone = require('./parentsphone');
const childData = require('./childData.json');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedFirstnames();
    await seedLastnames();
    await seedParentsemail();
    await seedParentsphone();

    // Seeding childData or other data, if needed
    const children = await Child.bulkCreate(childData, {
      individualHooks: true,
      returning: true,
    });

    console.log(`Successfully seeded ${children.length} children.`);
    console.log('Successfully seeded firstname, lastname, parentsemail, parentsphone, etc.');

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    process.exit(0);
  }
};

seedAll();




