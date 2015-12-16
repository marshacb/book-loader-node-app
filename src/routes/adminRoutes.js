var express = require('express');

var adminRouter = express.Router();

var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Toltstoy',
        bookId: 656,
        read: false
},
    {
        title: 'Great CGatsby',
        genre: 'Historical Fiction',
        author: 'C C M',
        read: false
},
    {
        title: 'Les Miserables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        bookId: 24280,
        read: false
}
            ]; 

var router = function(nav){
    
    adminRouter.route('/addBooks')
    .get(function(req, res){
        
      /*  var url = process.env.PORT;
        
            if(process.env.NODE_ENV = 'development')
                {
                    url = 'mongodb://localhost:27017/libraryApp';
                }
            else {
                url = 'mongodb://cmarshall:Cg24900610#@ds059694.mongolab.com:59694/multivision';
            }*/
        
       var MongoLabUri = 'mongodb://cmarshall:Cg24900610#@ds059694.mongolab.com:59694/multivision';
        
       var url =  MongoLabUri; //||  'mongodb://localhost:27017/libraryApp';
    
        
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');
         //  collection.insertMany(books, function(err, results){
            //   res.send(results);
               db.close();
            });
            
        });
        
      //  res.send('inserting books');
   // });
    
    return adminRouter;
};

module.exports = router;