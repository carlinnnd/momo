const frases = [
  "Te amo mais do que ontem e menos do que amanhã 💖",
  "Você é a melhor parte do meu dia 🥰",
  "Momo, minha vida é melhor com você 💘",
  "Você é meu porto seguro ❤️",
  "A cada batida do meu coração, eu te amo mais 💓"
];

function mostrarFrase() {
  const fraseEl = document.getElementById("frase");
  const index = Math.floor(Math.random() * frases.length);
  fraseEl.textContent = frases[index];
}

function startApp() {
  const audio = document.getElementById("musica");
  audio.play();
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("app").style.display = "block";
}

setInterval(() => {
  const coracao = document.createElement("div");
  coracao.className = "coração";
  coracao.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(coracao);
  setTimeout(() => coracao.remove(), 4000);
}, 500);
