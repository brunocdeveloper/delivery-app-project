module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('SalesProducts',
      [
        {
          sale_id: 1,
          product_id: 1,
          quantity: 20
        },        

      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('SalesProducts', null, {});
  },
};
