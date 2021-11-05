const User = require('./User');
const Forum = require('./Forum');
const Comment = require('./Comment');

//TODO:
User.hasMany(Forum, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Forum.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Forum.hasMany(Comment, {
  foreignKey: 'forum_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Forum, {
  foreignKey: 'forum_id',
});

module.exports = { User, Project };
