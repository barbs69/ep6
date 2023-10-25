function botar() {
  var respostaUsuario1 = document.querySelector('input[name="resposta1"]:checked');
  var respostaUsuario2 = document.querySelector('input[name="resposta2"]:checked');
  var respostaUsuario3 = document.querySelector('input[name="resposta3"]:checked');
  var respostaUsuario4 = document.querySelector('input[name="resposta4"]:checked');

  if (respostaUsuario1 && respostaUsuario2 && respostaUsuario3 && respostaUsuario4) {
    if (respostaUsuario1.value === "correto") {
      document.getElementById("resultado1").innerHTML = "acertou";
    } else {
      document.getElementById("resultado1").innerHTML = "errou";
    }

    if (respostaUsuario2.value === "correto") {
      document.getElementById("resultado2").innerHTML = "acertou";
    } else {
      document.getElementById("resultado2").innerHTML = "errou";
    }

    if (respostaUsuario3.value === "correto") {
      document.getElementById("resultado3").innerHTML = "acertou";
    } else {
      document.getElementById("resultado3").innerHTML = "errou";
    }

    if (respostaUsuario4.value === "correto") {
      document.getElementById("resultado4").innerHTML = "acertou";
    } else {
      document.getElementById("resultado4").innerHTML = "errou";
    }
  } else {
    alert("Não deixe nenhuma questão em aberto");
  }
}
