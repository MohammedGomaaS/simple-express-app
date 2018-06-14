var express = require('express');
var router = express.Router();
accountsCtrl=require('../controllers/accounts.server.controller.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
