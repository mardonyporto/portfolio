/* TYPING */

const words = ["Product", "User Interface", "User Experience"];

const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 60;
const delayBetweenWords = 1500;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => (isDeleting = true), delayBetweenWords);
    }
  } else {
    typingElement.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();

/* PHRASE */
const phrase = document.querySelector(".phrase");
const path = window.location.pathname;

let translatedText = "";

if (path.startsWith("/pt")) {
  translatedText = '"Da colher à cidade"';
} else {
  translatedText = '"From the spoon to the city"';
}

const texts = ['"Vom Löffel bis zur Stadt"', translatedText];

let index = 0;

function changeText() {
  phrase.style.opacity = 0;

  setTimeout(() => {
    phrase.textContent = texts[index];
    phrase.style.opacity = 1;
    index = (index + 1) % texts.length;
  }, 500);
}

changeText(); // primeira vez
setInterval(changeText, 3000); // troca a cada 3s

/* COPY EMAIL */
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

/* LANGUAGE SWITCH */

const selector = document.querySelector(".language-selector");
const button = document.querySelector(".selected-language");
const options = document.querySelectorAll(".language-options a");
const currentPath = window.location.pathname;

// Abrir/fechar dropdown
button.addEventListener("click", () => {
  selector.classList.toggle("open");
});

// Detectar idioma atual pela URL
options.forEach((option) => {
  if (currentPath.includes(option.dataset.lang)) {
    const flag = option.querySelector("img").src;
    const text = option.querySelector("span").innerText;

    button.querySelector("img").src = flag;
    button.querySelector("span").innerText = option.dataset.lang.toUpperCase();
  }
});

// Fechar ao clicar fora
document.addEventListener("click", (e) => {
  if (!selector.contains(e.target)) {
    selector.classList.remove("open");
  }
});
