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
        result(null, res);
    })
}

User.createUser = (userData, result) => {
    db.query('INSERT INTO users SET ? ', userData, (err, res) => {
        if (err) {
            console.log('Error creating user');
            result(null, err);
        } else {
            console.log('User creates successfully!');
            result(null, res);
        }
    })
}

module.exports = User;