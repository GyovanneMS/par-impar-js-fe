/*=========================================================
* Objetivo: Criação de uma calculadora de tabuada;
* Data: 11/08/22
* Autor: Gyovanne Martins
* Versão: 1.3.0
=========================================================*/

const calculo = function(valorInicial, valorFinal){
    let inicial = valorInicial;
    let final = valorFinal;
    let quantidadePar = 0;
    let quantidadeImpar = 0;
    let resultado;

    console.log('Lista de números Pares\n');
    for(let i = inicial; i <= final; i++){
        resultado = i%2;
        if(resultado == 0){ 
            console.log(i + '\n');
            quantidadePar++;
        }
    }
    console.log('A quantidade de números pares encontrados é de: ' + quantidadePar);
    console.log('\nLista de números Ímpares\n');
    for(let i = inicial; i <= final; i++){
        resultado = i%2;
        if(resultado != 0){
            console.log(i + '\n');
            quantidadeImpar++;
        }
    }
    console.log('A quantidade de números impares encontrados é de: ' + quantidadeImpar);
    process.exit(0);
}

const impar = function(valorInicial, valorFinal){
    let inicial = valorInicial;
    let final = valorFinal;
    let quantidade = 0;
    let resultado;

    console.log('Lista de números Ímpares\n');
    for(let i = inicial; i <= final; i++){
        resultado = i%2;
        if(resultado != 0){
            console.log(i + '\n');
            quantidade++;
        }
    }
    console.log('A quantidade de números impares encontrados é de: ' + quantidade);
    process.exit(0);
}

const par = function(valorInicial, valorFinal){
    let inicial = valorInicial;
    let final = valorFinal;
    let quantidade = 0;
    let resultado;

    console.log('Lista de números Pares\n');
    for(let i = inicial; i <= final; i++){
        resultado = i%2;
        if(resultado == 0){
            console.log(i + '\n');
            quantidade++;
        }
    }
    console.log('A quantidade de números pares encontrados é de: ' + quantidade);
    process.exit(0);
}

const escolhas = function(escolha, primeiro, ultimo){
    let escolhe = escolha; 
    let inicial = primeiro;
    let final = ultimo;

    if(escolhe == ''){
        console.log('Por favor digte algo');
    } if(escolhe == 'ambos' || escolhe == 'os dois'){
        calculo(inicial, final);
    } else if(escolhe == 'pares' || escolhe == 'par'){
        par(inicial, final);
    } else if(escolhe == 'impares' || escolhe == 'impar'){
        impar(inicial, final);
    } else{
        console.log('Escreveste algo de errado.');
    }

    process.exit(0);
}

const inicialCerto = function(valorInicial){
    let inicial = valorInicial;

    if(inicial === ''){
        console.log('Por favor digite o número inicial!');
        process.exit(0);
    } 
    if(inicial < 0 || inicial > 500){
        console.log('Por favor, apena um número entre 0 e 500');
        process.exit(0);
    } 
}

const finalCerto = function(valorFinal, valorInicial){
    let final = valorFinal;
    let inicial = valorInicial;

    if(final === ''){
        console.log('Por favor digite o número final!');
        process.exit(0);
    } 
    if(final < 100 || final > 1000){
        console.log('Por favor, apena um número entre 100 e 1000');
        process.exit(0);
    } 
    if(final < inicial){
        console.log(final + inicial)
        console.log('Por favor, o final deve ser maior que o inicial!');
        process.exit(0);
    } 
    if(final == inicial){
        console.log('Por favor, devem ser diferentes');
        process.exit(0);
    } 
}

module.exports = {
    calculo, par, impar, escolhas, inicialCerto, finalCerto
}