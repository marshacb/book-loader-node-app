var express = require('express');

var app = express(); //gives an instance of express

var port = process.env.PORT || 5000;

process.env.NODE_ENV = 'development';

var url = 'localhost'

if (process.env.NODE_ENV = 'development') {
    url = 'mongodb://localhost:27017/libraryApp';
} else {
    url = 'mongodb://cmarshall:Cg24900610#@ds059694.mongolab.com:59694/multivision';
}

var nav = [{
    Link: '/Books',
    Text: 'Book'
        }, {
    Link: '/Authors',
    Text: 'Author'
        }];

var bookRouter = require('./src/routes/bookRoutes')(nav);

var adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.static('public')); //whatever is put here is used by express first before anything else

app.set('views', './src/views');
app.set('view engine', 'ejs');




app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
}); //callback is a function that is executed