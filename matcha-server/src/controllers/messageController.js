import Message from '../models/Message';

const MessageController = {
    add: (req, res) => {
        const data = req.query;
        const message = new Message(data);
        message.save(null, (results) => {
            res.send(`Message #${results.insertId} was saved.`);
        });
    },

    edit: (req, res) => {
        Message.find(req.params.id, (message) => {
            message.set('message', req.query.message);
            message.save(req.query, (results) => {
                res.send(results);
            });
        });
    },

    delete: (req, res) => {
        Message.delete(req.params.id, () => {
            res.send(`The message with id ${req.params.id} is delete`)
        })
    }
};

export default MessageController;