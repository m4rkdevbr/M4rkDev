const temIngresso = true;
const censura = 16;
const idade = 18;
const estaComOsPais = treu;

// tem INgreso E
// Tem idade maior ou igual a censura OU está aco os pais

if (temIngresso === true) {
    if (idade >= censura || estaComOsPais === true){
        console.log("Pode entrar");
    }
    else {
        console.log("Barrada");
    }
}

if (temIngresso) {
    if (idade >= censura || estaComOsPais === true){
        console.log("Pode entrar");
    }
    else {
        console.log("Barrada");
    }
}