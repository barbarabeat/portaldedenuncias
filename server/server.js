//packages necessários
const express = require('express');
const bparser = require("body-parser");
const app = express();
const path = require("path");
const port = 8080;

//rotas
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function(req, res) {
    res.send('Name' + req.body.name + '.'); 
});

//inicia o servidor
app.listen(8080, function(){
   console.log('Portal de Denúncias aberto na porta:' + port)
});