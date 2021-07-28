module.exports = class ClienteDao{

    constructor(bd){
        this.bd = bd
    }

    MostrarCliente(){
        return new Promise((resolve, reject)=>{
            const query = "SELECT * FROM CLIENTE"
            this.bd.all(query, (e, res)=>{

                if(e) reject(`Erro ao acessar o banco de dados. ${e} `)
                else resolve(res)
            })
        })
    }

    MostrarUmCliente(id){
        return new Promise((resolve, reject)=>{
            const query = 'SELECT * FROM CLIENTE WHERE ID = (?)'
            this.bd.all(query, id, (e, res) =>{
                if(e) reject(`Erro ao acessar o banco de dados. ${e}`)
                else resolve(res)
            })
        })
    }

    IncluirCliente(infos){  
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO CLIENTE (NOMENACOMANDA, NUMMESA, TAXASERVICOS, DATAHORA, FORMAPAGAMENTO) VALUES (?, ?, ?, ?, ?)'
    
            this.bd.run(query, Object.values(infos), (error,res) => {
                if(error) reject(`Erro ao adicionar Cliente. ${error}`)
                else resolve('Cliente adicionado com sucesso')
            })
        })
    
    }

    DeletarCliente(id){

        return new Promise((resolve, reject) =>{

            const query = 'DELETE FROM CLIENTE WHERE ID = (?)'
            this.bd.run(query, id, (e, res)=> {
                if(e) reject(`Erro ao deletar cliente! ${e}`)
                else resolve('Cliente deletado com sucesso!')
            })
        })

    }

    EditarCliente(infos, id){
        return new Promise((resolve, reject)=>{

            const query = `UPDATE CLIENTE SET NOMENACOMANDA = (?), NUMMESA = (?),
             TAXASERVICOS = (?), DATAHORA = (?), FORMAPAGAMENTO = (?) WHERE id = (?)`
    

              const parametros = [infos[0],infos[1],infos[2],infos[3],infos[4], id]
              
              this.bd.run(query, parametros, (e, res)=>{
                if(e) reject(`Erro ao editar cliente. ${e}`)
                else resolve('Cliente editado com sucesso')
              })

        })
    }


}