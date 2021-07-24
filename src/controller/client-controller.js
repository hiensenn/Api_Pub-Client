const ClientDAO = require('../dao_pub_client/DAO')
const Clients = require('../models/client-models')

module.exports = (app, db) => {

    let daoClient = new ClientDAO(db)

    app.get('/Client', (req, res) => {
        daoClient
        .getClients()
        .then( (rows) => {
            res.json( {
                result:rows,
                count: rows.length} )
        }) 
        .catch((e) => {
            res.json({e})
        })
    })

    app.post('/Client', (req, res) => {
        const{nome, numMesa, data, formaPagamento} = req.body
        let postClient = new Clients(nome, numMesa, data , formaPagamento);
        daoClient
        .insertClients(postClient)
        .then(() => {
            res.status(200).json({
                message: "Cliente criado com sucesso",
                e: false,
            })
        })
        .catch((e) => {
            console.log(e)
            res.status(500).json({
                message: "cliente não pode ser criado",
                e: true
            })
            
        })   
    
})

app.post('/Client/Delete', (req, res) => {
    const{ID} = req.body
    daoClient
    .deleteClients(ID)
    .then(() => {
        res.status(200).json({
            message: "Cliente deletado com sucesso",
            e: false,
        })
    })
    .catch((e) => {
        console.log(e)
        res.status(500).json({
            message: "cliente não pode ser deletado",
            e: true
        })
        
    })   

})


}