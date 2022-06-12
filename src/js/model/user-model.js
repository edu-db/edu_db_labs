const { response } = require('express');
const db = require('../connection');

const User = function(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
}

User.getAllUsers = result => {
    db.query('SELECT * FROM users', (err, res) => {
        if (err) {
            console.log('ERROR FETCHING ALL USERS!');
            result(null, err);
        }
        console.log('Users fetched successfully');
        result(null, res);
    })
}

User.getUserByID = (id, result) => {
    db.query('SELECT * FROM users WHERE id=?', id, (err, res) => {
        if (err) {
            console.log('Error fetching user with id: ', err);
            result(null, err);
        }
        if (res.length == 0) {
            result(null, { status: false, message: `There's no user with id ${id}` });
        } else {
            result(null, res);
        }
    })
}

User.getUsersInProject = (project_id, result) => {
    db.query(`SELECT user_id FROM roles WHERE project_id=${project_id}`, (err, res) => {
        if (err) {
            console.log('Error fetching users from project');
            result(null, err);
        }
        if (res.length == 0) {
            result(null, { status: false, message: `There're no users in project #${project_id}` });
        } else {
            user_ids = [];
            for (let i = 0; i < res.length; i++) {
                user_ids[i] = res[i].user_id;
            }
            db.query(`SELECT * FROM users WHERE id IN (${user_ids})`, (err, res) => {
                if (err) {
                    console.log('Something went wrong');
                    result(null, err);
                } else {
                    result(null, res);
                }
            })
        }
    })
}

User.getUserRole = (project_id, user_id, result) => {
    db.query(`SELECT role FROM roles WHERE project_id=${project_id} AND user_id=${user_id}`, (err, res) => {
        if (err) {
            result(null, err);
        }
        if (res.length == 0) {
            result(null, { status: false, message: `Role of user #${user_id} in project #${project_id} not found` });
        } else {
            result(null, { status: true, user_id: user_id, data: res });
        }
    })
}

User.createUser = (userData, result) => {
    // Check if email is not used by another user.
    db.query('SELECT * FROM users WHERE email=?', userData.email, (err, res) => {
        if (err) {
            console.log('Something went wrong');
            result(null, err);
        }
        if (res.length > 0) {
            console.log('User with this email already exists!');
            result(null, { status: false, message: 'User with this email already exists!' });
        } else {
            db.query(`INSERT INTO users (email, password, name) VALUES ('${userData.email}', MD5('${userData.password}'), '${userData.name}')`, (err, res) => {
                if (err) {
                    console.log('Error creating user');
                    result(null, { status: false, message: err });
                } else {
                    console.log('User created successfully!');
                    delete userData.password;
                    result(null, { status: true, message: 'User created successfully!', insertId: res.insertId, data: userData });
                }
            })
        }
    })
}

User.updateUser = (id, userData, result) => {
    // Check if user exists.
    db.query(`SELECT * FROM users WHERE id=${id} AND email='${userData.email}'`, (err, res) => {
        if (err) {
            console.log('Something went wrong');
            result(null, err);
        }
        if (res.length == 0) {
            result(null, { status: false, message: `There's no user with id #${id} and email ${userData.email}` });
        } else {
            // Update user info.
            db.query(`UPDATE users SET name='${userData.name}', password=MD5('${userData.password}') WHERE id=${id} AND email='${userData.email}'`, (err, res) => {
                if (err) {
                    console.log('Something went wrong');
                    result(null, err);
                }
                delete userData.password;
                result(null, { status: true, message: `User #${id} was updated successfully`, data: userData });
            })
        }
    })
}

User.deleteUser = (id, result) => {
    // Check if user exists.
    db.query(`SELECT * FROM users WHERE id=${id}`, (err, res) => {
        if (err) {
            console.log('Something went wrong');
            result(null, err);
        }
        if (res.length == 0) {
            result(null, { status: false, message: `User #${id} doesn't exist` });
        } else {
            // Delete user.
            db.query(`DELETE FROM users WHERE id=${id}`, (err, res) => {
                if (err) {
                    console.log('Something went wrong');
                    result(null, err);
                }
                result(null, { status: true, message: `User #${id} is successfully deleted` });
            })
        }
    })
}

User.changeRole = (project_id, user_id, role, result) => {
    db.query(`UPDATE roles SET role='${role}' WHERE project_id=${project_id} AND user_id=${user_id}`, (err, res) => {
        if (err) {
            result(null, err);
        }
        result(null, { status: true, message: `User #${user_id} in project #${project_id} is now a ${role}` });
    })
}

module.exports = User;