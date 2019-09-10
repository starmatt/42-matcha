import Message from '../models/Message';

const messageController = {
    add: (req, res) => {
        const data = req.query;
        const message = new Message(data);

        // message.save(null, )
    }

    // edit:

    // delete:
}
