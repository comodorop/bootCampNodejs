const express = require('express')
const route = express.Router()

const { login } = require('../services/auth.services')
const {generateToken} = require('../utils/token/index')

route.post('/', async (req, res) => {
    let { body } = req
    let [rows, fields] = await login(body)
    if(rows.length === 0){
        res.status(401).send({ msg: "Credentials wrong" })    
    }else{
        let token = generateToken(body)
        res.status(200).send({ msg: `Welcome ${body.user}`, token: token })
    }
})

module.exports = route
