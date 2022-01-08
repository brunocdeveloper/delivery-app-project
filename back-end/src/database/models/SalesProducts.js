module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts',
    {
      saleId: { type: DataTypes.INTEGER, field: 'sale_id' },
      productId: { type: DataTypes.INTEGER, field: 'product_id'},
      quantity: DataTypes.INTEGER
    }, 
    { timestamps: false,
      tableName: 'salesProducts' });
    salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    },
    {
      tableName: 'sales_products',
    });
  };

  return salesProducts;
};