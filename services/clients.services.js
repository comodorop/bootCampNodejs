
const { uuid } = require('uuidv4');
const { getConnection } = require('../connection/mysql.connection')

const { getConnectionKnex } = require('../connection/knex.connection')

function createClients(objClients) {
    let cn = getConnection()
    let sql = `INSERT INTO clients (uuid, name, lastName) 
    VALUES ('${uuid()}', '${objClients.name}', '${objClients.lastName}')`
    cn.query(sql)
}

function getClientsByKnex() {
    return getConnectionKnex().select().from("clients")
}

function getClientsPromise2() {
    let cn = getConnection()
    let sql = `SELECT * FROM clients`
    return cn.query(sql)
}


function getClientsPromise() {
    return new Promise((resolve, reject) => {
        let cn = getConnection()
        let sql = `SELECT * FROM clients`
        cn.query(sql).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err)
        })
    })
}



function getClientsById(uuid) {
    let cn = getConnection()
    let sql = `SELECT * FROM clients WHERE uuid = '${uuid}'`
    return cn.query(sql)
}




module.exports = {
    createClients,
    getClientsPromise,
    getClientsPromise2,
    getClientsById,
    getClientsByKnex
}