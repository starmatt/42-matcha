const bcrypt = require('bcrypt');
const schemas = require('../schemas');

// Constructor
const User = function (data) {
    this.data = this.fill(data);
}

// Prototype methods
User.prototype.get = function (prop) {
    return this.data[prop];
}

User.prototype.set = function (prop, value) {
    this.data[prop] = value;
}

User.prototype.save = function (data, callback) {
    if (this.data.id) {
        return User.update(this.data.id, data, callback);
    }

    return User.insert(this.data, callback);
}

User.prototype.fill = function (data) {
    const sanitized = data || {}; 
    const schema = schemas.user;

    return _.pick(_.defaults(sanitized, schema), _.keys(schema));
}

// Static methods
User.find = function (id, callback) {
    const query = `SELECT * FROM users WHERE id=${id}`;

    db.query(query, (error, results, fields) => {
        if (error) throw error;

        callback(new User(JSON.parse(JSON.stringify(results[0]))));
    });
}

User.insert = function (data, callback) {
    bcrypt.hash(data.password, 10, (error, hash) => {
        const query = `INSERT INTO users (email, password, username) VALUES ('${data.email}', '${hash}', '${data.username}');`

        db.query(query, (error, results, fields) => {
            if (error) throw error;

            callback(results);
        });
    });
}

User.update = function (id, data, callback) {
    let query = 'UPDATE users SET';

    Object.keys(data).forEach((item, index, array) => {
        query += ` ${item} = '${data[item]}'`;

        if (index < array.length - 1) {
            query += ',';
        }
    });

    query += ` WHERE id=${id};`;

    db.query(query, (error, results, fields) => {
        if (error) throw error;

        callback(results);
    });
}

module.exports = User;
