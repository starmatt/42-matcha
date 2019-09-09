'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const mysql = require('mysql');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
global._ = require('lodash');

/** Routes resources (Controllers ?) */
const user = require('./routes/user');

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
    console.log('> Database connection successful');
});

global.db = connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(process.env.APP_PORT, () => console.log(`> Started at ${process.env.APP_URL}:${process.env.APP_PORT}`));

app.post('/user/add', user.add);
app.post('/user/:id/edit', user.edit);

// const User = require('./models/User');

// User.find(1, (user) => {
//     console.log(user);
// });