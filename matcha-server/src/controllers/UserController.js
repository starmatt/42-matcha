import User from '../models/User';

const UserController = {
    add: (req, res) => {
        const data = req.query;
        const user = new User(data);

        user.save(null, (results) => {
            res.send(`User #${results.insertId} was saved.`);
        });
    },

    edit: (req, res) => {
        User.find(req.params.id, (user) => {
            user.set('username', req.query.username);
            user.save(req.query, (results) => {
                res.send(results);
            });
        });
    },

    delete: (req, res) => {
        User.delete(req.params.id, () => {
           res.send(`User with id ${req.params.id} is delete`)
        });
    }
};

export default UserController;
