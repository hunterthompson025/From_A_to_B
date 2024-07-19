const User = require('./User');
const Car = require('./Car');
const Comment = require('./Comment');

User.hasMany(Car, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Car.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Car.hasMany(Comment, {
  foreignKey: 'car_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Car, {
  foreignKey: 'car_id'
});

module.exports = {Car, User, Comment};
