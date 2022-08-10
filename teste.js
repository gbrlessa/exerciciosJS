
let label_ano = "Ano: ";
let label_sm = "Salário mínimo: ";
let label_inflacao = "Inflação IPCA: ";

let crescimento_salarial_2011 = ((salarios[1].valor - salarios[0].valor)/salarios[0].valor)*100;
let crescimento_salarial_2012 = ((salarios[2].valor - salarios[1].valor)/salarios[1].valor)*100;


for (let salario of salarios) {
    let ano_salario = salario.ano.toString();
    let valor_salario = "R$ "+salario.valor.toString();
    let valor_salario_formatado = valor_salario.replace(".", ",");

    console.log(label_ano.padEnd(25, ".") + ano_salario);
    console.log(label_sm.padEnd(25, ".") + valor_salario_formatado +"\n\n");

}

for (let inflacao of inflacoes) {

    let ano_inflacao = inflacao.ano.toString();
    let valor_inflacao = inflacao.valor.toString()+"%";

    let valor_inflacao_formatada = valor_inflacao.replace(".", ",");

    console.log("Ano: " + ano_inflacao.padStart(25, "."));
    console.log("Inflação IPCA: " + valor_inflacao_formatada.padStart(16, ".")+"\n\n");

}