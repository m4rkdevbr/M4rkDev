// Na compra de um determinado produto, o cleinte cosnegue um desconto de 10% caso pague a vista.
// Caso queira parcelar, a loja parcela em até 6x sem juros, mas sem desconto.
// IMprima na tela uma mensagem explicando para o cleinte como ele tem que pagar, incluindo o valor da parcela.

const valorProduto = 100;
cosnt (parcela = 6);
const desconto = 0.10;

//comprar a vista ganha 10% de desconto
if (parcela ===1) {
    console.log (` O valor do produto é R$ ${valorProduto} e você ganhou 10% de desconto, o valor final é R$ ${valorProduto - (valorProduto * desconto)}`); 
}
else {
    console.log (`O valor do produto é R$ ${valorProduto} e você pode parcelar em até 6x sem juros, o valor da parcela é R$ ${valorProduto / parcela}`);
}

// Na compra de um determinado produto, o cliente consegue um desconto de 10% caso pague à vista.
// Caso queira parcelar, a loja parcela em até 6x sem juros, mas sem desconto.
// Imprima na tela uma mensagem explicando para o cliente como ele tem que pagar, incluindo o valor da parcela.


if (parcela === 1) {
    const valorFinal = valorProduto - (valorProduto * desconto);
    console.log(`O valor do produto é R$ ${valorProduto} e você ganhou 10% de desconto, o valor final é R$ ${valorFinal}`);
} else {
    const valorParcela = valorProduto / parcela;
    console.log(`O valor do produto é R$ ${valorProduto} e você pode parcelar em até 6x sem juros, o valor da parcela é R$ ${valorParcela}`);
}

// Na compra de um determinado produto, o cliente consegue um desconto de 10% caso pague à vista.
// Se o cleinte compara acima de 400 reais ele também pode pagar e receber o desconto de 10%
// Se o cleinte comprar acima de 1000 reais ele pode parcelar em até 6x e receber o desconto de 15%
// Limitar casas decimais em 2

const valorProduto2 = 1000;
const parcela2 = 6;
const desconto2 = 0.15;


if (valorProduto2 > 1000) {
    if (parcela2 === 1) {
        const valorFinal = (valorProduto2 - (valorProduto2 * desconto2)).toFixed(2); // toFixed(2) limita as casas decimais em 2
        console.log(`O valor do produto é R$ ${valorProduto2.toFixed(2)} e você ganhou 15% de desconto, o valor final é R$ ${valorFinal}`);
    } else {
        const valorParcela = (valorProduto2 / parcela2).toFixed(2);
        console.log(`O valor do produto é R$ ${valorProduto2.toFixed(2)} e você pode parcelar em até 6x sem juros, o valor da parcela é R$ ${valorParcela}`);
    }
} else if (valorProduto2 > 400) {
    const valorFinal = (valorProduto2 - (valorProduto2 * desconto2)).toFixed(2);
    console.log(`O valor do produto é R$ ${valorProduto2.toFixed(2)} e você ganhou 10% de desconto, o valor final é R$ ${valorFinal}`);
} else if (parcela2 === 1) {
    const valorFinal = (valorProduto2 - (valorProduto2 * desconto)).toFixed(2);
    console.log(`O valor do produto é R$ ${valorProduto2.toFixed(2)} e você ganhou 10% de desconto, o valor final é R$ ${valorFinal}`);
} else {
    const valorParcela = (valorProduto2 / parcela2).toFixed(2);
    console.log(`O valor do produto é R$ ${valorProduto2.toFixed(2)} e você pode parcelar em até 6x sem juros, o valor da parcela é R$ ${valorParcela}`);
}

// Na compra de um determinado produto, o cliente consegue um desconto de 10% caso pague à vista.
// Se o cleinte compara acima de 400 reais ele também pode pagar e receber o desconto de 10%
// Se o cleinte comprar acima de 1000 reais ele pode parcelar em até 6x e receber o desconto de 15%
// Limitar casas decimais em 2
// As compras acima de 1000 reais podem ser parceladas em até 12x mas sem o desconto de 10% e se quiser parcelar de 7x a 12x será aplicado uma taca de juros de 1% ao mês.
//Antes de calcular o valor da parcela é preciso calcular o novo montante a pagar de acordo com a seguinte firmula: M = C.(1 + i)^n

const valorProduto3 = 1000;
const parcela3 = 12;
const desconto3 = 0.15; 
const juros = 0.01;
const meses = 6;

if (valorProduto3 > 1000) {
    if (parcela3 <= 6) {
        /**
         * Calcula o valor final de um produto com desconto.
         *
         * @param {number} valorProduto3 - O valor do produto antes do desconto.
         * @param {number} desconto3 - O valor do desconto em decimal (ex: 0.1 para 10% de desconto).
         * @returns {string} O valor final do produto com desconto, formatado com duas casas decimais.
         */
        const valorFinal = (valorProduto3 - (valorProduto3 * desconto3)).toFixed(2);
        console.log(`O valor do produto é R$ ${valorProduto3.toFixed(2)} e você ganhou 15% de desconto, o valor final é R$ ${valorFinal}`);
    } else if (parcela3 <= 12) {
        const montante = valorProduto3 * (1 + juros) ** meses;
        const valorParcela = (montante / parcela3).toFixed(2);
        console.log(`O valor do produto é R$ ${valorProduto3.toFixed(2)} e você pode parcelar em até 12x, o valor da parcela é R$ ${valorParcela}`);
    }
} else if (valorProduto3 > 400) {
    const valorFinal = (valorProduto3 - (valorProduto3 * desconto3)).toFixed(2);
    console.log(`O valor do produto é R$ ${valorProduto3.toFixed(2)} e você ganhou 10% de desconto, o valor final é R$ ${valorFinal}`);
}

if (parcela3 === 1) {
    const valorFinal = (valorProduto3 - (valorProduto3 * desconto)).toFixed(2);
    console.log(`O valor do produto é R$ ${valorProduto3.toFixed(2)} e você ganhou 10% de desconto, o valor final é R$ ${valorFinal}`);
} else {    
    const valorParcela = (valorProduto3 / parcela3).toFixed(2);
    console.log(`O valor do produto é R$ ${valorProduto3.toFixed(2)} e você pode parcelar em até 6x sem juros, o valor da parcela é R$ ${valorParcela}`);
}
