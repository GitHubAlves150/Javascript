'use strict'

function ProcessarEntrada(){
    var string= document.getElementById("string").value;
    document.getElementById("listeners").textContent=string;
}

var enter_= document.getElementById("btnEnter");
enter_.addEventListener("click", ProcessarEntrada);
