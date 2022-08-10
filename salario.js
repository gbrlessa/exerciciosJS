import entradaDados from 'readline-sync';

let salarios = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflacoes = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52},
];

let label_ano = "Ano: ";
let label_sm = "Salário mínimo: ";
let label_inflacao = "Inflação IPCA: ";
let label_cs = "Crescimento salarial: -";

console.log("Escolha uma das alternativas:\n");
console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let menu = entradaDados.question("Digite o numero da sua escolha: ");

switch(menu){

    case "1":
        for (let salario_minimo of salarios) {

            let ano_salario = salario_minimo.ano;
            let valor_salario = salario_minimo.salario;
            let valor_salario_formatado = valor_salario.toFixed(2).replace(".",",");

            console.log(label_ano.padEnd(25, ".") + ano_salario);
            console.log(label_sm.padEnd(25, ".") +"R$" + valor_salario_formatado +"\n\n");

        }
    break;

    case "2":
        for (let inflacao of inflacoes) {

            let ano_inflacao = inflacao.ano;
            let valor_inflacao = inflacao.ipca;
        
            let valor_inflacao_formatada = valor_inflacao.toFixed(2).replace(".",",")+"%";
        
            console.log(label_ano.padEnd(25, ".") + ano_inflacao);
            console.log(label_inflacao.padEnd(25, ".") + valor_inflacao_formatada+"\n\n");
        
        }
    break;

    case "3":
        
        for (let i=0; i<salarios.length;i++){

            let ano = salarios[i].ano;
            let valor_salario = salarios[i].salario;
            let valor_inflacao = inflacoes[i].ipca;
            let salario_anterior = salarios[i-1];



            console.log(label_ano + ano);
            console.log(label_sm + valor_salario);
            console.log(salario_anterior);
            console.log(label_inflacao + valor_inflacao+"\n\n");

        }


    break;

    default:
        console.log("Opção Inválida");
    break;
}