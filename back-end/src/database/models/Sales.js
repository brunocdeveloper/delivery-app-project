module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true,  field: 'user_id' },
    seller_id: { type: DataTypes.INTEGER, foreignKey: true },
    sale_date: { type: DataTypes.DATE },
    status: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'sales',
  });
  sales.associate = (models) => {
    sales.belongsTo(models.users,
      { foreignKey: 'user_id', as: 'user' },
      { foreignKey: 'seller_id', as: 'seller' });
    };
  return sales;
};