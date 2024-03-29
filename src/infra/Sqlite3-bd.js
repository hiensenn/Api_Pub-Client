const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('./src/infra/bancoDados.db');


process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
)

module.exports = bd;