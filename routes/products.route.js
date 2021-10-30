const express = require('express')
const route = express.Router()
const {uploadFile} = require('../utils/aws/uploadFilesS3')


route.post('/', async (req, res) => {
    let { body } = req
    let {name, data, mimetype} = req.files.file
    let datas3 = await uploadFile(name, data, mimetype)
    res.status(201).send({ status: 201, data: datas3, msg: "New record avaliable" })
})

module.exports = route