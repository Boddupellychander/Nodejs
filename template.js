const ejs = require('ejs');
const fs = require('fs');
const http = require('http');
const filename = 'students.ejs';
const students = [
    { name: 'Rahul', age: 22 },
    { name: 'Rjan', age: 23 },
    { name: 'varun', age: 24 }
];
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(filename, (err, data) => {
            const template = data.toString(); //string = string.toString();
            const context = { students: students };
            const output = ejs.render(template, context);
            res.setHeader('Content-type', 'text/html');
            res.end(output);
        });
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});
server.listen(8000, () => console.log('Running...'));