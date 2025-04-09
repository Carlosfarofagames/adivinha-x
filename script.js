
let level = 1;
let max = 10;
let number = 0;
let score = 0;
let timer;
let timeLeft = 10;
const audio = new Audio('success.mp3');

function startGame() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  nextLevel();
}

function nextLevel() {
  number = Math.floor(Math.random() * max) + 1;
  document.getElementById("level").textContent = level;
  document.getElementById("max").textContent = max;
  document.getElementById("guess").value = "";
  document.getElementById("feedback").textContent = "";
  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 10;
  document.getElementById("time").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  if (guess === number) {
    audio.play();
    score += 10;
    level++;
    max += 5;
    document.getElementById("score").textContent = score;
    nextLevel();
  } else {
    document.getElementById("feedback").textContent = "Tente novamente!";
  }
}

function endGame() {
  clearInterval(timer);
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("game-over").style.display = "block";
  document.getElementById("final-score").textContent = score;
}

function restartGame() {
  score = 0;
  level = 1;
  max = 10;
  document.getElementById("score").textContent = score;
  document.getElementById("game-over").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  nextLevel();
}

// PWA install prompt
window.addEventListener('beforeinstallprompt', e => {
  e.prompt();
});
