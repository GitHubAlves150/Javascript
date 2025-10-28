//Em javaScript "Inicializadores de acesso e array" se refere a como você cria arryas e 
//Objetos, e depois acessa ou modifica seus dados. Asintaxe de inicialização mais comum
// utiliza "literais" de objetos{} e literias de array[]. 
// O acesso, por sua vez, é feito através da notação de ponto ou da notação de colchetes



//============================VETORES(array) COM VALORES INDETERMINADOS====================================
let sparseArray = [1, , , , 5];

for (let i = 0; i < sparseArray.length; i++) {
    //document.getElementById('output0').textContent = ": " + sparseArray[i]+ ".."+i;
    console.log(">> " + sparseArray[i]);
}//FIM

//============================INICIALIZANDO UM OBJETO====================================

let obj1 = { x: 2.3, y: 5.5 };
console.log("objeto: " + obj1.x, obj1.y);
//FIM

//============================OBJETO VAZIO SEM PROPRIEDADES====================================

q = {};
console.log("Objeto vazio0: " + q);
q = obj1;//Agora q é um objeto com as mesma propriedades que obj1
console.log("Objeto vazio1: " + q.x);
//FIM

//============================OBJETO ANINHADO (um dentro do outro)====================================

const pessoa = {
    nome: "Lucas",
    idade: 37,
    //endereco está dentro de pessoa
    endereco: {
        rua: "Fransisco gover",
        cep: 433333
    }//fim endereco
}
console.log("Objeto pessoa: " + pessoa.nome + "\nCEP: " + pessoa.endereco.cep);
//FIM

//============================ARRAY-INICIALIZANDO=====================================

const vetor_str = ["maça", "uva", "pera"];//VETOR_STR É AVALIADO(RECEBE) COM ELEMENTOS STRING
const vetor_number = [23, 54, 6.6, 76, 45.3];//VETOR_STR É AVALIADO(RECEBE) COM ELEMENTOS INTEIROS
console.log("vetor str: " + vetor_str);//MOSTRA NO CONSOLE DA WEB (CTRL +F12)
console.log("vetor number: " + vetor_number);

//MÉTODO MeuArray.fill
//PREENCHE TODOS OS INDICES COM VALORES ESTÁTICOS
const arrayPreenchidoComZero = Array(10).fill(0);

for (let c = 0; c < arrayPreenchidoComZero.length; c++) {
    console.log("arrayPreenchidoComZero\n" + arrayPreenchidoComZero[c]);
}


//Método MeuArray.from
//CRIA UM ARRAY DE INÍCIO E AO FIM
const vetorFrom = Array.from({ length: 5 }, (v, i) => i + 1); //A SETA => É MUITO CONHECIDA NO C++ COMO FUNÇAO LAMNBDA
for (let c = 0; c < vetorFrom.length; c++) {
    console.log("Vetor from\n" + vetorFrom[c]);
}


//MÉTODO MeumeuArray.foreach
//PARA CADA ELEMENTO(FOREACH) É EXECUTADA UMA FUNÇÃO
const meuArray = [100, 200, 300];
meuArray.forEach(num => console.log("foreach: " + (num + 2)));

//meuArray.map()
//PARA TRANSFORMAR DADOS
const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map(num => num * num);//CRIA UM NOVO ARRAY COM O RESULTADO DA CHAMADA DA FUNÇÃO PARA CADA
//ELEMENTO DO ARRAY
console.log("quadrados: " + quadrados);

//MÉTODO FILTER
//CRIA UM NOVO ARRAY COM TODOS OS ELEMENTOS QUE PASSAM EM UM TESTE IMPLEMENTADO PELA FUNÇÃO FORNECIDA.
//É IDEAL PARA EXTRAIR SUBCONJUNTOS
const vetorInteiros = [102, 404, 303, 654, 8, 3, 2];
const pares = vetorInteiros.filter(vet => vet % 2 === 0);
console.log("filter() : " + pares);

//MÉTODO MEUaRRAY.reduce()
//Executa uma função redutora em cada elemento do array, resultando em um único valor de retorno.
const vetorInt = [1, 2, 3, 4, 5, 6]
const soma = vetorInt.reduce((acumulador, NumT) => acumulador + NumT, 0);
console.log("reduce(): " + soma);//saida: 21


//============================ARRAY-MÉTODOS PARA ADICIONAR  / REMOVER ELEMENTOS=====================================
//PUSH()     - EMPURRA UM OU MAIS ELEMENTOS NO FINAL DO VETOR
//POP()      - REMOVE O ÚLTIMO ELEMENTO DO VETOR 
//UNSHIFT()  - ADICIONA UM OU MAIS ELEMENTOS NO ÍNICIO DO VETOR E RETORNA O NOVO COMPRIMENTO
//SHIFT()    - REMOVE O PRIMEIRO ELEMENTO DO VETOR E RETORNA
//SPLICE()   - PERMITE ADICIONAR, REMOVER E SUBSTITUIR ELEMENTOS EM QUALQUER POSIÇÃO. MODIFICA O ARRAY ORIGINAL

//USANDO SPLICE()
const frutas = ["maçã", "laranja", "uva", "melao", "abacaxi"];
frutas.splice(1, 1, "abacate");//REMOVE 1 ELEMENTO NA POSIÇÃO 1 DO VETOR E ADICIONA "KIWI"]
for (let c = 0; c < frutas.length; c++) {
    console.log(c + "splice:" + frutas[c]);
}


//============================ARRAY-MÉTODOS DE BUSCA E VERIFICAÇÃO=====================================
//FIND()      - RETORNA O PRIMEIRO ELEMENTO DO ARRAY QUE SATISFAZ A CONDIÇÃO DA FUNÇÃO DE TESTE 
//FINDINDEX() - RETORNA O INDICE DO PRIMEIRO ELEMENTO QUE SATISFAZ A CONDIÇAO
//INCLUDES()  - VERIFICA SE UM ARRAY CONTÉM UM DETERMINADO ELEMENTO, RETORNANDO TRUE OU FALSE
//INDEXOF()   - RETORNA O INDICE DA PRIMERA OCCORÊNCIA DE UMA VALOR ESPECIFICADO. RETORNA -1 SE NÃO ENCONTRAR
//SOME()      - VERIFICA SE PELO MENOS 1 ELEMENTO PASSA EM UM TESTE, RETORNANDO TRUE OU FALSE
//EVERY()     - VERIFIA SE TODOS OS ELEMENTOS PASSAM EM UM TESTE, RETORNANDO TRUE OU FALSE


//USANDO FIND()
const usuarios = [
    { id: 1, nome: 'lucas' },
    { id: 2, nome: 'ana' },
    { id: 3, nome: 'julia' }
];

const usuarioEncontrado = usuarios.find(user => user.id === 2);
console.log("Usuario encontrado: ");
console.log(usuarioEncontrado);

//USANDO FINDINDEX()
//SIMILAR AO FIND, MAS RETORNA O INDICE DO PRIMEIRO ELEMENTO QUE SATISFAZ A CONDIÇÃO. SE NÃO ENCONTRAR RETORNA -1
const parafusos = ['M2', 'M3', 'M4', 'M12'];
const indice_ = parafusos.findIndex(parafuso => parafuso === 'M3');
console.log("findIndex: " + indice_); //saída 1

//USANDO INCLUDES()
//VERIFICA SE EXISITE UM DETERMINADO ELEMENTOS E RETORNA TRUE OU FALSE
const vetoresInt = [1, 2, 3, 4, 5];
const contemSN = vetoresInt.includes(1);
console.log("includes: " + contemSN);//qual será a saida?  true

//USANDO SOME()
//TESTA SE PELO MENOS UM ELEMENTO NO ARRAY PASSA NO TESTE DA FUNÇÃO FORNECIDA. RETORNA TRUE OU FALSE
const idades = [18, 2, 5];
const ehmaiorDeIdade = idades.some(varQlr => varQlr >= 18);//SE PELO MENOS UM DOS INDICES FOR MAIOR QUE 18 RETORNA TRUE
console.log("some(): " + ehmaiorDeIdade);//É COMO SE FOSSE UM OR NA ELETRÔNICA

//USANDO EVERY()
//TESTA SE TODOS OS ELEMENTOS NO ARRAY PASSAM NO TESTE DA FUNÇÃO FORNECIDA. RETORNA TRUE SE TODOS PASSAM, SENAO FALSE
//É COMO SE FOSSE UM AND NA ELETRONICA
const varIdade = [18, 18, 18];
const IdadesLiberadas = varIdade.every(varQualquer => varQualquer >= 18);//SE TODOS OS INDICES FOREM MAIOR QUE 18
console.log("every(): " + IdadesLiberadas);


//============================MÉTODOS DE MANIPULAÇÃO E TRANSFORMAÇÃO=====================================
//SLICE()    - RETORNA UMA CÓPIA RASA DE PARTES DE UM ARRAY EM UM NOVO OBJETO, SEM MODIFICAR O ORIGINAL
//CONCAT()   - RETORNA UM NOVO ARRAY QUE É A JUNÇÃO DE DOIS OU MAIS ARRAYS
//JOIN()     - JUNTA TODOS OS ELEMENTOS EM UMA STRING, USANDO UM SEPARADOR ESPECIFICADO
//SORT()     - ORGANIZA OS ELEMENTOS DO ARRAY NO LUGAR. A ORDEM PADRÃO É ALFABÉTICA
//REVERSE()  - INVERTE A ORDEM DOS ELEMENTOS DO ARRAY NO LUGAR
//FLAT()     - CRIA UM NOVO ARRAY COM TODOS OS ELEMENTOS DE SUB-ARRAY CONCATENADOS NELE RECURSIVAMENTE ATÉ A PROFUNDIDADE ESPECIFICA
//FLATMAP()  - MAPEIA CADA ELEMENTO USANDO UMA FUNÇÃO E "ACHATA" O RESULTADOEM UM NOVO ARRAY


//USANDO SLICE();
//ESSES MÉTODOS SÃO UTILIZADOS PARA ALTERAR OU REORDENAR OS ELEMENTOS DE UM ARRAY, OU PARA CIRAR NOVOS ARRAYS A PARTIR DOS DADOS EXISITENTES
const cores = ['red', 'yellow', 'black', 'green', 'brow'];
const coresSecundarias =cores.slice(2, 3);
console.log("cores Secundarias: " + coresSecundarias);


//USANDO CONCAT()
//CRIA UM NOVO ARRAY COMBINANDO DOIS OU MAIS ARRAIS OU VALORES
const array1= [1, 12];
const array2= [33, 4];
const combinando= array1.concat(array2);
console.log(combinando); //concatena dois vetores

///USANDO JOIN()
//JUNTA TODOS OS ELEMENTOS DE UM ARRAY EM UMA STRING, UTILIZANDO UM SEPARADOR OPCIONAL
const palavras =['Olá', 'Mundo', 'magnifico'];
const frase = palavras.join('--');
console.log("join() : " + frase);

//USANDO SORT()
//ORGANIZA OS ELEMENTOS DO ARRAY NO LUGAR, COM BASE NA ORDEM ALFABÉTICA(PADRÃO) OU EM UMA FUNÇÃO PERSONALIZADA
const fruits = ['apple', 'banana', 'panaple', 'kiwi', 'avocado'];
console.log("sort(); " + fruits.sort());

//o mesmo para numeros
const conjuntoInteiros= [4, 3, 66, 1, 32, 98, 41, 6, 43];
console.log("com numeros: " + conjuntoInteiros.sort( (a, b)=> a-b ));
console.log("modificou o vetor: " + conjuntoInteiros);


//USANDO FLAT()
//CRIA UM NOVO ARRAY COM TODOS OS ELEMENTOS DE SUB-ARRAYS CONCATENADOS NELE RECURSIVMENTE ATÉ A PROFUNDIDADE ESPECIFICADA
const arrayAninhado = [ 1, [2, 3], [4, [5, 6]] ];
const achatado=arrayAninhado.flat(2);//profundidade 2
console.log("Achatado: " + achatado);
console.log("indice 1 do indice 2 do vetor ArrayAninhado: " + arrayAninhado[2][1]);


//USANDO FLATMAP()
//É UMA COMBINAÇÃO DO FLAP E MAP. ELE APLICA UMA FUNÇÃO EM CADA ELEMENTO DO VETOR E, EM SEGUIDA "ACHATA"  O RESULTADO EM UM NOVO ARRAY, MAS APENAS EM UM NIVEL DE PROFUNDIDADE
const frases = ['Olá, mundo!', 'JavaScript é poderoso.', 'Arrays são versáteis.'];

// Usando map() e flat() separadamente (abordagem mais longa)
const palavrasSeparadas = frases.map(frase => frase.split(' '));
// Resultado: [['Olá,', 'mundo!'], ['JavaScript', 'é', 'poderoso.'], ['Arrays', 'são', 'versáteis.']]
const palavrasAchatadas = palavrasSeparadas.flat();
// Resultado: ['Olá,', 'mundo!', 'JavaScript', 'é', 'poderoso.', 'Arrays', 'são', 'versáteis.']

// Usando flatMap() (abordagem mais curta e eficiente)
const palavrasFlatMap = frases.flatMap(frase => frase.split(' '));
console.log("FlatMap() : " + palavrasFlatMap);
// Saída: ['Olá,', 'mundo!', 'JavaScript', 'é', 'poderoso.', 'Arrays', 'são', 'versáteis.']


//USANDO REVERSE()
//INVERSE INVERTE O VETOR DE TRÁS PRA FRENTE
const frutasClassicas = ['maçã', 'banana', 'laranja'];

console.log("reverse() :" + frutasClassicas.reverse());
// Saída: ['laranja', 'banana', 'maçã']

console.log("Array original modificado: " + frutasClassicas);
// Saída: ['laranja', 'banana', 'maçã'] (o array original foi modificado)















