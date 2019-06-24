const mysql = require('mysql');
const migration = require('mysql-migrations');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'matcha'
});

migration.init(pool, `${__dirname}/migrations`);
