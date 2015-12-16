var express = require('express');

var authorRouter = express.Router();

var mongodb = require('mongodb').MongoClient;

var objectId = require('mongodb').ObjectID;



var router = function (nav) {
    
        var authorController = require('../controllers/authorController')();
    
     
   

    
    return authorRouter;
};

module.exports = router;