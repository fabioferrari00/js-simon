const numbersList = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const inputs = document.querySelectorAll('input');
const countdownElement = document.getElementById('countdown');
const message = document.getElementById('message');
const instructions = document.getElementById('instructions');
const button = document.querySelector('button');

//creo una funzione che genera 5 numeri random compresi da N a N
const generateRandomNumbers = (min, max) => {
  const random = [];

  while (random.length < 5) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;

    if (random.includes(number) === false) {
      random.push(number);
    }
  }
  return random;
}