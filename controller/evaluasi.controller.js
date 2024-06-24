const { Proker } = require('../models');

const eval = async (req, res) => {
  try {
    const prokers = await Proker.findAll();
    res.render('evaluasi', { prokers });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
};

module.exports = {
  eval,
};