const express = require('express')
const { uuid } = require('uuidv4');
const clients = require('./routes/clients.route')
const app = express()

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/v1/clients', clients)

app.listen(3001, () => {
    console.log("Server running in the port 3001")
})








// const clients = []

// app.post('/v1/clients', (req, resp) => {
//     let { body } = req
//     body.id = uuid()
//     clients.push(body)
//     resp.status(201).send({ msg: "New data avaliable", data: body, status: 201 })
// })

// app.get('/v1/clients', (req, res) => {
//     res.status(200).send({ data: clients })
// })

// app.get('/v1/clients/:id', (req, res) => {
//     let id = req.params.id
//     res.status(200).send({ data: id })
// })

// app.post('/v2/clients', (req, resp) => {

// })

// app.get('/', (req, res) => {
//     res.status(200).send("<h1>Hola mundo</h1>")
// })