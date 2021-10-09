const express = require('express')
const { uuid } = require('uuidv4');
const  {listWhiteIp} = require('./middelware/index')


const clients = require('./routes/clients.route')
const app = express()
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(listWhiteIp)
app.use('/v1/clients', clients)

app.listen(3001, () => {
    console.log("Server running in the port 3001")
})
