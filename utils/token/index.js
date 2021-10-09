const jwt = require('jsonwebtoken');
require('dotenv').config()

function generateToken() {
    return jwt.sign(
        { data: { user: "pjgt", rol: "admin" }},
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