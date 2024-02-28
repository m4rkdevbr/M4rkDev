const ladoA = 0;
const ladoB = 0;

// Modificar o código que, quando a pedra for uma bucha, digamos qual o "nome" da bucha. Bucha de 0 o nome é "Branco", 
//bucha de 1 o nome é "Ás", bucha de 2 -, o nome é "Duque", Bucha de 3, o nome é Treno, Bucha de 4, o nome é "Quadra", 
//Bucha de 5, o nome é "Quinta" e Bucha de 6, o nome é "Sena".

if (ladoA === ladoB) {
    if (ladoA === 0) {
        console.log("Branco");
    } else if (ladoA === 1) {
        console.log("Ás");
    } else if (ladoA === 2) {
        console.log("Duque");
    } else if (ladoA === 3) {
        console.log("Terno");
    } else if (ladoA === 4) {
        console.log("Quadra");
    } else if (ladoA === 5) {
        console.log("Quinta");
    } else if (ladoA === 6) {
        console.log("Sena");
    }
} else {
    console.log("NÃO");
}
