/*? no js js needed from me */
const pemain = document.getElementById("pemain");
const bot = document.getElementById("bot");
const hasil = document.getElementById("hasil");
const reset = document.getElementById("reset");

let klik = 0;
let gtg = "src/icons/scissors.png";
let bt = "src/icons/stone.png";
let kts = "src/icons/paper.png";

reset.style.display = "none";

function gunting() {
  klik = Math.floor(Math.random() * 3) + 1;
  reset.style.display = "block";
  pemain.src = "src/icons/scissors.png";

  if (klik == 1) {
    bot.src = gtg;
  } else if (klik == 2) {
    bot.src = bt;
  } else if (klik == 3) {
    bot.src = kts;
  }

  if (bot.src.includes("scissors") && pemain.src.includes("scissors")) {
    hasil.textContent = "seri!";
  } else if (bot.src.includes("stone") && pemain.src.includes("scissors")) {
    hasil.textContent = "kamu kalah!";
  } else if (bot.src.includes("paper") && pemain.src.includes("scissors")) {
    hasil.textContent = "kamu menang!";
  }
}
function batu() {
  klik = Math.floor(Math.random() * 3) + 1;
  reset.style.display = "block";
  pemain.src = "src/icons/stone.png";

  if (klik == 1) {
    bot.src = gtg;
  } else if (klik == 2) {
    bot.src = bt;
  } else if (klik == 3) {
    bot.src = kts;
  }

  if (bot.src.includes("scissors") && pemain.src.includes("stone")) {
    hasil.textContent = "kamu menang!";
  } else if (bot.src.includes("stone") && pemain.src.includes("stone")) {
    hasil.textContent = "kamu seri!";
  } else if (bot.src.includes("paper") && pemain.src.includes("stone")) {
    hasil.textContent = "kamu kalah!";
  }
}
function kertas() {
  klik = Math.floor(Math.random() * 3) + 1;
  reset.style.display = "block";
  pemain.src = "src/icons/paper.png";

  if (klik == 1) {
    bot.src = gtg;
  } else if (klik == 2) {
    bot.src = bt;
  } else if (klik == 3) {
    bot.src = kts;
  }

  if (bot.src.includes("scissors") && pemain.src.includes("paper")) {
    hasil.textContent = "kamu kalah!";
  } else if (bot.src.includes("stone") && pemain.src.includes("paper")) {
    hasil.textContent = "kamu menang!";
  } else if (bot.src.includes("paper") && pemain.src.includes("paper")) {
    hasil.textContent = "kamu seri!";
  }
}
