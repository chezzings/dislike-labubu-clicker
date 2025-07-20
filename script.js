let count = 0;

const button = document.getElementById("dislike-btn");
const counter = document.getElementById("counter");
const overlay = document.getElementById("damage-overlay");
const sound = document.getElementById("hit-sound");

button.addEventListener("click", () => {
  count++;
  counter.textContent = `Deslikes: ${count}`;

  overlay.style.display = "block";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 100);

  sound.currentTime = 0;
  sound.play();
});
