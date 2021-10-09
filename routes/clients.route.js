const express = require('express')

const route = express.Router()
const  {createClients}  = require('../services/clients.services')


route.get('/', (req, res) => {
    res.status(200).send({ msg: "Endpoint por ruta" })
})

route.post('/', (req, res) => {
    let { body } = req
    let msg = validate(body)
    if (msg.length === 0) {
        createClients(body)
        res.status(200).send({ msg: "New client avaliable" })
    }
    else {
        res.status(401).send({ msg: msg})
    }
})

function validate(obj) {
    let msg = []
    if (!obj.hasOwnProperty("name") || obj.name === '') {
        msg.push("Requiere name or not empty name")
    }
    if (!obj.hasOwnProperty("lastName") || obj.lastName === '') {
        msg.push("Requiere name or not empty name")
    }
    // if (!obj.hasOwnProperty("phone") || obj.phone === '') {
    //     msg.push("Requiere phone or not empty name")
    // } else if (obj.phone.length < 10) {
    //     msg.push("The phone requiere more 10 digits")
    // }
    // if (!obj.hasOwnProperty("emails") || !Array.isArray(obj.emails)) {
    //     msg.push("Requiere emils or requiere a format array in emails")
    // } else if (obj.emails.length === 0) {
    //     msg.push("Requiere one email")
    // }
    return msg
}




module.exports = route


