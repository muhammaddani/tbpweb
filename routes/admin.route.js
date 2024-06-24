var express = require('express');
var router = express.Router();
const verifyToken= require ('../middleware/validtoken.middleware');
const role= require ('../middleware/checkrole.middleware');


// router.use(role('admin'));

router.get('/admin/dashboard', verifyToken, function(req, res, next) {
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
  res.render('admin/dashboard', { userId,userEmail,userName,userNim,userNip,userFakultas,userDepartemen,userRole });
});

//
module.exports = router;