module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Products',
  });
  Products.associate = (models) => {
    Products.hasMany(models.Products,
      { foreignKey: 'product_id', as: 'product' });
    };

  return Products;
};
