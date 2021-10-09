
const { uuid } = require('uuidv4');
const { getConnection } = require('../connection/mysql.connection')

function createClients(objClients) {
    let cn = getConnection()
    let sql = `INSERT INTO clients (uuid, name, lastName) 
    VALUES ('${uuid()}', '${objClients.name}', '${objClients.lastName}')`
    cn.query(sql)
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

function getClientsPromise2() {
    let cn = getConnection()
    let sql = `SELECT * FROM clients`
    return cn.query(sql)
}

function getClientsById(uuid){
    let cn = getConnection()
    let sql = `SELECT * FROM clients WHERE uuid = '${uuid}'`
    return cn.query(sql)
}




module.exports = {
    createClients,
    getClientsPromise,
    getClientsPromise2,
    getClientsById
}