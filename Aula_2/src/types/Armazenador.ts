export class Armazenador{
    // Criando o constructor sem nada, pois não precisamos enviar nada, ele vai servir para fazer o intermedio para resgatar os valores do localstorage
    private constructor() {}

    // static serve para poder chamar os metodos sem criar um objeto.
    static salvar (chave: string, valor: any): void {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }

    // Método obter que será responsável por resgatar no localstorage as informações do extrato
    // recebe uma chave que em qual localização a informação está
    // Opção opcional de reviver para conversão do valor que está sendo recebido
    static obter (chave: string, reviver?: (this: any, key: string, value: any) => any) {
        
        const valor = localStorage.getItem(chave);

        if (valor === null) {
            return null
        }

        if (reviver) {
            return JSON.parse(valor, reviver);
        }

        return JSON.parse(valor);

    }

}