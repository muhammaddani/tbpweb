var express = require('express');
var router = express.Router();
const verifyToken= require ('../middleware/validtoken.middleware');
const role= require ('../middleware/checkrole.middleware');
const { changePassword }= require ('../controller/auth.controller');
const { getAllProkers } = require('../controller/proker.controller');
const { eval } = require('../controller/evaluasi.controller');
const { Proker } = require('../models');
const { getMapData } = require('../controller/map.controller');

// router.use(role('mahasiswa'));

router.get('/home', verifyToken, function(req, res) {// akses data
  // Menampilkan data user
  const userId = req.userId;
  const userEmail = req.userEmail;
  const userName = req.userName;
  const userNim = req.userNim;
  const userNip = req.userNip;
  const userFakultas = req.userFakultas;
  const userDepartemen = req.userDepartemen;
  const userRole = req.userRole;

  // Sekarang Anda dapat menggunakan data ini sesuai kebutuhan
  res.render('home', { userId,userEmail,userName,userNim,userNip,userFakultas,userDepartemen,userRole });//akses front end
});


router.get('/mahasiswa/profil', verifyToken, function(req, res, next) {
  // Menampilkan data user
  const userId = req.userId;
  const userEmail = req.userEmail;
  const userName = req.userName;
  const userNim = req.userNim;
  const userNip = req.userNip;
  const userFakultas = req.userFakultas;
  const userDepartemen = req.userDepartemen;
  const userRole = req.userRole;
  // Sekarang Anda dapat menggunakan data ini sesuai kebutuhan
  res.render('lihatprofil', { userId,userEmail,userName,userNim,userNip,userFakultas,userDepartemen,userRole });
});


router.get('/lokasi', (req, res) => {
  res.render('lokasi'); 
});

router.get('/mahasiswa/arsip', (req, res) => {
  res.render('arsip'); 
});

router.get('/mahasiswa/jurnal', (req, res) => {
  res.render('jadwal'); 
});

router.post('/change-password', verifyToken, async (req, res) => {
  try {
    await changePassword(req, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

router.get('/mahasiswa/monitoring', getAllProkers);

router.get('/mahasiswa/evaluasi', eval);

router.put('/api/prokers/:id', async (req, res) => {
  const prokerId = req.params.id;
  const { isi_evaluasi } = req.body;

  try {
    const proker = await Proker.findByPk(prokerId);

    if (!proker) {
      return res.status(404).json({ message: 'Proker not found' });
    }

    proker.isi_evaluasi = isi_evaluasi;
    await proker.save();

    res.json(proker);
  } catch (error) {
    console.error('Error updating proker:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/mahasiswa/forumdiskusi', async (req, res) => {
  res.render('forum');
});

module.exports = router;
