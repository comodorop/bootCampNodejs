const express = require('express')
const mysql = require('promise-mysql2');
const { uuid } = require('uuidv4');
const { listWhiteIp } = require('./middelware/index')
require('dotenv').config()

const { createConnection } = require('./connection/mysql.connection')
const clients = require('./routes/clients.route')
const app = express()
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(listWhiteIp)
app.use('/v1/clients', clients)

createConnection().then(ok => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running in the port ${process.env.PORT}`)
    })
}).catch(err => {
    console.log("There is  a problem in the services db")
})