//NUma "peneira" (processo seletivo para novos jogadores) de vôlei, em alguns clubes. o primeiro filtro é ver
// se um determinado candidato tem a altura mínima de 1,80m. Faça um programa que, dada a altura de um candidato,
// diga se ele está aprovado ou reprovado nessa primera fase do processo.


const alturaEmCmFase1 = 185;

if (alturaEmCmFase1 >= 180) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
} 
//Pasta Resolução Condicionais em M4rkDev

//Após passar na primeira fase de uma peneira de vôlei, os candidatos aprovados são separados em grupos diferentes, de acordo com suas alturas,
// para serem testados para posições expecíficas. Faça um programa que, dada a altura de um determinado candidato, diga para qul posição ele deverá
// fazer o teste. Considere as seguintes informações:
// - de 180cm, imprimeir REPROVADO
//DE 180CM á 185cm, imprimir LIBERO
// DE 186cm á 195cm, imprimir PONTEIRO
// DE 196cm á 205cm, imprimir OPOSTO
// ACIMA DE 205cm, imprimir CENTRAL

const alturaEmCmFase2 = 185;

if (alturaEmCmFase2 < 180) {
    console.log("Reprovado")
} else if (alturaEmCmFase2 <= 185) {
    console.log("Libero")
}
else if (alturaEmCmFase2 <= 195) {
    console.log("Ponteiro")
}
else if (alturaEmCmFase2 <= 205) {
    console.log("Oposto")
}
else {
    console.log("Central")
}
//Pasta Resolução Condicionais em M4rkDev
