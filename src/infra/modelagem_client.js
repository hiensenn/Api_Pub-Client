const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'../','../','db_client.db')
const db = new sqlite3.Database(caminhoArq);

// Clientes Pub

const CLIENT_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENT" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "NUMMESA" INT(4),
    "DATA" DATE NOT NULL,
    "FORMAPAGAMENTO" varchar(20)
  );`;

const ADD_CLIENT_DATA = `
INSERT INTO USUARIOS (ID, NOME, NUMMESA, FORMAPAGAMENTO)
VALUES 
    (1, 'Hiensen Lima', 10, 'dinheiro'),
    (2, 'Wander Ribeiro', 4, 'cartao'),
    (3, 'Mirtes Faria Lima', 8, 'cartao'),
    (4, 'Gabriela Freitas', 1, 'dinheiro')
`
function tabelaClient() {
    db.run(CLIENT_SCHEMA, (e)=> {

       if(e) console.log("erro ao inserir cliente");
    });
}

function populaTabelaUsr() {
    db.run(ADD_CLIENT_DATA, (error)=> {
       if (error) console.log("erro ao incluir cliente na tabela.");
    });
}
