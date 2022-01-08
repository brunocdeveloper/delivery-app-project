module.exports = (sequelize, DataTypes) => {
  const sales_products = sequelize.define('sales_products',
    {
      saleId: { type: DataTypes.INTEGER, field: 'sale_id' },
      productId: { type: DataTypes.INTEGER, field: 'product_id'},
      quantity: DataTypes.INTEGER
    }, 
    { timestamps: false,
      tableName: 'sales_products' });
    sales_products.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: sales_products,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: sales_products,
      foreignKey: 'saleId',
      otherKey: 'productId',
    },
    {
      tableName: 'salesProducts',
    });
  };

  return sales_products;
};