function mostraAlerta() {
    alert("Não há mais imóveis em sua lista de desejos.");
}

var botao = document.querySelector("#submit2");
botao.onclick = mostraAlerta;

