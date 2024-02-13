// Faça um programa que conta quantas letras"a" existem numa determinada palavra. Imprima o resultado na tela.

const palavra = "M4rkDev é a Minha Descrição";

let contador = 0;

for (let letra of palavra) {
    if (letra === 'a') {
        contador++;
    }
}

console.log(`A letra "a" foi encontrada ${contador} vezes!`); // A letra "a" foi encontrada 3 vezes!

