const frases = [
  "Te amo mais do que ontem e menos do que amanhã 💖",
  "Você é a melhor parte do meu dia 🥰",
  "Momo, minha vida é melhor com você 💘",
  "Você é meu porto seguro ❤️",
  "A cada batida do meu coração, eu te amo mais 💓",
  "Você é o amor da minha vida, minha princesa! ✨",
  "Seu jeito, seu cheiro, sua beleza... tudo em você me encanta 😍",
  "Momo, você é a mulher dos meus sonhos, meu tudo 💫",
  "Cada momento ao seu lado é um pedacinho do paraíso 😇",
  "Minha linda, sou completamente apaixonado por você ❤️‍🔥",
  "Com você, a vida é uma melodia perfeita e cheia de amor 🎶",
  "Você é a perfeição em pessoa, minha Momo 🌸",
  "Sou eternamente grato por ter você na minha vida 🙏
  "Eu amo o jeitinho que você me olha com esses olhinhos lindos🥺",
  "Te observar em silêncio já é felicidade pra mim.",
  "É impossível não sorrir quando você aparece.",
  "Você tem o dom de transformar dias comuns em momentos incríveis."
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
const fotos = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg",
  "foto4.jpg",
  "foto5.jpg",
  "foto6.jpg",
  "foto7.jpg",
  "foto8.jpg",
  "foto9.jpg"
];

let fotoAtual = -1;

function trocarFoto() {
  let novaFoto;
  do {
    novaFoto = Math.floor(Math.random() * fotos.length);
  } while (novaFoto === fotoAtual);

  fotoAtual = novaFoto;
  document.getElementById("slide").src = fotos[fotoAtual];
}

setInterval(trocarFoto, 3000); // troca a cada 3 segundos
