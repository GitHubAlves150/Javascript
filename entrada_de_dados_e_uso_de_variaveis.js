'use strict'


var nome= prompt("Qual seu nome");
alert("olá "+nome);
let dinheiro= prompt("Quanto de money?");
alert("money: "+ dinheiro);
//Operações envolvendo STRINGS e NÚMEROS
var a = "20"; //string
var b = a*2; //b=40
var c = a/2; //c=10
var d = a-2;//d=18
var e = a+2;//e=202 por que está sendo concatenado 20 + 2
alert("e ="+ e);//exibe o valor de e

/*
Na ADIÇÂO, o javascript não converte a string em número.
Pois o sinal de (+) é usado para concatenação, para isto, é usado
a conversão Number(), parseInt(), parseDouble()
*/
var f = Number(a);
e = f+2;
alert("Novo valor de e:"+e );

//Tipos de variaveis

var fruta= "abacaxi";
var preco=4.43;
var verdade_= true;
var falso_= false;
var novovalor;
alert(fruta+", "+preco+", "+verdade_+", "+falso_+", "+novovalor);

//usando parse int
var ano= prompt("ano que você nasceu:");
alert("Você tem  "+parseInt(2025-ano));
