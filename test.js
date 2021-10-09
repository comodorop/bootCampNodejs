const mysql = require('promise-mysql2');

mysql.createConnection({
    "host": "127.0.0.1",
    "user": "roott",
    "password": "1234565",
    "database": "bootcamp"
}).then(cm=>{
    console.log("Connecction success")
}).catch(err=>{
    console.log("Connection DB fail")
})
