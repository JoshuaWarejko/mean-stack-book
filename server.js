var express = require("express");
var bodyParser = require("body-parser");
var logger = require('morgan');

var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(require('./auth'));
app.use('/api/posts', require('./controllers/api/posts'));
app.use(require('./controllers'));
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));


var server = app.listen(3000, function() {
	console.log("Server listening on", 3000);
});
require('./websockets').connect(server);