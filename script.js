
const numberOne = document.getElementById('first');
const numberTwo = document.getElementById('second');
const numberThree = document.getElementById('third');
const numberFour = document.getElementById('fourth');
const numberFive = document.getElementById('fifth');
const numberSix = document.getElementById('sixth');

const numbers = [numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix];

const getterGame = () => {
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const res1 = getRandomInt(30) + 1 + getRandomInt(30) + 1;
const res2 = getRandomInt(30) + 1 + getRandomInt(30) + 1;
const res3 = getRandomInt(30) + 1 + getRandomInt(30) + 1;
const res4 = getRandomInt(30) + 1 + getRandomInt(30) + 1;
const res5 = getRandomInt(30) + 1 + getRandomInt(30) + 1;
const res6 = getRandomInt(30) + 1 + getRandomInt(30) + 1;

numberOne.innerHTML = res1;
numberTwo.innerHTML = res2;
numberThree.innerHTML = res3;
numberFour.innerHTML = res4;
numberFive.innerHTML = res5;
numberSix.innerHTML = res6;
}
