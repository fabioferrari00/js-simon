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

//creo il countdown nella quale l'user deve memorizzare i numeri
const countdown = setInterval(() => {
  time--;
  countdownElement.innerText = time;

  if (time === 0) {
    clearInterval(countdown);


    //rimuovo e aggiungo le classi d-none
    form.classList.remove('d-none');

    numbersList.classList.add('d-none');
    instructions.innerText = `Digita i numeri che ricordi e visualizza il risultato`;
  }
}, 1000);

const confirm = () => {

  //definisco la variabile che mi contiene i numeri inseriti dall'utente
  const userNumbers = [];

  for (let i = 0; i < inputs.length; i++) {
    userNumbers.push(parseInt(inputs[i].value));
  }

  //confronto i 5 numeri random e i 5 numeri dell'utente

  const correctAnswers = [];

  for (let i = 0; i < userNumbers.length; i++) {
    if (numbers.includes(userNumbers[i])) {
      correctAnswers.push(userNumbers[i]);
    }
  }

  //mostro il messaggio all'utente

  message.classList.remove('text-danger');
  message.innerText = `Hai indovinato ${correctAnswers.length} (${correctAnswers})`;

}

//assegno al button la funzione confirm
button.addEventListener('click', (e) => {
  e.preventDefault();

  confirm();
});