const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Car extends Model {}


Car.init(
  {
    vin: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transmission: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fuel_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exterior_color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    interior_color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'car',
  }
);

module.exports = Car;

