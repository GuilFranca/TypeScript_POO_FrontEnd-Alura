export class Conta {
    nome;
    saldo = JSON.parse(localStorage.getItem("saldo")) || 0;
    transacao = JSON.parse(localStorage.getItem("transacao"), (key, value) => {
        if (key === "data") {
            return new Date(value);
        }
        return value;
    }) || [];
    constructor(nome) {
        this.nome = nome;
    }
}
const conta = new Conta('Joana da Silva Oliveira');
export default Conta;
