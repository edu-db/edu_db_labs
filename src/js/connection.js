const { response } = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'uni',
    password: 'rest',
    database: 'projectcontrolsystem'
});

connection.connect(function(error) {
    if (error) {
        throw error;
    }
    console.log('Successfully connected to db');
});

module.exports = connection;