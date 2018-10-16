const express = require('express');
const app = express();
const path = require("path");
const port = 8080;
const bparser = require("body-parser");

/*app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});*/

app.get('/api/:version', function(req, res){
    res.send(req.params.version);
});

app.get('/api/users', function(req, res){
    var user_id = req.param('id');
    var token = req.param('token');
    var geo = req.param('geo');

    res.send(user_id + '' + token + '' + geo);
});

/*app.post('/', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
    
    res.send(user_id + '' + token + '' + geo); 
});*/

app.listen(port,() => console.log('Portal de Denúncias aberto na porta:' + port));