'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Lokasis', [{
      id_peserta: 1,
      kota_kab: 'Jakarta Selatan',
      latitude: '-6.2614652',
      longitude: '106.810627',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_peserta: 2,
      kota_kab: 'Sijunjung',
      latitude: '-6.2614652',
      longitude: '106.810627',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
