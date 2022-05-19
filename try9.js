const express = require('express')
const app = express()
    /*app.use('/user/:id', (req, res, next) => {
        console.log('Request URL:', req.originalUrl)
        next()
    }, (req, res, next) => {
        console.log('Request Type:', req.method)
        next()
    });*/
app.get('/user/:id', (req, res, next) => {
        console.log('ID:', req.params.id)
        next()
    }, (req, res, next) => {
        res.send('User Info')
    })
    // handler for the /user/:id path, which prints the user ID
app.get('/user/:id', (req, res, next) => {
    res.send(req.params.id)
})
app.listen(4500, () => console.log('Its Working....'));