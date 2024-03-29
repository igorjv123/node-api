const http = require('http');
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
var cors = require('cors')
var db = require('./db/db');

const hostname = 'localhost';
const port = 3001;
const app = express();
app.use(cors())


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
 
const staticPath = path.normalize(__dirname + "/public");
app.use(express.static(staticPath));

const routes = require("./routes/api/routes")(app);

db.connect('mongodb://localhost:27017/users', function(err){
    if(err){
        return console.log(err);
    }
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});
