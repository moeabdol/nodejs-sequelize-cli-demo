'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Product;
};
