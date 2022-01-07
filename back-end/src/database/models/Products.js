module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: { type: DataTypes.STRING, field: 'url_image' },
  },
  {
    timestamps: false,
    tableName: 'products',
  });
  products.associate = (models) => {
    products.hasMany(models.sales_products,
      { foreignKey: 'productId', as: 'product' });
    };

  return products;
};
