// Faça um programa que encontre as letras"a" e os numeros 4 existem numa determinada palavra. Imprima o resultado na tela.

const palavra = "M4rkDev é a Minha Descrição";

let encontrado = false;

for (let letra of palavra) {
    if (letra === 'a' || letra === '4') {
        console.log('A letra "a" e o número "4" foram encontrados!');
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log('não tem a ou 4');
}
    // A letra "a" e o número "4" foram encontrados! Fim do loop!

