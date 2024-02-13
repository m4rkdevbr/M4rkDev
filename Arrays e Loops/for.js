const nomesDeEstudantes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


//inicializa a variável i com 0; enquanto i for menor que 6, executa o bloco de código; incrementa i em 1 //antes de tudo - a pergunta(execução) - vai pra execução - incremento
for (let i = 0; i < 6; i++) { 
        console.log(nomesDeEstudantes[i]);
}

//hardcoded
for (let i = 0; i < nomesDeEstudantes.length; i++) {
    console.log(nomesDeEstudantes[i]);
}

//let indice = 0;                             //cria uma variável chamada índice e atribui o valor 0 a ela // incializa avariavel que guarda um indice
//
//while (indice < nomesDeEstudantes.length) { //enquanto o índice for menor que o tamanho do array // parte de teste - até quando você quer fazer isso
//    console.log(nomesDeEstudantes[indice]); //exibe o nome do estudante
//indice++;                                   //incrementa o índice // o que fazer quando chegar na ultima interassão do loop
//}
