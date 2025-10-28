
//'use strict'//Deve-se comentar esta linha para poder usar o this

var numero = 114;
var now = new Date();

document.getElementById('output0').textContent = now.getFullYear();
document.getElementById('output1').textContent = now.getDate();
document.getElementById('output2').textContent = now.getMonth();
document.getElementById('output3').textContent = now.getHours();
document.getElementById('output4').textContent = now.getMinutes();
document.getElementById('output5').textContent = now.getMilliseconds();
document.getElementById('output6').textContent = now.toString();
//sequencia de escape
document.getElementById('output6').textContent = 'you\'re';
//Simbolo de direitos autorais
document.getElementById('output7').textContent = "Data\nnome";
//trabalhando com strigs
var str = "Aula de JS, usando livro didático";
document.getElementById('output8').textContent = str;
//pega um caractere da string
document.getElementById('output9').textContent = str.charAt(0);
//pega a última string
document.getElementById('output10').textContent = str.charAt(str.length - 1);
//pega a faixa de string da string digitada
document.getElementById('output10').textContent = str.substring(6, 22);
//a mesma coisa que substring
document.getElementById('output11').textContent = str.slice(6, 22);
//pega as últimas 3 string
document.getElementById('output12').textContent = str.slice(-3);
//posição da primeira letra a ser procurada
document.getElementById('output13').textContent = str.indexOf("a");
//Divide em substrings
document.getElementById('output14').textContent = ":" + str.split(", ");
//substitua todas as instâncias
document.getElementById('output15').textContent = ":" + str.replace('a', '$');
//coloca todas em maiúsculas
document.getElementById('output16').textContent = ":" + str.toUpperCase();
//verifica se zero é null
document.getElementById('output16').textContent = (0 == null);
//usando o objeto global windown
globalThis.document.title = "windwons";//nome da aba
document.getElementById('output17').innerHTML = undefined;

var n = new Number(10.8888888);//Objeto numero
n = n.toFixed(3);
document.getElementById('output18').textContent = "::" + n;

//objeto wraps
var str = new String("oii");//objetos wrappers fornecem métodos que não existem nos tipos primitivos
//alert("oii".length);

var str = new String("oi");
var str = "oi";
document.getElementById('output19').innerHTML = str == str;
//Valores primitivos e imutáveis  e referências de objetos mutáveis
var a = [];
var b = a;
b[2] = 10;//JS cria elementos em tempo real
var string_vazia = "";//strign vazia é convertida em zero assim como false
//document.getElementById('output20').innerHTML= "valor de a: " + a[2];
document.getElementById('output20').innerHTML = string_vazia == 0;//se e somente se for usado a comparação fraca (==). Pois a comparação estrita (===) resulta em false
//conversoes explicitas
var n = 17;
var string_binary = n.toString(2);//binario
var string_octal = n.toString(8);//octal
var string_hexa = n.toString(16);//hexa
var StringToNumber = "4";
var Str_Numb = Number(StringToNumber);
document.getElementById('output22').innerHTML = ": " + (3 + Str_Numb);//se e somente se for usado a comparação fraca (==). Pois a comparação estrita (===) resulta em false
//representação ciêntifica
var n = 12345.567866;
var m = n.toFixed(2);
//m=n.toFixed(0);
//m=n.toExponential(3);
//m = n.toExponential(3);
m = n.toPrecision(8);
document.getElementById('output23').innerHTML = ": " + m;//se e somente se for usado a comparação fraca (==). Pois a comparação estrita (===) resulta em false
//se uma string é passada para uma função de conversão Number()
var str_ = " 3 Blind to 5";
var num = parseInt('11', 5);
document.getElementById('output23').innerHTML = "::" + parseInt(num);
//conversao de objeto para primitivo
//document.getElementById('output24').innerHTML= "Conversao: " + [1, 2, 3].toString();
//document.getElementById('output24').innerHTML = "Conversao: " + ({ x: 1, y: 2 }).toString();//[object Object]
document.getElementById('output24').innerHTML = "Conversao: " + Date(2015, 0, 2);//[object Object]

//usando typeof
var ola = "ola lucas skywallker";
var num = 1234
document.getElementById('output25').innerHTML = "a variavel \"ola\": " + ola + " ...é do tipo " + typeof (ola);
//declarando variaveis locais e globais
var nomeGlobal = "Mundo";

function saudar() {
  console.log("Olá..., " + this.nomeGlobal);
  console.log("Olá, " + window.nomeGlobal);
  console.log("Olá, " + globalThis.nomeGlobal);
}
saudar();

//valueOf()
var numb_0= "34";
var Num_1 = 4.6;
document.getElementById('output26').innerHTML= numb_0.valueOf() + Num_1.valueOf();