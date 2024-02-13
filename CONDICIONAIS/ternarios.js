const saldo =1;
const unidade = (saldo === 1 ? "real" : "reais");

console.log(`Você tem ${saldo} ${unidade}`);

console.log(`Você tem ${saldo} ${saldo === 1 ? 'real' : 'reais'}`);
// Output: Você tem saldo positivo

if (saldo > 0) {
    console.log("saldo positivo");
} else {
    console.log("saldo negativo");
} 

if (saldo == 1) {
    console.log(unidade = "real");
} else {
    unidade = "reais";
} 
console.log(`Você tem ${saldo} ${unidade}`);
// Output: Você tem 1 real