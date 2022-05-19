const pug = require('pug');
const fs = require('fs');
const template = fs.readFileSync('./template.pug');
const context = {
    message: ['You have logged in successfully.',
        'Welcome back!'
    ]
};
const fn = pug.compile(template);
console.log(fn(context));