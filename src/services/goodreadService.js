var http = require('http');
var xml2js = require('xml2js');

var parser = xml2js.Parser({explicitArray: false});

var goodreadService = function(){
    
    var getBookById = function(id, cb) {
        
        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/' + id + '?format=xml&key=v28mPTZvF7Yrzsrsj3GAcQ'
        };
        
        var callback = function(response) {
            var str = '';
            
            response.on('data', function(chunk) {
                str += chunk;
            });
            response.on('end', function() {
                console.log(str);
                parser.parseString(str, function(err, result) {
                     cb(null, result.GoodreadsResponse.book);
        
            });
        });
        };
       
    
    http.request(options, callback).end();
    
    };
    return {
        getBookById: getBookById
    };

};
 
module.exports = goodreadService;