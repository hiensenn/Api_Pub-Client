const request = require('supertest')

test('/pub/cliente', async()=>{

    await request('http://localhost:3031')
    .get('/pub/cliente')
    .expect(200)
    .then((res)=> console.log('Passou no teste'))

})

test('/pub/cliente/novoCliente', async()=>{

    await request('http://localhost:3031')
    .post('/pub/cliente/novoCliente')
    .send({
        "NOMENACOMANDA": "aTOS",
        "NUMMESA": "34",
        "TAXASERVICOS": "2.77",
        "DATAHORA": "date(now)",
        "FORMAPAGAMENTO": "dinheiro"
      })
    .expect(200)
    .then((res)=> console.log('Passou no teste'))

})