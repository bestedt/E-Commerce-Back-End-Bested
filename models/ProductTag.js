const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
//added id column and set as primary key
    id: {
      type : DataTypes.INTEGER,
      allowNull : false,
      primaryKey : true,
      autoIncrement : true
    },
//added product_id column and set as integer
  product_id : {
    type : DataTypes.INTEGER,
    references : {
      model : 'product',
      key : 'id'
    }
  },
//added tag_id column and set as integer
  tag_id : {
    type : DataTypes.INTEGER,
    references : {
      model : 'tag',
      key : 'id'
    }
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
