const UserModel = require('../model/user-model');

exports.getAllUsers = (req, res) => {
    console.log('Fetching users...');
    UserModel.getAllUsers((err, users) => {
        if (err) {
            console.log('ERROR IN CONTROLLER');
            res.send(err);
        }
        res.send(users);
    })
}

exports.getUserByID = (req, res) => {
    UserModel.getUserByID(req.params.id, (err, user) => {
        if (err) {
            res.send(err);
        }
        console.log('Successfully fetched user with id ', req.params.id);
        res.send(user);
    })
}

exports.createUser = (req, res) => {
    const userData = new UserModel(req.body);
    UserModel.createUser(userData, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json({ status: true, message: 'User created', data: user.insertId })
    })
}