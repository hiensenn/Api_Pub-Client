const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('bancoDados.db')


const CLIENTE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTE" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOMENACOMANDA" VARCHAR(64),
    "NUMMESA" INT,
    "TAXASERVICOS" VARCHAR(20),
    "DATAHORA" DATETIME,
    "FORMAPAGAMENTO" VARCHAR(20)
  )`;

  const CLIENTE_DATA = `
INSERT INTO CLIENTE ( NOMENACOMANDA, NUMMESA, TAXASERVICOS, DATAHORA, FORMAPAGAMENTO)
VALUES 
    ('Hiensen Lima', 10, 15.56, date('now'),'dinheiro'),
    ('Wander Ribeiro', 4, 32.02, date('now'),  'cartao'),
    ('Mirtes Faria', 8, 12.50, date('now'), 'cartao'),
    ('Gabriela Freitas', 2, 22.56, date('now'), 'dinheiro')
`

function criarTabelaCliente() {
    db.run(CLIENTE_SCHEMA, (e) => {
        if(e) console.log('erro ao criar tabela cliente')
    })
}

function incluirCliente(){
    db.run(CLIENTE_DATA, (e)=>{
        if(e) console.log('erro ao incluir cliente na tabela')
    })

}

db.serialize(()=>{
    criarTabelaCliente();
    incluirCliente()
})

