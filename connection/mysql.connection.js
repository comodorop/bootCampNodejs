const mysql = require('promise-mysql2');

let connection

async function createConnection() {
    mysql.createConnection({
        "host": "127.0.0.1",
        "user": "root",
        "password": "123456",
        "database": "bootcamp"
    }).then(cn => {
        connection = cn
        return cn
    }).catch(err => {
        throw new Error("There is a problem in the db")
    })
}

function getConnection(){
    return connection
}

module.exports = {
    createConnection,
    getConnection
}