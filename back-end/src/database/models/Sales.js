module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    totalPrice: { type: DataTypes.DECIMAL, field: 'total_price' },
    deliveryAddress:{ type: DataTypes.STRING, field: 'delivery_address' },
    deliveryNumber: { type: DataTypes.STRING, field: 'delivery_number' },
    userId: { type: DataTypes.INTEGER, foreignKey: true, field: 'user_id' },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true, field: 'seller_id' },
    saleDate: { type: DataTypes.DATE, field: 'sale_date'},
    status: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'sales',
  });
  sales.associate = (models) => {
    sales.belongsTo(models.users,
      { foreignKey: 'userId', as: 'user' },
      { foreignKey: 'sellerId', as: 'seller' });
    };
  return sales;
};