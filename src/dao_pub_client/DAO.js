
class ClientDAO {
    constructor(db) {
        this.db = db;
}

getClients() {
    return new Promise((resolve, reject) => {

        this.db.all("Select * from CLIENT", (e, rows) => {
            if(e){
                reject(e)
            } else {
                resolve(rows)
            }
        })
    })
}

insertClients(client) {
    return new Promise ((resolve, reject) => {
        this.db.run(
            `INSERT INTO CLIENT(nome, numMesa, data, formaPagamento) VALUES (?,?,?,?)`, 
            Object.values(client),
            (e) => {
                if(e){
                    reject(e)
            }  else{
                resolve(true)
            }
        }
        )
    })
}


deleteClients(client) {
    return new Promise ((resolve, reject) => {
        this.db.run(
            `DELETE FROM CLIENT WHERE ID == (?)`, 
            Object.values(client),
            (e) => {
                if(e){
                    reject(e)
            }  else{
                resolve(true)
            }
        }
        )
    })
}

}

module.exports = ClientDAO;