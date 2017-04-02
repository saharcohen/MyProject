/**
 * Created by Sahar-PC on 02/04/2017.
 */


var path = require('path');
var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname + '/login.html'));
});

app.listen(3000);
console.log('listening on port 3000');