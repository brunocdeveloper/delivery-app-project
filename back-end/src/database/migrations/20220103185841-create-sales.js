module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      totalPrice: {
        allowNull: false,
        field: 'total_price',
        type: Sequelize.DECIMAL(9, 2),
      },
      deliveryAddress: {
        allowNull: false,
        field: 'delivery_address',
        type: Sequelize.STRING(100),
      },
      deliveryNumber: {
        allowNull: false,
        field: 'delivery_number',
        type: Sequelize.STRING(50),
        },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date',
        defaultValue: Sequelize.fn('now')
        },
      status: {      
        allowNull: false,  
        type: Sequelize.STRING(50),
        defaultValue: 'Pendente',
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: true,
      },
      sellerId: {
        type: Sequelize.INTEGER,
        field: 'seller_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  },
};