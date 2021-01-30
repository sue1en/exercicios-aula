// -------------------------
// ALUNA: Suelen Batista
// -------------------------
// 01 - Escreva um programa que solicite ao usuário que informe o tamanho dos três lados de um triângulo e o programa retorno o tipo de triângulo correspondente aos valores informados. Observação:

// Triângulo Equilátero 3 lados iguais
// Triângulo Isósceles 2 lados iguais
// Triângulo Escaleno todos os lados diferentes
// ---------------------------------------------

console.log('--------------------------------------------');
console.log( 'Vamos descobrir o qual o tipo do triângulo.')
console.log('--------------------------------------------');

const readline = require('readline-sync');

const lado1 = readline.question('Insira o valor do lado 1: \n');
const lado2 = readline.question('Insira o valor do lado 2: \n');
const lado3 = readline.question('Insira o valor do lado 3: \n');

if (lado1 === lado2 && lado2 === lado3){
    console.log('Este é um triangulo equilátero, pois possui 3 lados iguais.');

} else if ((lado1 === lado2 && lado2 != lado3)||(lado1 != lado2 && lado2 === lado3)||(lado1 === lado3 && lado1 != lado2)){
    console.log('Este é um triangulo isósceles, pois possui 2 lados iguais.');

} else if (lado1 !== lado2 && lado2 !== lado3){
    console.log('Este é um triangulo escaleno, pois possui 3 lados diferentes.');
}

console.log('-------------------------------------');
console.log( '          Fim do Programa.          ')
console.log('-------------------------------------');