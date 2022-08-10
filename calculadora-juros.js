import entradaDados from 'readline-sync';

console.log("Aplicação de juros: \n");

let valor_devido = entradaDados.question("Informe o valor devido: ");
if (valor_devido > 0) {

    let dias = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
    let taxa = 0;
    if (dias > 0) {
        if (dias > 15) {
            taxa = 10;
        }
        else {
            taxa = 5;
        }

        let valor_total = Number(valor_devido) + ((taxa / 100) * valor_devido);

        console.log("\nValor original da dívida: " + valor_devido);
        console.log("Dias atrasados: " + dias);
        console.log("Taxa de juros: " + taxa + "%");
        console.log("Valor total com juros: " + valor_total);
    }
    else {
        console.log("Você está em dia!")
    }
}
else {
    console.log("O Valor da dívida deve ser maior que zero!")
}
