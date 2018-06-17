var mongoose= require('mongoose');
var defaults=require('../config/default');
mongoose.connect(defaults.defaults.mongoDB);