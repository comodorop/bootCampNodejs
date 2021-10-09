// const mysql = require('promise-mysql2');

// mysql.createConnection({
//     "host": "127.0.0.1",
//     "user": "roott",
//     "password": "1234565",
//     "database": "bootcamp"
// }).then(cm=>{
//     console.log("Connecction success")
// }).catch(err=>{
//     console.log("Connection DB fail")
// })
const {generateToken, validateToken} = require('./utils/token/index')
let token = generateToken()

let dataToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOiJwamd0Iiwicm9sIjoiYWRtaW4ifSwiaWF0IjoxNjMzODEwODM1LCJleHAiOjE2MzM4MTA4NTB9.WBX4fHacYFUI7wOZ8WE9UOq5GrZ8CbCuVUdW1Tv8WsA'
let data = validateToken(dataToken)
console.log(token)
console.log(data)


