var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.static('models'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/users', users); 

var port = process.env.PORT || '4000';
mongoose.connect(process.env.MONGOLAB_MAROON_URI || 'mongodb://localhost/rereddit');

app.listen(port);
