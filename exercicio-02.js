// -------------------------
// ALUNA: Suelen Batista
// -------------------------
// 02 - Escreva um programa que solicite ao usuário um número qualquer e o programa responda imprimindo na tela se o número informado é impar ou par.
// ---------------------------------------------

const readline = require('readline-sync');

const numero = readline.question('Insira um numero: \n');

if (numero % 2 === 0){
    console.log('O numero ' + numero + ' é par.');
} else {
    console.log('O numero ' + numero + ' é ímpar.');
}

console.log('Fim do programa.');