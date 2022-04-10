let numeroDeCartas;
let condicao = true;
let cartas;
let imgCount = 0;
const cardList = [];

const imagensCartas = [
  "revertitparrot.gif",
  "tripletsparrot.gif",
  "bobrossparrot.gif",
  "metalparrot.gif",
  "explodyparrot.gif",
  "fiestaparrot.gif",
  "unicornparrot.gif",
];

//// begin
qtdDeCartas();

// pega a quantidade de cartas
function qtdDeCartas() {
  while (condicao) {
    numeroDeCartas = Number(prompt("Com quantas cartas deseja jogar?"));

    if (
      numeroDeCartas % 2 === 0 &&
      numeroDeCartas >= 4 &&
      numeroDeCartas <= 14
    ) {
      arrumarCartas();
      condicao = false;
    } else {
      alert("Escolha um número par entre 4 e 14!");
    }
  }
}

// adiciona uma quantidade de cartas dentro da array cardList
function arrumarCartas() {
  console.log(numeroDeCartas);

  for (let i = 0; i < numeroDeCartas; i++) {
    cardList.push(
      `<div class='card'onClick = "virar(this)"/>
      <div class='face back hidden'>  <img class="imgBack" src='img/${imagensCartas[imgCount]}' alt=''/></div>
      <div class='face front'" > <img src='img/front.png' alt=''/></div>
      </div>`
    );
    if (i % 2 === 1) {
      imgCount++;
    }
  }
  embaralhar();
}

function embaralhar() {
  cartasAleatorias = cardList.sort(comparador);
  cartas = document.querySelector(".listCards");
  console.log(cartas);

  for (let i = 0; i < numeroDeCartas; i++) {
    cartas.innerHTML += cartasAleatorias[i];
    console.log(cardList);
  }

  function comparador() {
    return Math.random() - 0.5;
  }
}

function virar(element) {
  element.querySelector(".front").classList.add("hiddenFront");
  element.querySelector(".back").classList.remove("hidden"); // coloca um display none no primeiro frontcard que ler
  //                                                              // tira o hidden do primeiro gif
}

// carta escolhida = frontOn OFF
// adicionar na array
//embaralhar a array
// pegar as cartas da array

// quando clicar
// adicionar numa array de cartas selecionadas
// comparar se as duas são iguais
// se iguais, levar para outra array de cartas certas
// ganha se as cartas da array de cartas certas tiver as mesmas cartas da array inicial
