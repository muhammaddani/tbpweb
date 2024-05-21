var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profil', function(req, res, next) {
  res.render('lihatprofil', { title: 'Profil' });
});

module.exports = router;
