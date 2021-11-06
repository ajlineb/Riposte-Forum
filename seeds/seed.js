const sequelize = require('../config/connection');
const { User, Forum, Comment } = require('../models');

const userData = require('./userData.json');
const forumData = require('./forumData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ alter: true, force: false });

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  console.log('\n----- DATABASE SYNCED -----\n');
  await userData();
  console.log('\n----- USERS SEEDED -----\n');

  await forumData();
  console.log('\n----- FORUMS SEEDED -----\n');

  await commentData();
  console.log('\n----- COMMENTS SEEDED -----\n');

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
