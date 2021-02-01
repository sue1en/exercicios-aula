// -------------------------
// ALUNA: Suelen Batista
// -------------------------
// 05 - Escreva um programa que percorra todos os valores de um array de objetos contendo como atributos o nome e o sexo dos alunos e permita que o usuário informe, 1 se o usuário esta presente ou 2 se o usuário faltou,  e após o usuário responder todos os itens o programa deverá exibir todos os itens da lista e o seu status de presença. Observação: para cada item da lista respondido o valor informado pelo usuário deverá ser armazenado para que possa estar sendo apresentado ao final do programa.

const readline = require('readline-sync');

const listaAlunos = [{ nome: 'Joao', sexo: 'masculino'}, { nome: 'Maria', sexo: 'feminino'}, { nome: 'Jose', sexo: 'masculino'}, { nome: 'Ana', sexo: 'feminino'}];

console.log('------------------------------------');
console.log( 'Lista de presença: \n');
console.log( 'Selecione 1 - Presente | 2 - faltou');
console.log('------------------------------------');

var presentes = [];
var faltou = [];

for (var index = 0; index < listaAlunos.length; index++){
    const aluno = listaAlunos[index];
    const testeAluno = readline.question('Aluno ' + aluno.nome + ': \n');
    
    if ( testeAluno === '1'){
        presentes.push(aluno.nome);
    } else if ( testeAluno === '2'){
        faltou.push(aluno.nome);
    }
}
console.log('\n' );

console.log('-----------------------');
console.log('Alunos presentes: \n' );
console.log( presentes );
console.log('\n' );

console.log('-----------------------');
console.log('Aluno que faltaram: \n' );
console.log( faltou );
console.log('\n' );

console.log('------------------');
console.log('Fim do programa');
console.log('------------------');