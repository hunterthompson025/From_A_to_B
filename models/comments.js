module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
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
    });
  
    return Comment;
  };