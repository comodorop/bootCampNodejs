const moment = require('moment')
const { uuid } = require('uuidv4');
const { getConnection } = require('../connection/mysql.connection')



async function save(body){
    let cn = getConnection()
    let sql = `INSERT INTO users (user, password, created_at, name) 
    VALUES ('${body.user}', '${body.password}', '${moment().format("YYYY-MM-DD")}', '${body.name}')`
    return cn.query(sql)
}

async function getUserByUser(user){
    let cn = getConnection()
    let sql = `SELECT * FROM users WHERE user = '${user}'`
    return cn.query(sql)
}


module.exports = {
    save,
    getUserByUser
}