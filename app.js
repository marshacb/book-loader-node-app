var express = require('express');
var bodyParser = require('body-parser');   //autmatically parses the body of request as json object
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = express(); //gives an instance of express

var port = process.env.PORT || 5000;


var nav = [{
    Link: '/Books',
    Text: 'Book'
        }];

var bookRouter = require('./src/routes/bookRoutes')(nav);

var adminRouter = require('./src/routes/adminRoutes')(nav);

var authRouter = require('./src/routes/authRoutes')(nav);


app.use(bodyParser.json()); //looks to see if there is a body coming in thats json and url encoded bodies and create an object for us
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({secret : 'library'}));
require('./src/config/passport')(app);
app.use(express.static('public')); //whatever is put here is used by express first before anything else


app.set('views', './src/views');
app.set('view engine', 'ejs');




app.use('/Books', bookRouter);  //middleware, loads router into app
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);


app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }]
    });
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
}); //callback is a function that is executed