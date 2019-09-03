const express = require('express');

const app = express();
const port = 8081;

const mysql = require('mysql');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

/** Routes resources */
const user = require('./routes/user');
// more to come

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
});

global.db = connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port, () => console.log(`am i alive ? ${port}`));

app.post('/user/add', user.add);
app.post('/user/:id/edit', user.edit);
