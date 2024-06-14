'use strict';

let number;
let score;
let highScore = 0;

let body = document.querySelector('body');
let message = document.querySelector('.message');
let labelScore = document.querySelector('.label-score');
let labelHighsore = document.querySelector('.label-highscore');

window.onload = reset();


function reset() {
    body.style.backgroundColor = "#222";
    number = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    labelScore.textContent = '🧩 Score = '+ score;
    message.textContent = "Start guessing...";
    document.querySelector('.guess').value = "";
}


document.querySelector('.again').addEventListener('click', reset);


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess || guess < 1 || guess > 20) {
        message.textContent = "⛔️ Not a valid number!";
        document.querySelector('.guess').value = "";
    } else if (guess === number) {
        // win!
        body.style.backgroundColor = "#60b347";
        message.textContent = "🏆 You win!";
        score--;
        if (score > highScore) highScore = score;

    } else {
        message.textContent = "Guess too " + (guess < number) ? "low!" : "high!";
        score--;
    };
    labelScore.textContent = '🧩 Score = '+ score;
    labelHighsore.textContent = '🥉 Highscore: ' + highScore;
});
