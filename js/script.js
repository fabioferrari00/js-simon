const numbersList = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const inputs = document.querySelectorAll('input');
const countdownElement = document.getElementById('countdown');
const message = document.getElementById('message');
const instructions = document.getElementById('instructions');
const button = document.querySelector('button');

//creo una funzione che genera 5 numeri random compresi da N a N
const genrateRandomNumbers = (min, max) => {
  const random = [];

  while (random.length < 5) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;

    if (random.includes(number) === false) {
      random.push(number);
    }
  }
  return random;
}

//assegno il risultato della funzione ad una variabile
const numbers = genrateRandomNumbers(1, 50);

//ciclo l'array dei numeri per inserirli nell'HTML
for (let i = 0; i < numbers.length; i++) {
  numbersList.innerHTML += `<li class="list-item">${numbers[i]}</li>`;
}

//mi creo una variabile per il countdown
let time = 10;

//mostro il valore di time all'interno di countdown
countdownElement.innerText = time;

