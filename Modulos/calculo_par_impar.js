/*=========================================================
* Objetivo: Criação de uma calculadora de tabuada;
* Data: 11/08/22
* Autor: Gyovanne Martins
* Versão: 1.1.0
=========================================================*/

const calculo = function(valorInicial, valorFinal){
    let inicial = valorInicial;
    let final = valorFinal;
    let resultado;

    console.log('Lista de números Pares\n');
    for(let i = inicial; i <= final; i++){
        resultado = i%2;
        if(resultado == 0){
            console.log(i + '\n')
        }
    }
    console.log('Lista de números Ímpares\n');
    for(let i = inicial; i <= final; i++){
        resultado = i%2;
        if(resultado != 0){
            console.log(i + '\n')
        }
    }
    process.exit(0);
}

const impar = function(valorInicial, valorFinal){
    let inicial = valorInicial;
    let final = valorFinal;
    let resultado;

    console.log('Lista de números Ímpares\n');
    for(let i = inicial; i <= final; i++){
        resultado = i%2;
        if(resultado != 0){
            console.log(i + '\n')
        }
    }
    process.exit(0);
}

const par = function(valorInicial, valorFinal){
    let inicial = valorInicial;
    let final = valorFinal;
    let resultado;

    console.log('Lista de números Pares\n');
    for(let i = inicial; i <= final; i++){
        resultado = i%2;
        if(resultado == 0){
            console.log(i + '\n')
        }
    }
    process.exit(0);
}

module.exports = {
    calculo, par, impar
}