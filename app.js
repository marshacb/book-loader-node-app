var express = require('express');

var app = express(); //gives an instance of express

var port = process.env.PORT || 5000;

var nav =  [{
                Link: '/Books',
                Text: 'Book'
        }, {
                Link: '/Authors',
                Text: 'Author'
        }];

var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public')); //whatever is put here is used by express first before anything else

app.set('views', './src/views');
app.set('view engine', 'ejs');




app.use('/Books', bookRouter)

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

app.get('/books', function (req, res) {
    res.send('Hello Books!');
});
app.listen(port, function (err) {
    console.log('running server on port ' + port);
}); //callback is a function that is executed