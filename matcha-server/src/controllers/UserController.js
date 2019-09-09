import User from '../models/User';

const UserController = {
    add: (req, res) => {
        const data = req.query;
        const user = new User(req.query);

        user.save(null, (results) => {
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

export default UserController;