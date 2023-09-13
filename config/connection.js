const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    'playcare_db',
    'root',
    '5959Ojj!',
    {
      host: '0.0.0.0',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

module.exports = sequelize;
