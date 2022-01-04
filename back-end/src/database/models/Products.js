module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'products',
  });
  products.associate = (models) => {
    products.hasMany(models.products,
      { foreignKey: 'product_id', as: 'product' });
    };

  return products;
};
