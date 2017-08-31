const mongoose = require('mongoose')
const express = require('express')
const path = require('path')

const app = express()

// set up folder to use
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, function() {
    console.log('server started at port 3000')
})



// app.get('/', function(req, res) {
//     res.send('hello world')  
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>sample html</h1>');
// })

// app.get('/users/:name', (req, res) => {
//     res.send(`<h1>${req.params.name}</h1>`);
// })

//mongoose.connect('mongodb://127.0.0.1/testarino')

/*
mongoose.connection.once('openUri', function() {
    console.log('connection has been made')
}).on('error', function(error) {
    console.log('Connection error:', error)
})
*/

