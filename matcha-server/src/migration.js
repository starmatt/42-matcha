require('dotenv').config();
const mysql = require('mysql');
const migration = require('mysql-migrations');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

migration.init(pool, `${__dirname}/migrations`);
