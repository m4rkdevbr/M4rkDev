//
// Encontrar a letra "k" em uma palavra e parar a execução do loop.

const palavra = "M4rkDev";

let encontrado = false;

for (let letra of palavra) {
    if (letra === 'h') {
        console.log('A letra "k" foi encontrada!');
        encontrado = true;
        break;
    }
}
if (!encontrado)
    console.log('não tem k'); // A letra "k" foi encontrada! Fim do loop!