let secret = Math.floor(Math.random() * 100) + 1;
let guess = "";
let timer = 60;
let interval = setInterval(() => {
  timer--;
  document.getElementById("timer").textContent = timer;
  if (timer <= 0) resetGame("Tempo esgotado!");
}, 1000);

document.querySelectorAll(".key").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("click-sound").play();
    const val = btn.textContent;
    if (val === "←") {
      guess = guess.slice(0, -1);
    } else if (val === "OK") {
      checkGuess();
    } else {
      if (guess.length < 3) guess += val;
    }
    document.getElementById("display").textContent = guess || "_";
  });
});

function checkGuess() {
  const num = parseInt(guess);
  if (num === secret) {
    resetGame("Você acertou!");
  } else {
    resetGame("Errou! O número era " + secret);
  }
}

function resetGame(msg) {
  clearInterval(interval);
  document.getElementById("status").textContent = msg;
  setTimeout(() => location.reload(), 3000);
}
