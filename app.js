/*=========================================================
* Objetivo: Criação da interface de uma calculadora de par e impar;
* Data: 11/08/22
* Autor: Gyovanne Martins
* Versão: 1.1.0
=========================================================*/

console.log('Calculo de par e impar');

//import do arquivo de função para realizar calculos
const {calculo, par, impar} = require('./Modulos/calculo_par_impar.js');
var readLine = require('readline');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Escolha o começo (de 0 - 500): ', function (valorInicial){
    let inicial = valorInicial;

    if(inicial == ''){
        console.log('Por favor digite o número inicial!');
        process.exit(0);
    } 
    if(inicial < 0 || inicial > 500){
        console.log('Por favor, apena um número entre 0 e 500');
        process.exit(0);
    } 
    entradaDados.question('Escolha o final (de 100 - 1000): ', function (valorFinal){
        let final = valorFinal;
    
        if(final == ''){
            console.log('Por favor digite o número final!');
            process.exit(0);
        } 
        if(final < 100 || final > 1000){
            console.log('Por favor, apena um número entre 100 e 1000');
            process.exit(0);
        } 
        if(final < inicial){
            console.log('Por favor, o final deve ser maior que o inicial!');
            process.exit(0);
        } 
        if(final == inicial){
            console.log('Por favor, devem ser diferentes');
            process.exit(0);
        } 

        entradaDados.question('Do que precisas? Mostrar pares, impares ou ambos: ', function (escolhaDado){
            let escolha = sescolhaDado;
            
            if(escolha == ''){
                console.log('Por favor digte algo');
                process.exit(0);
            } if(escolha == 'ambos'){
                calculo(inicial, final);
                process.exit(0);
            } else if(escolha == 'pares'){
                par(inicial, final);
                process.exit(0);
            } else if(escolha == 'impares'){
                impar(inicial, final);
                process.exit(0);
            } else{
                console.log('Escreveste algo de errados')
            }
        });
    });
});