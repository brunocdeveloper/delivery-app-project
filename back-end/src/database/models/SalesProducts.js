module.exports = (sequelize, DataTypes) => {
  const sales_products = sequelize.define('sales_products',
    {
      quantity: DataTypes.INTEGER
    }, { timestamps: false });

    sales_products.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: sales_products,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: sales_products,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
  };

  return sales_products;
};