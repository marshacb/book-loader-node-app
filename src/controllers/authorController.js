//revealing module pattern

var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var authorController = function(nav){
    var getIndex = function (req, res) {
        
        var MongoLabUri = 'mongodb://cmarshall:Cg24900610#@ds059694.mongolab.com:59694/multivision';
        
            var url = MongoLabUri; //'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('authors');
                collection.find({}).toArray(function (err, results) {
                    res.render('authorListView', {
                        title: 'Authors',
                        nav: nav,
                        authors: results
                    });
                });
            });
        };
    
    }
    
    module.exports = authorController;
