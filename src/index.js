const botoesCarrossel = document.querySelectorAll(".botao");
const imagemCarrossel = document.querySelectorAll(".imagem");

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    console.log(indice);

    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");

    botao.classList.add("selecionado");

    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");

    imagemCarrossel[indice].classList.add("ativa");
  });
});
