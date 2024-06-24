const { Proker } = require('../models');

const getAllProkers = async (req, res) => {
  try {
    const prokers = await Proker.findAll();
    res.render('monitoring', { prokers });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
};

module.exports = {
  getAllProkers,
};

