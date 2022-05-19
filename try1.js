const express = require('express')
const { pathToRegexp, match, parse, compile } = require("path-to-regexp");
const app = express()
var MongoClient = require('mongodb').MongoClient;
var connectionString = "mongodb://127.0.0.1:27017/HRMS"
const port = 3000
app.get('/', (req, res) => {
    res.send(' Database')
    MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err, db) {
        if (err) console.error(err);
        console.log("DB Connected");
        var dbobj = db.db("HRMS");

        dbobj.collection("Personal details").findOne({}, function(err, res) {
            if (err) console.error(err);
            console.log(res.Empid);
            console.log(res.firstname);

        });

        // Find all data 
        dbobj.collection("Personal details").find().toArray(function(err, res) {
            if (err) console.error(err);
            console.log(JSON.stringify(res));
            db.close();
        })
    });
})

app.get('/about', (req, res) => {
    res.send('about')
})
app.get('/reopen', (req, res) => {
    res.send("Mongo Express Angular Node")
})

app.listen(port, () => {
        console.log(`app.js is listening in the ${port}`)
    })
    // const keys = [];
    // const regexp = pathToRegexp("/:foo/:bar");
    // regexp.exec("/test/route");