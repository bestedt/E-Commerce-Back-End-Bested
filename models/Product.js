// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
//aded id column and set as primary key
    id : {
      type : DataTypes.INTEGER,
      allowNull : false,
      primaryKey : true,
      autoIncrement : true
    },
//added product_name column and set as string
    product_name : {
      type : DataTypes.STRING,
      allowNull : false
    },  
//added price column and set as decimal
    price : {
      type : DataTypes.DECIMAL(10,2),
      allowNull : false,
      validate : {
        isDecimal : true
      }
    },  
//added stock column and set as integer
    stock : {
      type : DataTypes.INTEGER,
      allowNull : false,
      defaultValue : 10,
      validate : {
        isNumeric : true
      }
    },
//added category_id column and set as integer
    category_id : {
      type : DataTypes.INTEGER,
      references : {
        model : 'category',
        key : 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
