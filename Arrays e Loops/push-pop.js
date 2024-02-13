//os colchetes [] são usados para criar um array, e os elementos são separados por vírgulas.
//os arrays são indexados a partir de 0, ou seja, o primeiro elemento do array é o elemento 0.
//para acessar um elemento do array, você deve usar o nome do array seguido de colchetes [] e o índice do elemento que você quer acessar.
//para saber o tamanho de um array, você pode usar a propriedade length.
//para adicionar um elemento ao final de um array, você pode usar o método push.
//para remover o último elemento de um array, você pode usar o método pop.
//para adicionar um elemento ao início de um array, você pode usar o método unshift.
//para remover o primeiro elemento de um array, você pode usar o método shift.
//para encontrar a posição de um elemento em um array, você pode usar o método indexOf.
//para remover um elemento de um array, você pode usar o método splice.
//para copiar um array, você pode usar o método slice.
//para concatenar arrays, você pode usar o método concat.
//para transformar um array em uma string, você pode usar o método join.
//para inverter a ordem dos elementos de um array, você pode usar o método reverse.
//para ordenar os elementos de um array, você pode usar o método sort.
//para percorrer os elementos de um array, você pode usar um loop for ou o método forEach.
//para criar um array a partir de uma string, você pode usar o método split.
//para verificar se um elemento está presente em um array, você pode usar o método includes.
//para criar um novo array a partir de um array existente, você pode usar o método map.
//para filtrar os elementos de um array, você pode usar o método filter.
//para reduzir os elementos de um array a um único valor, você pode usar o método reduce.
//para verificar se todos os elementos de um array satisfazem uma condição, você pode usar o método every.
//para verificar se pelo menos um elemento de um array satisfaz uma condição, você pode usar o método some.
//para criar um array a partir de outro array, você pode usar o operador spread.
//para criar um array com um número específico de elementos, você pode usar o método from.
//para criar um array com elementos iguais, você pode usar o método fill.
//para criar um array com elementos gerados por uma função, você pode usar o método of.
//para criar um array com elementos gerados por uma função, você pode usar o método from.

//Sempre colocar () quando é Método que é o que faz realmente executar a ação



const nomesDeEstudantes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'], notasDosEstudantes = [10, 8, 9, 7, 5, 8];

nomesDeEstudantes.push('Fábio Alves Marques'); //adiciona um novo elemento ao final do array

nomesDeEstudantes[nomesDeEstudantes.length] = 'M4rk1'; //adiciona um novo elemento ao final do array
console.log(nomesDeEstudantes);