//revealing module pattern

var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var bookController = function (bookService, nav) {
    var getIndex = function (req, res) {

        var MongoLabUri = 'mongodb://cmarshall:Cg24900610#@ds059694.mongolab.com:59694/multivision';

        var url = MongoLabUri; //'mongodb://localhost:27017/libraryApp';

        mongodb.connect(url, function (err, db) {
            var collection = db.collection('books');
            collection.find({}).toArray(function (err, results) {
                res.render('bookListView', {
                    title: 'Books',
                    nav: nav,
                    books: results
                });
            });
        });
    };

    var getById = function (req, res) {
        var id = new objectId(req.params.id);


        var MongoLabUri = 'mongodb://cmarshall:Cg24900610#@ds059694.mongolab.com:59694/multivision';

        var url = MongoLabUri;


        mongodb.connect(url, function (err, db) {
            var collection = db.collection('books');
            collection.findOne({
                _id: id
            }, function (err, results) {
                if (results.bookId) {
                    bookService.getBookById(results.bookId, function (err, book) {
                        results.book = book;
                        res.render('bookView', {
                            title: 'Books',
                            nav: nav,
                            book: results
                        });

                    });

                } else {
                    res.render('bookView', {
                        title: 'Books',
                        nav: nav,
                        book: results
                    })
                };

            });


        });
    };

    var middleware = function (req, res, next) {
        //if(!req.user) {
        // res.redirect('/');
        //   }
        next();
    };

    return {
        getIndex: getIndex,
        getById: getById,
        middleware: middleware
    }
}

module.exports = bookController;