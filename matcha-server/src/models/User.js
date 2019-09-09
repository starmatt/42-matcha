import _ from 'lodash';
import bcrypt from 'bcrypt';
import schemas from '../schemas';

export default class User
{
    constructor(data) {
        this.data = this.fill(data);
    }

    get(prop) {
        return this.data[prop];
    }

    set(prop, value) {
        return this.data[prop] = value;
    }

    save(data, callback) {
        if (this.data.id) {
            return User.update(this.data.id, data, callback);
        }

        return User.insert(this.data, callback);
    }

    fill(data) {
        const sanitized = data || {}; 
        const schema = schemas.user;

        return _.pick(_.defaults(sanitized, schema), _.keys(schema));
    }

    static find(id, callback) {
        const query = `SELECT * FROM users WHERE id=${id}`;

        db.query(query, (error, results, fields) => {
            if (error) throw error;

            callback(new User(JSON.parse(JSON.stringify(results[0]))));
        });
    }

    static insert(data, callback) {
        bcrypt.hash(data.password, 10, (error, hash) => {
            const query = `INSERT INTO users (email, password, username) VALUES ('${data.email}', '${hash}', '${data.username}');`

            db.query(query, (error, results, fields) => {
                if (error) throw error;

                callback(results);
            });
        });
    }

    static update(data, callback) {
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
}
