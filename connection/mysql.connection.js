require('dotenv').config()
const mysql = require('promise-mysql2');


let connection

async function createConnection() {
    mysql.createConnection({
        "host": process.env.DB_HOST,
        "user": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE
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