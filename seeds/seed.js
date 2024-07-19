const sequelize = require('../config/connection');
const { User, Car } = require('../models');


const userData = require('./userData.json');
const carData = require('./car.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const car of carData) {
    await Car.create({
      ...car,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
