let numberOfCards = prompt("Com quantas cartas você quer jogar?");
while (numberOfCards % 2 !== 0 || numberOfCards < 4 || numberOfCards > 14) {
  numberOfCards = prompt("Insira um número par entre 4 e 14!");
}

let cards = [
  "img/revertitparrot.gif",
  "img/tripletsparrot.gif",
  "img/bobrossparrot.gif",
  "img/metalparrot.gif",
  "img/explodyparrot.gif",
  "img/fiestaparrot.gif",
  "img/unicornparrot.gif",
];

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
    <li class="face"></li>
    <li class="back-face back img"><img src="${chosenCards[i]}"></li>
    </ul>`;
  }
}

addCards();
