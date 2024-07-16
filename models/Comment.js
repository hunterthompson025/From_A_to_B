
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Car = require ('./Car');
class Comment extends Model {}

Comment.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      comment_text: {
        type: DataTypes.STRING
      },
      car_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Car',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        }
      }
    }, {
      sequelize,
      modelName: 'Comment'
    });

    module.exports = Comment;
  
