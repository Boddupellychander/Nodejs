var express = require('express');
var cors = require('cors'); // We will use CORS to enable cross origin domain requests.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var app = express();

var schemaName = new Schema({
    request: String,
    time: Number
}, {
    collection: 'salary'
});

var Model = mongoose.model('Model', schemaName);
mongoose.connect('mongodb://localhost:27017/HRMS');

var port = process.env.PORT || 4200;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});