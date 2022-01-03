module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    user_id: { type: DataTypes.INTEGER, foreignKey: true },
    seller_id: { type: DataTypes.INTEGER, foreignKey: true },
    sale_date: { type: DataTypes.DATE },
    status: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'Sales',
  });
  Sales.associate = (models) => {
    Sales.belongsTo(models.Users,
      { foreignKey: 'user_id', as: 'user' },
      { foreignKey: 'seller_id', as: 'seller' });
    };
  return Sales;
};