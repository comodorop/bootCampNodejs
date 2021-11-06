const express = require('express')
const route = express.Router()
const {uploadFile, uploadS3Glacier} = require('../utils/aws/uploadFilesS3')
const fs = require('fs');

route.post('/', async (req, res) => {
    let { body } = req
    let {name, data, mimetype} = req.files.file
    console.log(req.files.file)
    if(mimetype === 'application/pdf'){
        fs.writeFile(`./documents/${name}`, data,  "binary" ,function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("The file was saved!");
            }
        });
        res.status(201).send({ status: 201, data: `http://localhost:3001/documents/${name}`, msg: "New record avaliable" })
    }
    else{
        res.status(401).send({ status: 401, data: "", msg: "Solo archivos pfd" })
    }
})

module.exports = route