var express = require('express');

var bookRouter = express.Router();

var router = function(nav){
    var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Toltstoy',
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
        read: false
}
            ];


bookRouter.route('/')
    .get(function (req, res) {
        res.render('bookListView', {
            title: 'Books',
            nav: nav,
            books: books
        });
    });

bookRouter.route('/:id')
    .get(function (req, res) {
       var id = req.params.id;
    
        res.render('bookView', {
            title: 'Books',
            nav: nav,
            book: books[id]
        });
    });
    
    return bookRouter;
}

module.exports = router;

