function mostrarOla() {
    var nome = document.getElementById("nome").value;
    document.getElementById("resposta").textContent = "Olá " + nome;
    console.log(nome);
}


function calculo(){
    let numerado= document.getElementById("numerador").value;
    let denominador= document.getElementById("denominador").value;
    document.getElementById("anwer").textContent= parseInt(numerado) / parseInt(denominador);
}