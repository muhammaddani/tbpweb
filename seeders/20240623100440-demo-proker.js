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
    await queryInterface.bulkInsert('Prokers', [{
      id_pelaksanaan: 1,
      nama_proker: 'Bangun Terasering',
      isi_evaluasi: 'lorem ipsum',
      progress: '10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_pelaksanaan: 1,
      nama_proker: 'Bangun Website',
      isi_evaluasi: 'lorem ipsum',
      progress: '25',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_pelaksanaan: 1,
      nama_proker: 'Bangun Tidur',
      isi_evaluasi: 'lorem ipsum',
      progress: '99',
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
