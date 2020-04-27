const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./db.js');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    () => {console.log("Database is connected")},
    err => {console.log("Cannot connect Database" + err)}    
);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(require('./book.routes.js'));
// require('./book.routes.js')(app);

app.listen(PORT, function(){
    console.log("Server is running on port : ", PORT);
})