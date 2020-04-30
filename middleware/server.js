const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:8080/"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan('common'));

require('./router/router.js')(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req,res) => {
    res.json({message: 'welcome'})
})

const db = require('./app/db.js');
const Role = db.role;
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync with { force: true }');
    initial();
});
// require('./route/project.route.js')(app);

var server = app.listen(8080, "127.0.0.1", function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});

function initial(){
    Role.create({
        id: 1,
        name: "USER"
    });

    Role.create({
        id: 2,
        name: "ADMIN"
    });

    Role.create({
        id: 3,
        name: "PM"
    });
}

// Sign Up
// {
// 	"name": "Ghani",
// 	"username": "ghaninf",
// 	"email": "ghaninf@gmail.com",
// 	"password": "asdasd123",
// 	"roles": ["user", "admin"]
// }

// Sign In
// 	"username": "ghaninf1",
// 	"password": "asdasd123"