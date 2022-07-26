'use strict';
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else {
    if (score > 1) {
      if (guess > 0 && guess <= 20 && number === guess) {
        document.querySelector('.message').textContent = 'Correct Answer!';
        document.querySelector('.number').textContent = number;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }
      } else if (guess > 0 && guess <= 20 && number < guess) {
        document.querySelector('.message').textContent = ' Too High';
        score = score - 1;
        document.querySelector('.score').textContent = score;
      } else if (guess > 0 && guess <= 20 && number > guess) {
        document.querySelector('.message').textContent = 'Too Low';
        score = score - 1;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          'enter number in between 1 and 20';
      }
    } else {
      document.querySelector('.message').textContent = 'You Have Lost';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  number = Math.trunc(Math.random() * 20 + 1);
});
