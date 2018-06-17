var Accounts = require('../models/accounts.server.model.js');
exports.get = function (req, res) {
   
    var limit = parseInt(req.query.$limit) || 10;
    var skip = parseInt(req.query.$skip) || 0;
    let total=0;
    var searchQuery = {};
    if (req.query.number) {
        if (req.query.number.$like)
            searchQuery = { "number": new RegExp(req.query.number.$like) }
    }
    var query = Accounts.find(searchQuery).sort({ number: 'desc' }).limit(limit).skip(skip);
    
    Accounts.find(searchQuery).count().exec().then(function (count) {
        total=count;
        query.exec(function (err, results) {
          
            
            res.json({ skip, limit,total, data: results });
        });
        });

   
   

} 