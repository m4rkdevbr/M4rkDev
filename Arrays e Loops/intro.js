// Arrays guardam dados semelhantes em uma mesma variavel, e podem ser acessados por um indice
// a primeiro item de um Array sempre vai estar no INDICE/INDICE
//Para descobrir o tanto de itens que temos em um Array, usamos a propriedade length
//Para descobrir o tamanha de um Array e só usar a propriedade length
// Para saber o tamanho de uma array é so ver o numero de arrays e subitrair 1



//newFunction();

//function newFunction() {
//    const nomesDeEstudantes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
//    const notasDosEstudantes = [10, 8, 9, 7, 5, 8];
//    console.log(nomesDeEstudantes[0]);
//    console.log(nomesDeEstudantes[1]);
//    console.log(nomesDeEstudantes[2]);
//    console.log(nomesDeEstudantes[3]);
//    console.log(nomesDeEstudantes[4]);
//    console.log(nomesDeEstudantes[5]);
//}

// Fazer uma relação dos estudantes e suas notas
newFunction();

function newFunction() {
    const estudantes = [
        { name: 'José', grade: 10 },
        { name: 'Lucas', grade: 8 },
        { name: 'Nádia', grade: 9 },
        { name: 'Fernanda', grade: 7 },
        { name: 'Cairo', grade: 5 },
        { name: 'Joana', grade: 8 }
    ];

    for (let i = 0; i < estudantes.length; i++) {
        console.log(estudantes[i].name + ': ' + estudantes[i].grade);
    }
}
    