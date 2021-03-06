var express = require('express');
var app = express();
var cb0 = function(req, res, next) {
    console.log('CB0');
    next();
}
var cb1 = function(req, res, next) {
    console.log('CB1');
    next();
}
var cb2 = function(req, res) { res.send('Hello From C!'); }
app.get('/example/c', [cb0, cb1, cb2]);
/*var cb0 = function(req, res, next) { console.log('CB0');
    next(); }
var cb1 = function(req, res, next) { console.log('CB1');
    next(); }
app.get('/example/d', [cb0, cb1], function(req, res, next) {
    console.log('the response will be sent by the next function...');
    next('hello');
});*/

/*app.get('/example/b', function(req, res, next) {
    console.log('the response will be the next function...');
    next();
}, function(req, res) { res.send('Hello from U'); });*/
app.listen(4400, function() {
    console.log('Running...');
});