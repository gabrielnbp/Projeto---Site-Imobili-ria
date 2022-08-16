function mostraAlerta() {
    alert("Formulário enviado! Iremos verificar a situação de seu CPF.");
}

var botao = document.querySelector("#submit");
botao.onclick = mostraAlerta;