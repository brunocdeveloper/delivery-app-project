module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Products',
      [{
        id: 1,
        name: 'Lasanha',
        price: 20.10,
        url_image: 'www.imagem',
      },     
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};