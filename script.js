let count = 0;
const counter = document.getElementById("counter");
const dislikeButton = document.getElementById("dislike-button");
const audio = document.getElementById("audio");
const overlay = document.getElementById("hit-overlay");

dislikeButton.addEventListener("click", () => {
  count++;
  counter.textContent = `Deslikes: ${count}`;
  audio.currentTime = 0;
  audio.play();

  // Ativa o overlay vermelho
  overlay.classList.add("show");
  setTimeout(() => {
    overlay.classList.remove("show");
  }, 100);
});
