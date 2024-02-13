const temIngresso = true;
const censura = 16;
const idade = 18;

if (temIngresso === true) {
    if (idade >= censura) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada pela entrada");
    }

} else {
    console.log ("Barrada pela falta de ingresso");
}