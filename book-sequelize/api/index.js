var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
require('./routes/routes.js')(app);

PORT = 3000;

app.listen(PORT, function(){
    console.log("App listening at ", PORT);
});