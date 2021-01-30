// -------------------------
// ALUNA: Suelen Batista
// -------------------------
// 03 - Escreva um programa que solicite ao usuário um número qualquer e o programa responda imprimindo na tela se o número informado é um número primo.
// ---------------------------------------------

const readline = require('readline-sync');
const numero = readline.question('Insira um numero: \n');

let numeroTeste = (Number(numero) -1);
let numeroPrimo = true;


while (numero > 1){
    if (Number(numero) % numeroTeste === 0) {
        numeroPrimo = false;
        break;
    } else {
        
}

}