//=================Objeto global=========================
var book = {
    topic: "toticos",
    numero: 23
};

function acessando_objetos() {
    document.getElementById("output1").textContent = book.topic;
    document.getElementById("output0").textContent = book.numero;
    
}

function acessando_objetos_novamente(){
    document.getElementById("output10").textContent = book.topic;
    document.getElementById("output00").textContent = book.numero;
    
}

function modificando_O_Objeto() {

    book.numero = document.getElementById("modificanumero").value;
    book.topic = document.getElementById("modificatopic").value;

    document.getElementById("output2").textContent = book.numero;
    document.getElementById("output3").textContent = book.topic;

}

var btn = document.getElementById("btnOutput2");
btn.addEventListener('click', modificando_O_Objeto);
