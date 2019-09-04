require('dotenv').config();
const express = require('express');
const app = express();

const mysql = require('mysql');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

/** Routes resources */
const user = require('./routes/user');
// more to come

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
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
app.listen(process.env.APP_PORT, () => console.log(`Started at ${process.env.APP_URL}:${process.env.APP_PORT}`));

app.post('/user/add', user.add);
app.post('/user/:id/edit', user.edit);
