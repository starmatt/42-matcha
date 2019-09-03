module.exports = {
    add: (req, res) => {
        res.send('Add user action');
    },

    edit: (req, res) => {
        res.send(`Edit user (id ${req.params.id}) action`);
    }
};
