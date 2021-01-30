// -------------------------
// ALUNA: Suelen Batista
// -------------------------
// 04 - Escreva um programa que apresente na tela do usuário uma lista de opções como apresentado abaixo:
// 1 - Somar | 2 - Subtrair | 3 - Muiltiplicar | 4 - Dividir | -1 Sair 
// Após apresentar as opções ao usuário o programa deverá recolher do usuário a opção desejada:
// Se o valor informado for igual a uma operação matemática, o programa deverá solicitar o primeiro número ao usuário, na sequência deverá solicitar o segundo número e por fim apresentar ao usuário o resultado final da operação. 

// Se o valor informado for -1 que corresponde a opção Sair apresentada o sistema deverá apresentar uma mensagem avisando que está desligando e o programa deve ser encerrado.
// ---------------------------------------------


while (true){

        console.log('-------------------------------------------------------------------');
        console.log( '1 - Somar | 2 - Subtrair | 3 - Muiltiplicar | 4 - Dividir | -1 Sair')
        console.log('--------------------------------------------------------------------');

        const readline = require('readline-sync');
        var operacao = readline.question('Escolha a operacao: \n')


        if (operacao == 1){
                const numero1 = readline.question('Digite o primeiro valor: \n');
                const numero2 = readline.question('Digite o segundo valor: \n');
                const resultadoSoma = Number(numero1) + Number(numero2);
                console.log ('O resultado é: ' + resultadoSoma);
        }

        if (operacao == 2){
                const numero1 = readline.question('Digite o primeiro valor: \n');
                const numero2 = readline.question('Digite o segundo valor: \n');
                const resultadoSubtracao = Number(numero1) - Number(numero2);
                console.log ('O resultado é: ' + resultadoSubtracao);
        }
        if (operacao == 3){
                const numero1 = readline.question('Digite o primeiro valor: \n');
                const numero2 = readline.question('Digite o segundo valor: \n');
                const resultadoMultiplicacao = Number(numero1) * Number(numero2);
                console.log ('O resultado é: ' + resultadoMultiplicacao);
        }
        if (operacao == 4){
                const numero1 = readline.question('Digite o primeiro valor: \n');
                const numero2 = readline.question('Digite o segundo valor: \n');
                const resultadoDivisao = Number(numero1) / Number(numero2);
                console.log ('O resultado é: ' + resultadoDivisao);
        }

        if (operacao == -1){
        console.log ('O programa foi desligado.');
        return;
        }
}

