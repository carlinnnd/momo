const frases = [
  "Eu te amo mais do que consigo explicar ❤️",
  "Cada dia com você é um presente, Momo 🎁",
  "Te amar é a melhor parte da minha vida 💖",
  "Momo, você é meu tudo 💘",
  "Nunca vou cansar de dizer: EU TE AMO! 💌",
  "Se eu pudesse, te abraçava agora e nunca soltava 🤗",
  "Amar você me dá paz, força e alegria 🌈",
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
}


function criarCoracoes() {
  const heartsDiv = document.querySelector(".hearts");
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${3 + Math.random() * 5}s`;
    heart.style.fontSize = `${16 + Math.random() * 20}px`;
    heart.style.setProperty('--x', Math.random());
    heart.innerHTML = "❤️";
    heartsDiv.appendChild(heart);
  }
}
criarCoracoes();
