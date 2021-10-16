const express = require('express')
const route = express.Router()
const { save, getUserByUser } = require('../services/users.services')
const { use } = require('./clients.route')
const {encript} = require('../utils/encript/index')


route.post('/', async (req, res) => {
    let { body } = req
    let msg = await validation(body)
    if (msg.length === 0) {
        let newPassword = await encript(body.password)
        body.password = newPassword
        await save(body)
        res.status(201).send({ status: 201, data: [], msg: "New record avaliable" })
    } else {
        res.status(401).send({ status: 401, data: [], msg: msg })
    }
})


async function validation(body) {
    let msg = []
    if (!body.hasOwnProperty("name") || body.name === '') {
        msg.push("Its require a name")
    }
    if (!body.hasOwnProperty("user") || body.user === '') {
        console.log("No hay user")
        msg.push("Its require an user")
    } else {
        let [rows, fields] = await getUserByUser(body.user)
        if (rows.length > 0) {
            msg.push("User busy, write other")
        }
    }
    if (!body.hasOwnProperty("password") || body.password === '') {
        msg.push("Its require a password")
    }
    if (!body.hasOwnProperty("email") || body.email === '') {
        msg.push("Its require an email")
    } else {
        let ok = validateEmail(body.email)
        if (!ok) {
            msg.push("Write a valid email")
        }
    }
    return msg
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


module.exports = route
