var express = require('express');
//var {mongoclient} = require('mongodb');
//var client = new mongoclient(uri);
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
//var URL = 'mongodb://127.0.0.1:27017/mainDB';
var connectionString = "mongodb://127.0.0.1:27017/HRMS"
var db;
var app = express();
var router = express.Router();
//var path =
//app.get('/', function(req, res) {
//  res.send('Hello World');
//});
app.get('/random.txt', function(req, res) {
    res.send('random.txt');
})
MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err, db) {
    if (err) console.error(err);
    console.log("DB Connected");
    var dbobj = db.db("HRMS");
    dbobj.collection("Personal details").findOne({}, function(err, res) {
        if (err) console.error(err);
        res.render("firstname", { FirstName: res.FirstName })
        db.close();
    });
});
app.listen(3000, function() {
    console.log('app.js listening to htttp://localhost:3000/');
});