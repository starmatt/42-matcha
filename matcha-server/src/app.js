const express = require('express');

const app = express();
const port = 8081;

const mysql = require('mysql');
const routes = require('./routes');
// const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
    
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'matcha'
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('connected to db');
})  ;

global.db = connection;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port, () => console.log(`am i alive ? ${port}`));

app.get('/', routes.index);
app.get('login', routes.index);