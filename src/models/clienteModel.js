class Cliente  {
    constructor(nomeNaComanda, numMesa, taxaServicos, dataHora, formaPagamento){

        this.nomeNaComanda = nomeNaComanda
        this.numMesa = numMesa
        this.taxaServicos = taxaServicos
        this.dataHora = dataHora
        this.formaPagamento = formaPagamento
    }
}

module.exports = Cliente