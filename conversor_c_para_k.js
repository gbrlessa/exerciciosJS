import entradaDados from 'readline-sync';

console.log("Conversor de Celsius para Kelvin: \n")

let C = entradaDados.question("Informe o valor em C: ")
let K = Number(C) + 273.15;

console.log(C+"°C equivale a "+K+"K");