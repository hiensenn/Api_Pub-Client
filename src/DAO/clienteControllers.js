const ClienteDao = require('../DAO/Cliente-Dao')
const Cliente = require('../models/clienteModel')

module.exports = (app, bd) => {

    const DaoCliente = new ClienteDao(bd)

    app.get('/pub/cliente', async (req, res)=>{

        try{
            const respostaMostrarCliente = await DaoCliente.MostrarCliente()
            res.send(respostaMostrarCliente)
        }catch(e){
            res.send(e)
        }
    })
    app.get('/pub/cliente/:ID', async(req, res)=>{
        try{
            const id = req.params.ID
            const respostaMostrarUmCliente = await DaoCliente.MostrarUmCliente(id)
            res.send(respostaMostrarUmCliente)
        }catch(e){
            res.send(e)
        }
    })
    app.post('/pub/cliente/novoCliente', async(req, res)=>{
        const {NOMENACOMANDA, NUMMESA, TAXASERVICOS, DATAHORA, FORMAPAGAMENTO} = req.body
        const novoCliente = new Cliente(NOMENACOMANDA, NUMMESA, TAXASERVICOS, DATAHORA, FORMAPAGAMENTO)  

        try{
            const inserirCliente = await DaoCliente.IncluirCliente(novoCliente) 
            res.status(200).json(inserirCliente)
            }catch(e){
                res.status(500).json(e)
            }
    })
    app.delete('/pub/cliente/removerCliente/:ID', async(req, res)=>{
        const {NOMENACOMANDA, NUMMESA, TAXASERVICOS, DATAHORA, FORMAPAGAMENTO} = req.body
        //const removerCliente = new Cliente(NOMENACOMANDA, NUMMESA, TAXASERVICOS, DATAHORA, FORMAPAGAMENTO)

        try{
            const id = req.params.ID
            const respostaRemoverCliente = await DaoCliente.DeletarCliente(id)
            res.send(respostaRemoverCliente)
        }catch(e){
            res.send(e)
        }
    })
    app.put('/pub/cliente/alterarCliente/:ID', async(req, res)=>{
            
        try{
            
            const id = req.params.ID
            const body = req.body
            const infos = [body.NOMENACOMANDA, body.NUMMESA, body.TAXASERVICOS, body.DATAHORA, body.FORMAPAGAMENTO]

            const alterarCliente = await DaoCliente.EditarCliente(infos, id)
            res.send(alterarCliente)

        } catch(e){
            res.send(e)
        }
    })




}