module.exports = (app, Client) => {

    app.get('/Client', (req, res) => {
        res.send(`rota ativa`)
    })

    app.post('/Client', (req, res) => {
    
        const client = new Client(req.body.nome, req.body.numMesa, req.body.formaPagamento);
        res.send(`mesa com cliente ocupada`);
        console.log(req.body);
    
}
            )}