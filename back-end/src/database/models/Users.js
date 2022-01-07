module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
  });
  users.associate = (models) => {
    users.hasMany(models.sales,
      { foreignKey: 'userId', as: 'user' },
      { foreignKey: 'sellerId', as: 'seller' });
    };

  return users;
};
