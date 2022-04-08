// 4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
//assim como a quantidade de dias pelos quais o carro foi alugado. 
//Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.


let precoDia = 60
let KmExtra = 0.15
let diasAlugado = 15
let percorridosKm = 900

let diaria = (precoDia * diasAlugado)
let precoKm = (percorridosKm * KmExtra)
let precoTotal = (diaria + precoKm)

let media = (percorridosKm/diasAlugado)

console.log(`Total a pagar: R$ ${precoTotal},00 e Media de Kilometros por dia: ${media} km`); 




