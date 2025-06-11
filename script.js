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
