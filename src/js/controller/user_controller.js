const UserModel = require('../model/user-model');
const db = require('../connection');

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

exports.getUserRole = (req, res) => {
    console.log(`Fetching user #${req.params.user_id} role...`);
    UserModel.getUserRole(req.params.id, req.params.user_id, (err, role) => {
        if (err) {
            res.send(err);
        }
        res.send(role);
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

exports.changeRole = (req, res) => {
    console.log('Changing user role...');
    user_id = req.params.user_id;
    project_id = req.params.id;
    role = req.body.role;
    db.query(`SELECT * FROM roles WHERE project_id=${req.params.id} AND user_id=${req.params.user_id}`, (err, resp) => {
        if (err) {
            res.send(err);
        }
        if (resp.length == 0) {
            res.send({ status: false, message: `User #${user_id} or project #${project_id} not found` });
        } else {
            UserModel.changeRole(project_id, user_id, role, (err, response) => {
                if (err) {
                    res.send(err);
                }
                res.send(response);
            })
        }
    })
}