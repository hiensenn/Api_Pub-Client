const express = require('express')
const app = express()
const port = 3031
const bd = require('./infra/Sqlite3-bd')
const cors = require('cors')
const clienteController = require('./controllers/clienteControllers')

app.use(cors())
app.use(express.json())

clienteController(app, bd)

app.listen(port, () => console.log(`[INFO]
Servidor rodando na porta : ${port}`))
