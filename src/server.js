const express = require('express')


const app = express()
const port = 3001

const bodyparser = require('body-parser')

const client_ = require('./controller/client-controller')

const db = require('./infra/modeling_client')
//const db = require('./infra/SQLite_db')


app.use(bodyparser.json())
app.use(express.json())



client_(app, db)


app.listen(port, () => { console.log("olá") } )



