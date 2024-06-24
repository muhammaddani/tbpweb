'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelaksanaan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pelaksanaan.init({
    id_lokasi: DataTypes.INTEGER,
    nama_dosbim: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pelaksanaan',
  });
  return Pelaksanaan;
};