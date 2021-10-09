
const { uuid } = require('uuidv4');
const {getConnection}  = require('../connection/mysql.connection')

function createClients(objClients) {
    let cn = getConnection()
    let sql = `INSERT INTO clients (uuid, name, lastName) 
    VALUES ('${uuid()}', '${objClients.name}', '${objClients.lastName}')`
    cn.query(sql)
}

module.exports = {
    createClients
}