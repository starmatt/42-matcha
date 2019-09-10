import _ from 'lodash';

export default class Model
{
    constructor(data) {
        // Default properties set to null, to be set in the child class
        this.schema = null;
        this.data = null;
        // this.table and this.fillable should be set in static get methods in the child class,
        // so they can be used inside static methods like so:
        //
        // static get table() {
        //     return 'table_name';
        // }
        //
        // and then accessed as ModelName.table
    }

    get(prop) {
        return this.data[prop];
    }

    set(prop, value) {
        return this.data[prop] = value;
    }

    fill(data) {
        const sanitized = data || {};

        return _.pick(
            _.defaults(sanitized, this.schema),
            _.keys(this.schema)
        );
    }

    save(data, callback) {
        if (this.data.id) {
            return this.constructor.update(this.data.id, data, callback);
        }

        return this.constructor.insert(this.data, callback);
    }

    /**
      Static methods and properties
    **/
    static get table() {
        return '';
    }

    static get fillable() {
        return [];
    }

    static insert(data, callback) {
        const values = [];
        let query;

        Object.keys(data).forEach((key) => {
            if (this.fillable.includes(key)) {
                values.push(`'${data[key]}'`);
            }
        });

        query = `INSERT INTO ${this.table} (${this.fillable.join(', ')}) VALUES (${values.join(', ')});`;

        db.query(query, (error, results, fields) => {
             if (error) throw error;

             callback(results);
        });
    }

    static update(id, data, callback) {
        const values = [];
        let query;

        Object.keys(data).forEach((key) => {
            values.push(`${key} = '${data[key]}'`);
        });

        query = `UPDATE ${this.table} SET ${values.join(', ')} WHERE id=${id};`;

        db.query(query, (error, results, fields) => {
            if (error) throw error;

            callback(results);
        });
    }

    static find(id, callback) {
        const query = `SELECT * FROM ${this.table} WHERE id=${id}`;

        db.query(query, (error, results, fields) => {
            if (error) throw error;

            callback(new this(JSON.parse(JSON.stringify(results[0]))));
        });
    }
}
