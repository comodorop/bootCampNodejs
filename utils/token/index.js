const jwt = require('jsonwebtoken');
require('dotenv').config()

function generateToken(data) {
    return jwt.sign(
        { data: data},
        process.env.SECRET,
        {expiresIn: 15}
    )
}

function validateToken(token) {
    try {
        let data = jwt.verify(token, process.env.SECRET)
        return data
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    generateToken,
    validateToken
}