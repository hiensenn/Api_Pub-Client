const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const sqlite3 = require('sqlite3').verbose()
const port = 3001
const client = require('./controller/client-controller')
const db = new sqlite3.Database('db_client')
app.use(bodyparser.json())

const Client = require('./models/client-models')

Client(app, db)




app.listen(port, () => { console.log("olá") } )

