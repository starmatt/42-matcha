const User = require('../models/User');

module.exports = {
    add: (req, res) => {
        const data = req.query;
        const user = new User(req.query);

        user.save((results) => {
            res.send(`User #${results.insertId} was saved.`);
        });
    },

    edit: (req, res) => {
        const id = req.params.id;

        User.find(id, (user) => { 
            user.save(req.query, (results) => {
                res.send(results);
            });
        });
    }
};
