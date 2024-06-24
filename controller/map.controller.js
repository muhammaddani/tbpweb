const { Lokasi } = require('../models');

const getMapData = async (req, res) => {
    try {
        const lokasis = await Lokasi.findAll();
        res.render('lokasi', { lokasis });
      } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
      }
    };

module.exports = {
    getMapData,
  };