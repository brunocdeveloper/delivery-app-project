module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        id: 1,
        seller_id: 1,
        user_id: 1,
        total_price: 10.30,
        delivery_address: 'SP',
        delivery_number: 'XABLAU',
        sale_date: new Date('2011-08-01T19:58:00.000Z'),
        status: 'vendido'
      },     
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};