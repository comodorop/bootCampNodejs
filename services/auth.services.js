const { getConnection } = require('../connection/mysql.connection')

function login(body){
    let cn = getConnection()
    let sql = `SELECT * FROM users WHERE user = '${body.user}' and pass = '${body.pass}'`
    return cn.query(sql)
}

module.exports = {
    login
}