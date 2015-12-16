var express = require('express');

var authRouter = express.Router();

var mongodb = require('mongodb').MongoClient;

var passport = require('passport');

var router = function(){
    authRouter.route('/signUp')
        .post(function(req, res) {
        console.log(req.body);
        var url = 'mongodb://cmarshall:Cg24900610#@ds059694.mongolab.com:59694/multivision'; //'mongodb//localhost:27017/libraryApp';
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('users');
            var user = {
                username: req.body.userName,
                password: req.body.password
            };
            collection.insert(user, function(err, results) {
                req.login(results, function() {
            res.redirect('/auth/profile');
        });
            });
        });
    });
    authRouter.route('/signIn')
    .post(passport.authenticate('local', {
        failureRedirect: '/'
    }), function(req, res) {
        res.redirect('/auth/profile');
    });
    authRouter.route('/profile')
    .all(function(req, res, next) {
        if(!req.user) {
            res.redirect('/');
        }
        next();  //if req.user doesnt exist, will kick back to home/index
    })
    .get(function(req, res) {
        res.json(req.user); //how passport lets you know this guy signed and here is his info
    });
    
    return authRouter;
};


module.exports = router;