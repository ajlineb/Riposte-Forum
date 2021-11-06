const sequelize = require('../config/connection');
const { User, Forum, Comment } = require('../models');

const userData = require('./userData.json');
const forumData = require('./forumData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log('\n----- DATABASE SYNCED -----\n');
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- USERS SEEDED -----\n');

  await Forum.bulkCreate(forumData);
  console.log('\n----- FORUMS SEEDED -----\n');

  await Comment.bulkCreate(commentData);
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
