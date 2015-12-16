var passport = require('passport');

module.exports = function(app) {
    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.serializeUser(function(user, done){
        done(null, user);
    });
    
    passport.deserializeUser(function(user, done){
        done(null, user);
    });
    
    require('./strategies/local.strategy')();
        
};


//serializeUser() bundles user up in session to store for later

//deserializeUser() pulls user back out of the session

//passporr-local  stores use password in database and checks against that
//also a passport google, passport facebook etc OAuth

