const express = require('express');
const app = express();
const path = require("path");
const port = 8080;
const bparser = require("body-parser");

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function(req, res) {
    
})

app.listen(port,() => console.log('Portal de Denúncias aberto na porta:' + port));