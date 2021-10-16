
const bcrypt = require('bcrypt');
const saltRounds = 10;


async function encript(value){
    return bcrypt.hash(value, saltRounds)
}


module.exports = {
    encript
}