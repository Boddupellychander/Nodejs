const express = require('express');
const app = express();
const mongoose = require('mongoose');
const pug = require('pug');
const template = 'strong #{message}';
const context = { message: 'Hello template!' };
const fn = pug.compile(template);
console.log(fn(context))
app.get('/', function(req, res) {
    res.render('serve.pug');
});
app.listen(4100);