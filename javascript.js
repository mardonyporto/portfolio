const frase = document.getElementById("phrase");
const original = '"Vom Löffel bis zur Stadt."';
const traducao = '"Da colher até à cidade."';

let mostrandoOriginal = true;

setInterval(() => {
  frase.classList.add("fade"); // aplica fade-out
  setTimeout(() => {
    frase.textContent = mostrandoOriginal ? traducao : original;
    mostrandoOriginal = !mostrandoOriginal;
    frase.classList.remove("fade"); // volta com fade-in
  }, 500); // meio segundo para o fade
}, 4000); // troca a cada 4 segundos

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.querySelector(".copy-button");
  const tooltip = document.getElementById("tooltipCopiado");

  botao.addEventListener("click", function (e) {
    e.preventDefault();

    const texto = this.dataset.copy; // pega o texto do data-copy

    navigator.clipboard.writeText(texto).then(() => {
      // pegar posição do botão
      const rect = botao.getBoundingClientRect();

      tooltip.style.left = rect.left + "px";
      tooltip.style.top = rect.bottom + 20 + window.scrollY + "px";

      tooltip.classList.add("show");

      setTimeout(() => {
        tooltip.classList.remove("show");
      }, 2000);
    });
  });
});
