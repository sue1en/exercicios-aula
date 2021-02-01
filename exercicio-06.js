// -------------------------
// ALUNA: Suelen Batista
// -------------------------
// 06 - Escreva um programa solicite ao usuário o primeiro nome e o programa imprima na tela este nome 100 vezes, porém ao imprimir o nome solicitado o programa deverá exibir para cada linha apresentada o nome 10 vezes. Exemplo
// Informe o nome:  Ezer
// Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | - linha 1 
// Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | - linha 2 
// Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | - linha 3 
// Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | - linha 4 
// Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | - linha 5 
// Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | - linha 6 
// Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | - linha 7 
// Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | - linha 8 
// Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | - linha 9 
// Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | Ezer | - linha 10
// Fim do programa

console.log('\n')
console.log('Início do Programa')
console.log('-------------------------')

const readline = require('readline-sync');
var entradaNome = readline.question('Digite seu nome: \n');
var nomeRepete = (entradaNome + ' | ');

console.log('\n');
console.log('----------------------------------------------------------');

for (var indice = 0; indice<10; indice++){
    console.log(nomeRepete.repeat(10)); 
}

console.log('----------------------------------------------------------');
console.log('Fim do Programa!');