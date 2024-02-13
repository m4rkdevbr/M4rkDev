//escrever um program que imprima todos os numeros pares entre 1 e 50. Imprimir na mesma linha separados por espaço e virgula

//for (let i = 1; i <= 50; i++) {
//    if (i % 2 === 0) {
//        console.log(i);
//    }
//} 


while (i <= 50) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}
//O % é o operador de módulo. Ele retorna o resto da divisão de um número pelo outro. Se o resto for 0, então o número é divisível pelo outro. Se não for, então o número não é divisível pelo outro.