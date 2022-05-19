const pug = require('pug');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const fs = require('fs');
const template = fs.readFileSync('./template.pug');
const context = {
    messages: [
        'You have logged in successfully.',
        'Welcome back!'
    ]
};
const fn = pug.compile(template);
console.log(fn(context));
app.get('/', function(req, res) {
    res.render('servve.pug');
});
app.listen(5500);