module.exports = {
    add: (req, res) => {
        const data = req.query;
        const query = `INSERT INTO users (email, password, username) VALUES ('${data.email}', '${data.password}', '${data.username}');`;

        db.query(query, (error, results, fields) => {
            if (error) {
                console.log(error.sqlMessage);
            }

            res.send(results);
        });
    },

    edit: (req, res) => {
        const id = req.params.id;
        const data = req.query;
        let query = 'UPDATE users SET';

        Object.keys(data).forEach((item, index, array) => {
            query += ` ${item} = '${data[item]}'`;

            if (index < array.length - 1) {
                query += ',';
            }
        });

        query += ` WHERE id=${id};`;

        db.query(query, (error, results, fields) => {
            if (error) {
                console.log(error.sqlMessage);
            }

            res.send(results);
        });
    }
};
