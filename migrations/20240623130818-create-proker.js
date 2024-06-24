'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prokers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pelaksanaan: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Pelaksanaans',
          },
          key: 'id',
        },
        allowNull: false,
      },
      nama_proker: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isi_evaluasi: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      progress: {
        type: Sequelize.STRING,
        defaultValue: '0',
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prokers');
  }
};