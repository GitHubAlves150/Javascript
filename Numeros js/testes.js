'use strict'


var numero =114;
var now= new Date();

document.getElementById('output0').textContent= now.getFullYear();
document.getElementById('output1').textContent= now.getDate();
document.getElementById('output2').textContent= now.getMonth();
document.getElementById('output3').textContent= now.getHours();
document.getElementById('output4').textContent= now.getMinutes();
document.getElementById('output5').textContent= now.getMilliseconds();
document.getElementById('output6').textContent= now.toString();
//sequencia de escape
document.getElementById('output6').textContent= 'you\'re';
//Simbolo de direitos autorais
document.getElementById('output7').textContent= "Data\nnome";
//trabalhando com strigs
var str= "Aula de JS, usando livro didático";
document.getElementById('output8').textContent= str;
//pega um caractere da string
document.getElementById('output9').textContent= str.charAt(0);
//pega a última string
document.getElementById('output10').textContent= str.charAt(str.length-1);
//pega a faixa de string da string digitada
document.getElementById('output10').textContent= str.substring(6,22);
//a mesma coisa que substring
document.getElementById('output11').textContent= str.slice(6, 22);
//pega as últimas 3 string
document.getElementById('output12').textContent= str.slice(-3);
//posição da primeira letra a ser procurada
document.getElementById('output13').textContent= str.indexOf("a");
//Divide em substrings
document.getElementById('output14').textContent= ":"+str.split(", ");
//substitua todas as instâncias
document.getElementById('output15').textContent= ":"+str.replace('a', '$');
//coloca todas em maiúsculas
document.getElementById('output16').textContent= ":"+str.toUpperCase();
//verifica se zero é null
document.getElementById('output16').textContent= (0==null);
//usando o objeto global windown
window.document.title= "windwon";//nome da aba

