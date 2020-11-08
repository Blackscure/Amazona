const express = require('express');
const app = express();
var data = require('./data.js');

//var app = require('../frontend/src/App.js')



app.get('/api/products', (req, res) =>{
    res.send(data.products);
})


app.get('/', (req, res) =>{
    res.send('Server is ready');
});

app.listen(5000, () =>{
    console.log('Serve at http://localhost:5000');
});
    