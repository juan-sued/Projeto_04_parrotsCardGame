let jogadas = 0;
let matches = 0;

let idInterval;
let cards = [
  "img/revertitparrot.gif",
  "img/revertitparrot.gif",
  "img/tripletsparrot.gif",
  "img/tripletsparrot.gif",
  "img/bobrossparrot.gif",
  "img/bobrossparrot.gif",
  "img/metalparrot.gif",
  "img/metalparrot.gif",
  "img/explodyparrot.gif",
  "img/explodyparrot.gif",
  "img/fiestaparrot.gif",
  "img/fiestaparrot.gif",
  "img/unicornparrot.gif",
  "img/unicornparrot.gif",
];

let numberOfCards = prompt("Com quantas cartas você quer jogar? (4~14)");
while (numberOfCards % 2 !== 0 || numberOfCards < 4 || numberOfCards > 14) {
  numberOfCards = prompt("Insira um número par entre 4 e 14!");
}

let chosenCards = cards.slice(0, numberOfCards);
chosenCards.sort(comparador);

function comparador() {
  return Math.random() - 0.5;
}

function addCards() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < chosenCards.length; i++) {
    ul.innerHTML += `
    <ul class="card" onClick="turnSelectedCard(this)">
    <li class="face">
    <img src="img/front.png">
    </li>
    <li class="back-face back img"><img src="${chosenCards[i]}"></li>
    </ul>`;
  }
}

addCards();

function turnSelectedCard(element) {
  let cardSelecionadoBack = document.querySelector(".selectedBackFace");
  let cardSelecionadoFront = document.querySelector(".selectedFrontFace");
  element.querySelector(".face").classList.add("selectedFrontFace");
  element.querySelector(".back-face").classList.add("selectedBackFace");

  if (cardSelecionadoBack !== null) {
    if (
      element.querySelector(".back-face").innerHTML ===
      cardSelecionadoBack.innerHTML
    ) {
      element.querySelector(".face").classList.add("matchFrontFace");
      element.querySelector(".back-face").classList.add("matchBackFace");
      cardSelecionadoFront.classList.add("matchFrontFace");
      cardSelecionadoBack.classList.add("matchBackFace");
      matches++;
      console.log(matches);
    }
    setTimeout(function () {
      element.querySelector(".face").classList.remove("selectedFrontFace");
      element.querySelector(".back-face").classList.remove("selectedBackFace");
      document
        .querySelector(".selectedBackFace")
        .classList.remove("selectedBackFace");
      document
        .querySelector(".selectedFrontFace")
        .classList.remove("selectedFrontFace");
    }, 1000);
  }

  jogadas++;

  if (matches === numberOfCards / 2) {
    console.log(matches);
    setTimeout(function () {
      alert(`Você ganhou em ${jogadas} jogadas e levou ${counter} segundos!`);
    }, 50);
    setTimeout(function () {
      playAgain();
    }, 2000);
  }
}

function playAgain() {
  let anotherRoundInvite = prompt(
    "Que tal mais uma partida? (digite 'sim' ou 'não')"
  );

  if (anotherRoundInvite === "sim") {
    {
      window.location.reload();
    }
  } else if (anotherRoundInvite === "não") {
    clearInterval(idInterval);
    alert("VLW POR JOGAR, MEU BOM!");
  }
}
counter = 0;
function timer() {
  idInterval = setInterval(increaseTimer, 1000);
}

function increaseTimer() {
  counter++;
  document.querySelector(".timer").innerHTML = `${counter}s`;
}
timer();
