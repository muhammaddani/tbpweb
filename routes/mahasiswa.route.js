var express = require('express');
var router = express.Router();
const verifyToken= require ('../middleware/validtoken.middleware');
const role= require ('../middleware/checkrole.middleware');
const { changePassword }= require ('../controller/auth.controller');

// router.use(role('mahasiswa'));

router.get('/home', verifyToken, function(req, res) {// akses data
  // Menampilkan data user
  const userId = req.userId;
  const userEmail = req.userEmail;
  const userName = req.userName;
  const userNim = req.userNim;
  const userRole = req.userRole;

  // Sekarang Anda dapat menggunakan data ini sesuai kebutuhan
  res.render('home', { userId,userEmail,userName, userNim,userRole });//akses front end
});


router.get('/mahasiswa/profil', verifyToken, function(req, res, next) {
  // Menampilkan data user
  const userId = req.userId;
  const userEmail = req.userEmail;
  const userName = req.userName;
  const userNim = req.userNim;
  const userRole = req.userRole;
  // Sekarang Anda dapat menggunakan data ini sesuai kebutuhan
  res.render('lihatprofil', { userId,userEmail,userName, userNim,userRole  });
});


router.get('/mahasiswa/ubah-pw',verifyToken, function(req, res, next) {
  const userId = req.userId;
  const userEmail = req.userEmail;
  const userName = req.userName;
  const userNim = req.userNim;
  const userRole = req.userRole;
  // Sekarang Anda dapat menggunakan data ini sesuai kebutuhan
  res.render('ubah-pw', { userId,userEmail,userName, userNim,userRole  });
});

router.post('/change-password', verifyToken, async (req, res) => {
  try {
    await changePassword(req, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});


module.exports = router;