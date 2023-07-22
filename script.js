'use strict';
let total = 0,
  current1 = 0,
  current2 = 0,
  userState = 1;
let playing = true;
document.querySelector('.dice').classList.add('hidden');
const roll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const hold = document.querySelector('.btn--hold');
const current1El = document.getElementById('current--0');
const current2El = document.getElementById('current--1');
const player = document.querySelectorAll('.player');
const newGame = document.querySelector('.btn--new');

console.log(score1El);
dice.src = `dice-1.png`;
function gameFinished() {
  if (current1 >= 100 || current2 >= 100) {
    playing = false;
    if (playing == false) {
      document.querySelector('.dice').classList.add('hidden');
      document
        .querySelector(`.player--${userState - 1}`)
        .classList.add('player--winner');
    }
  }
}
roll.addEventListener('click', function () {
  if (playing) {
    document.querySelector('.dice').classList.remove('hidden');

    let randNum = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${randNum}.png`;
    total += randNum;

    if (randNum === 1) {
      player[0].classList.toggle('player--active');
      player[1].classList.toggle('player--active');
      total = 0;
      userState = userState === 1 ? 2 : 1;
      score1El.textContent = total;
      score2El.textContent = total;
    }
    if (userState === 1) {
      score1El.textContent = total;
    } else {
      score2El.textContent = total;
    }
  }
});

hold.addEventListener('click', function () {
  score1El.textContent = 0;
  score2El.textContent = 0;
  player[0].classList.toggle('player--active');
  player[1].classList.toggle('player--active');
  if (userState === 1) {
    current1 = total;
    total = 0;
    current1El.textContent = current1;
    gameFinished();
    userState = 2;
  } else {
    current2 = total;
    total = 0;
    current2El.textContent = current2;
    gameFinished();
    userState = 1;
  }
});

newGame.addEventListener('click', newGameFn);

function newGameFn() {
  playing = true;
  (total = 0), (current1 = 0), (current2 = 0), (userState = 1);
  player[0].classList.add('player--active');
  player[1].classList.remove('player--active');
  score1El.textContent = total;
  score2El.textContent = total;
  current1El.textContent = current1;
  current2El.textContent = current2;
  document.querySelector('.dice').classList.add('hidden');
  document.querySelectorAll('.player')[0].classList.remove('player--winner');
  document.querySelectorAll('.player')[1].classList.remove('player--winner');
}
