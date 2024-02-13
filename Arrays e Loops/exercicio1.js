// criar um array com 5 nomes de paises

const paises = ['Brasil', "Chile", 'Australia', 'EUA', 'Japão'];


paises.pop(); //Remove um pais do fim do array(lista)
    console.log(paises);

paises.unshift('Brasil');//Adiciona um novo elemento ao início do array(lista)
    console.log(paises);  

paises.shift();//Remove um pais do inico do array(lista)
    console.log(paises);

paises.push('Austria');
    console.log(paises); //adiciona um novo elemento ao final do array(lista) 

const ultimo = paises[paises.length -1]; //adiciona um novo elemento ao final do array(lista)
    console.log(ultimo);
    console.log(paises[2]); //imprime o pais na posição 2
    console.log(paises[1]);//imprime o segundo pais do array
    console.log(paises[4]);//imprime o ultimo pais da lista



