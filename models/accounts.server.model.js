var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var accountsSchema = new Schema({
     number:String,
     totalServices:Number,
     totalBill:Number
 });
 module.exports= mongoose.model('accounts',accountsSchema);