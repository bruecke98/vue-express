const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3001;

//init express
const app = express();
app.use(cors());


app.listen(PORT, () => console.log(`running on server ${PORT}`));


//express
app.use(express.static('public'));


app.get("/", (req, res) => {
    res.send("Hello, World!");
});


const fmpc = require("./api/fmpcloud/outlook");
//fmpcloud Verbindung
app.use('/api/:id', fmpc )

//app.use('/test', require("../server/api/mysql/shares"))



//mysql Verbindung
app.get('/db', (req, res, next) => {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'dbs3402134'
    });

    connection.connect();

    connection.query('SELECT * from  `aktien`', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].Name);
    res.send(rows);
    });

    connection.end();
});
