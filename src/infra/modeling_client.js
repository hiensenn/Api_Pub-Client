const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'../','../','modeling_client.db')
const db = new sqlite3.Database(caminhoArq);

// Clients Pub

const CLIENT_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENT" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "NUMMESA" INT,
    "DATA" DATETIME,
    "FORMAPAGAMENTO" varchar(20)
  )`;

const CLIENT_DATA = `
INSERT INTO CLIENT ( NOME, NUMMESA, DATA, FORMAPAGAMENTO)
VALUES 
    ('Hiensen Lima', 10, date('now'),'dinheiro'),
    ('Wander Ribeiro', 4, date('now'),  'cartao'),
    ('Mirtes Faria', 8, date('now'), 'cartao'),
    ('Gabriela Freitas', 1, date('now'), 'dinheiro')
`
function tableClient() {
    db.run(CLIENT_SCHEMA, (e)=> {

       if(e) console.log("erro ao criar tabela client");
    });
}

function includeClient() {
    db.run(CLIENT_DATA, (e)=> {
       if (e) console.log("erro ao incluir cliente na tabela.");
    });
}

db.serialize( ()=> {
    tableClient();
    includeClient();
});

module.exports = db;