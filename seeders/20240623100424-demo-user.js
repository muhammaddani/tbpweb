const bcrypt = require('bcrypt');
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
    await queryInterface.bulkInsert('Users', [{
      email: 'kel6@gmail.com',
      password: await bcrypt.hash('kel6',10),
      name: 'Kelompok Enam',
      nim: '2211520000',
      nip: '',
      fakultas: 'Fakultas Teknologi Informasi',
      departemen: 'Sistem Informasi',
      role:'mahasiswa',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'admin@gmail.com',
      password: await bcrypt.hash('admin',10),
      name: 'Admin',
      nim: '',
      nip: '',
      fakultas: '',
      departemen: '',
      role:'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'dosbim@gmail.com',
      password: await bcrypt.hash('dosbim',10),
      name: 'Dosen Pembimbing',
      nim: '',
      nip: '1952848520548',
      fakultas: 'Fakultas Kedokteran',
      departemen: 'Psikologi',
      role:'dosbim',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'dani@gmail.com',
      password: await bcrypt.hash('dani',10),
      name: 'Muhammad Dani Noar',
      nim: '2211522037',
      nip: '',
      fakultas: 'Fakultas Teknologi Informasi',
      departemen: 'Sistem Informasi',
      role:'mahasiswa',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
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
