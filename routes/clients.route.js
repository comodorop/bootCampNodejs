const express = require('express')

const route = express.Router()
const { createClients, getClientsPromise, getClientsPromise2, getClientsById, getClientsByKnex } = require('../services/clients.services')


route.get('/:id', async (req, res) => {
    try {
        let { id } = req.params
        let [rows, fields] = await getClientsById(id)
        if(rows.length> 0){
            res.status(200).send({ status: 200, data: rows[0], msg: " Client" })
        }else{
            res.status(200).send({ status: 200, data: [], msg: "Client not found" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 200, data: [], msg: "There is a problem in the request" })
    }
})

route.get('/', async (req, res) => {
    try {
        let rows = await getClientsByKnex()
        // let [rows, fields] = await getClientsPromise2()
        res.status(200).send({ status: 200, data: rows, msg: "List of clients" })
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 200, data: [], msg: "There is a problem in the request" })
    }
    // getClientsPromise().then(data =>{
    //     res.status(200).send({ status: 200, data: data[0],  msg: "List of clients" })
    // }).catch(err=>{
    //     res.status(500).send({ status: 200, data: [],  msg: "There is a problem in the request" })
    // })

    // getClientsPromise2().then(data =>{
    //     res.status(200).send({ status: 200, data: data[0],  msg: "List of clients" })
    // }).catch(err=>{
    //     res.status(500).send({ status: 200, data: [],  msg: "There is a problem in the request" })
    // })
})

route.post('/', (req, res) => {
    let { body } = req
    let msg = validate(body)
    if (msg.length === 0) {
        createClients(body)
        res.status(200).send({ msg: "New client avaliable" })
    }
    else {
        res.status(401).send({ msg: msg })
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


