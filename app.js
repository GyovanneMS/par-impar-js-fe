/*=========================================================
* Objetivo: Criação da interface de uma calculadora de par e impar;
* Data: 11/08/22
* Autor: Gyovanne Martins
* Versão: 1.3.0
=========================================================*/

console.log('Calculo de par e impar');

//import do arquivo de função para realizar calculos
const {calculo, par, impar, escolhas, inicialCerto, finalCerto} = require('./Modulos/calculo_par_impar.js');
var readLine = require('readline');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Escolha o começo (de 0 - 500): ', function (valorInicial){
    let inicial = parseInt(valorInicial);

    inicialCerto(inicial);

    entradaDados.question('Escolha o final (de 100 - 1000): ', function (valorFinal){
        let final = parseInt(valorFinal);

        finalCerto(final, inicial);

        entradaDados.question('Do que precisas? Mostrar pares, impares ou ambos: ', function (escolhaDado){
            let escolha = escolhaDado;
            
            escolhas(escolha, inicial, final);
        });
    });
});