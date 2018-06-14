var express = require('express');
var router = express.Router();
accountsCtrl=require('../controllers/accounts.server.controller.js');
/* GET home page. */


router.get('/', function(req, res, next) {
 accountsCtrl.get(req,res);
});

module.exports = router;
