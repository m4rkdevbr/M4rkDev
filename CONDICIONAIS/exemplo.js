const temIngresso = true;
const censura = 16;
const idade = 18;

if (idade < censura) {
    console.log("Menor de idade");
} else if (temIngresso) {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}   





//tem ingresso e idade maior ou igual a censura

if (temIngresso === true && idade >= censura) {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}
