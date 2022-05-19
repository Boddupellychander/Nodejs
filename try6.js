const express = require('express');
const app = express();
/*app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});*/
/*app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
    
});*/
app.get('/user/:id', (req, res, next) => {
        res.send('USER')
    })
    /*app.get('/', (req, res) => {
        res.send('Hello World!')
    })*/
app.listen(4400, () => console.log('Its Working....'));