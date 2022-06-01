const UserModel = require('../model/user-model');

exports.getAllUsers = (req, res) => {
    console.log('Fetching users...');
    UserModel.getAllUsers((err, users) => {
        if (err) {
            res.send(err);
        }
        res.send(users);
    })
}

exports.getUserByID = (req, res) => {
    console.log('Fetching user with id', req.params.id);
    UserModel.getUserByID(req.params.id, (err, user) => {
        if (err) {
            res.send(err);
        }
        console.log('Successfully fetched user with id', req.params.id);
        res.send(user);
    })
}

exports.getUsersInProject = (req, res) => {
    console.log(`Fetching users from projects #${req.params.id}`);
    UserModel.getUsersInProject(req.params.id, (err, users) => {
        if (err) {
            res.send(err);
        }
        res.send(users);
    })
}

exports.createUser = (req, res) => {
    console.log('Creating user...');
    const userData = new UserModel(req.body);
    UserModel.createUser(userData, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.send(user);
    })
}

exports.updateUser = (req, res) => {
    console.log('Updating user...');
    const userData = new UserModel(req.body);
    UserModel.updateUser(req.params.id, userData, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.send(user);
    })
}

exports.deleteUser = (req, res) => {
    console.log('Deleting user...');
    const id = req.params.id;
    UserModel.deleteUser(req.params.id, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}