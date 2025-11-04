'use strict'

//ARRAYS BÁSICOS E OBJETOS
//1. Arrays Esparsos
//=======Exercício 1: Crie um array esparso e:===============================
// a) Adicione valores nos índices 0, 4 e 8 apenas
// b) Use um loop for para percorrer e mostrar todos os valores (incluindo undefined)
// c) Verifique o comprimento do array usando .length
let meuArray=[];
//--MOSTRA O VETOR VAZIO
document.getElementById('output0').innerHTML=":" + meuArray;
meuArray=[0, 4, 8];
console.log("===Exercicio 1===");
console.log("meu array vazio: " + meuArray);
for(let i=0; i<3; i++)
{
    console.log("i: " + meuArray[i]);
}
console.log("conprimento: " + meuArray.length);//saida 3


//2. Objetos Básicos
//=======Exercício 2: Crie um objeto representando um produto com:===========
// a) Propriedades: nome, preço, categoria
// b) Acesse cada propriedade usando notação de ponto
// c) Modifique o preço do produto

let objeto={};
objeto={carro:'Mercedes', combustivel: 'Gasolina', N_portas:'4', preco: '20,456.00'};
console.log("======Exercicio 2=====")
console.log("objeto.carro: " + objeto.carro);
console.log("objeto.combustivel: " + objeto.combustivel);
console.log("objeto.N_portas: " + objeto.N_portas);
console.log("objeto.preco: " + objeto.preco)
console.log("=======alterando o valor do preco====");
objeto.preco='44.000';
console.log("novo valor de objeto.preco: " + objeto.preco);

//3. Objetos Aninhados
console.log("===Exercicio 3===");
//========Exercício 3: Crie um objeto "aluno" com:============================
// a) Propriedades: nome, idade, endereco (objeto aninhado)
// b) Endereco deve ter: rua, numero, cidade
// c) Acesse a cidade do aluno
const aluno={
    nome: 'lucas',
    endereco:{
        cidade: 'Floripa',
        bairro:'tonquet de lavira',
        rua:'jorge lacerda',
        cep:12345,
        numero: 43        
    },
    ra:333333,
    curso: 'Engenharia Eletrônica'
};
console.log('Cidade: ' + aluno.nome);
console.log('Cep: ' + aluno.endereco.cep);
console.log('alterando o nome e o endereço');
aluno.nome='Jonas';
aluno.endereco.bairro='Pindorama';
console.log('nome: ' + aluno.nome);
console.log('bairro: ' + aluno.endereco.bairro);


//MÉTODOS DE CRIAÇÃO DE ARRAYS
//4. Array.fill()
//console.log("===Exercicio 4===");
// Exercício 4: Use Array.fill() para:
// a) Criar um array de 5 posições preenchido com "vazio"
// b) Criar um array de 10 números 1
// c) Preencher apenas as posições 2 a 4 de um array existente com "X"
let meuNovoArray= Array(30);
for(let c=0; c<meuNovoArray.length; c++){
    meuNovoArray.fill(c);
    console.log('[' + c + ']: ' +meuNovoArray[c]);
}
let vetorInt=Array(10).fill(1);
for(let c=0; c<vetorInt.length; c++){
    console.log('[' + ']:' + vetorInt[c]);
}
vetorInt[2]=22;
vetorInt[4]=41;
vetorInt[8]=18;
console.log("indice 2: " + vetorInt[2]);
console.log("indice 4: " + vetorInt[4]);
console.log("indice 8: " + vetorInt[8]);


//5. Array.from()
// Exercício 5: Use Array.from() para:
// a) Criar um array [1, 2, 3, 4, 5]
// b) Criar um array com os quadrados dos números de 1 a 5
// c) Criar um array de 3 posições com objetos {valor: índice}
let arrayFrom=Array.from({length:10},()=>25)
for(let c=0; c < arrayFrom.length; c++)
{
    console.log("array from: " + arrayFrom[c]);
}
let vet00= Array.from({length:10});
for(let c=0; c < vet00.length ; c++){
    vet00[c]= c**2;
    console.log('Quadrado: ' + vet00[c]);
}


//6. Arrays com Diferentes Tipos
// Exercício 6: Crie arrays contendo:
// a) Apenas strings (frutas)
// b) Apenas números (preços)
// c) Misturando strings e números
let arrayString=['maca', 'uva', 'manga'];
let arrayNumbers=[4, 4.5, 33, 23.90];
let arrayMix=['carro', 4, 'feijao', 34.9];
console.log("arrayString: " + arrayString[0]);
console.log("arrayString: " + arrayString[1]);
console.log("arrayString: " + arrayString[2]);
console.log("arrayNumber: " + arrayNumbers[0]);
console.log("arrayNumber: " + arrayNumbers[1]);
console.log("arrayNumber: " + arrayNumbers[2]);
console.log("arrayMix: " + arrayMix[0]);
console.log("arrayMix: " + arrayMix[1]);
console.log("arrayMix: " + arrayMix[2]);
console.log("arrayMix: " + arrayMix[3]);




// MÉTODOS DE ITERAÇÃO
//7. forEach()


// Exercício 7: Dado const numeros = [10, 20, 30, 40];
// a) Use forEach() para imprimir cada número + 5
// b) Some todos os números usando forEach()
// c) Crie um novo array com o dobro de cada número
let vet01=[1, 1, 23];
vet01.forEach(resultado=> console.log(': ' + vet01));
let soma_=null;
let res = 0;
vet01.forEach(function(indice){
    console.log("soma do vetor: " + (res += indice) );
});

//8. map()


// Exercício 8: Dado const precos = [100, 200, 300];
// a) Crie um novo array com 10% de desconto
// b) Converta cada preço para string formatada "R$ X,XX"
// c) Crie um array de objetos {original: X, comDesconto: Y}

//9. filter()


// Exercício 9: Dado const idades = [15, 18, 22, 17, 25, 16];
// a) Filtre apenas maiores de 18 anos
// b) Filtre idades pares
// c) Filtre idades entre 16 e 20 anos

//MÉTODOS DE REDUÇÃO
//10. reduce() - Soma


// Exercício 10: Dado const vendas = [150, 200, 75, 300, 125];
// a) Calcule o total de vendas
// b) Encontre a maior venda
// c) Calcule a média das vendas

//11. reduce() - Objetos Complexos


// Exercício 11: Dado const produtos = [
//   {nome: 'A', preco: 100}, {nome: 'B', preco: 200}, {nome: 'C', preco: 150}
// ];
// a) Some todos os preços
// b) Encontre o produto mais caro
// c) Crie um objeto {total: X, quantidade: Y}

//MÉTODOS DE MODIFICAÇÃO
//12. splice()


// Exercício 12: Dado const letras = ['A', 'B', 'C', 'D', 'E'];
// a) Remova 'C' e adicione 'X' na mesma posição
// b) Adicione 'Y' e 'Z' no início sem remover nada
// c) Remova os 2 últimos elementos

//13. slice()


// Exercício 13: Dado const numeros = [10, 20, 30, 40, 50, 60];
// a) Crie um novo array com elementos do índice 1 ao 3
// b) Crie uma cópia completa do array
// c) Pegue os últimos 3 elementos

//MÉTODOS DE BUSCA
//14. find() e findIndex()


// Exercício 14: Dado const pessoas = [
//   {id: 1, nome: 'Ana'}, {id: 2, nome: 'Bruno'}, {id: 3, nome: 'Carla'}
// ];
// a) Encontre a pessoa com id = 2
// b) Encontre o índice da pessoa 'Carla'
// c) Encontre a primeira pessoa com nome começando com 'B'

//15. includes() e indexOf()


// Exercício 15: Dado const cores = ['red', 'blue', 'green', 'yellow', 'blue'];
// a) Verifique se 'green' existe
// b) Encontre o índice da primeira ocorrência de 'blue'
// c) Verifique se 'purple' não existe

//16. some() e every()


// Exercício 16: Dado const notas = [7, 8, 6, 9, 5];
// a) Verifique se há alguma nota abaixo de 6
// b) Verifique se todas as notas são maiores que 4
// c) Verifique se pelo menos uma nota é 10

//MÉTODOS DE TRANSFORMAÇÃO
//17. concat() e join()


// Exercício 17: 
// a) Crie dois arrays e concatene-os
// b) Junte um array de palavras em uma frase com espaços
// c) Crie uma string com elementos separados por " - "

//18. sort()


// Exercício 18: Dado const numeros = [34, 7, 23, 32, 5];
// a) Ordene em ordem crescente
// b) Ordene em ordem decrescente
// c) Ordene um array de strings alfabeticamente

//19. flat() e flatMap()


// Exercício 19: Dado const matriz = [1, [2, 3], [4, [5, 6]]];
// a) Achete em 1 nível
// b) Achete completamente
// c) Use flatMap() para duplicar cada número

//20. reverse()


// Exercício 20: Dado const frutas = ['maçã', 'banana', 'laranja'];
// a) Inverta a ordem do array
// b) Crie uma função que recebe um array e retorna invertido
// c) Verifique se o array original foi modificado