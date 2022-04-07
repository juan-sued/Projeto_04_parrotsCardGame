let numeroDeCartas;
let condicao = true;
while (condicao) {
  numeroDeCartas = Number(prompt("Com quantas cartas deseja jogar?"));

  if (numeroDeCartas % 2 === 0 && numeroDeCartas >= 4 && numeroDeCartas <= 14) {
    alert(`${numeroDeCartas} é um numero válido`);
    arrumarCartas();
    condicao = false;
  }
}

function arrumarCartas() {
  alert("entrou na função");
  console.log(numeroDeCartas);
  const cartas = document.querySelector(".listCards");
  for (i = 0; i < numeroDeCartas; i++) {
    cartas.innerHTML +=
      "<div class='card'><img src='img/front.png' alt='' /></div>";
  }
}
