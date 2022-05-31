const { response } = require('express');
const db = require('../connection');

const User = function(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
    this.role = user.role;
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
        }
        result(null, res);
    })
}

User.createUser = (userData, result) => {
    db.query('SELECT * FROM users WHERE email=?', userData.email, (err, res) => {
        if (err) {
            console.log('Something went wrong');
            result(null, err);
        }
        if (res.length > 0) {
            console.log('User with this email already exists!');
            result(null, { status: false, message: 'User with this email already exists!' });
        } else {
            db.query(`INSERT INTO users (email, password, name, role) VALUES ('${userData.email}', MD5('${userData.password}'), '${userData.name}', '${userData.role}')`, (err, res) => {
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
    db.query(`SELECT * FROM users WHERE id=${id} AND email='${userData.email}'`, (err, res) => {
        if (err) {
            console.log('Something went wrong');
            result(null, err);
            return;
        }
        if (res.length == 0) {
            result(null, { status: false, message: `There's no user with id #${id} and email ${userData.email}` });
            return;
        }
    })
    db.query(`UPDATE users SET name='${userData.name}', password=MD5('${userData.password}'), role='${userData.role}' WHERE id=${id} AND email='${userData.email}'`, (err, res) => {
        if (err) {
            console.log('Something went wrong');
            result(null, err);
        }
        delete userData.password;
        result(null, { status: true, message: `User #${id} was updated successfully`, data: userData });
    })
}

User.deleteUser = (id, result) => {
    db.query(`SELECT * FROM users WHERE id=${id}`, (err, res) => {
        if (err) {
            console.log('Something went wrong');
            result(null, err);
            return;
        }
        if (res.length == 0) {
            result(null, { status: false, message: `User #${id} doesn't exist` });
            return;
        }
    })
    db.query(`DELETE FROM users WHERE id=${id}`, (err, res) => {
        if (err) {
            console.log('Something went wrong');
            result(null, err);
        }
        result(null, { status: true, message: `User #${id} is successfully deleted` });
    })
}

module.exports = User;