let count = 0;
const labubu = document.getElementById("labubu");
const counter = document.getElementById("counter");
const audio = document.getElementById("audio");
const dislikeButton = document.getElementById("dislike-button");

dislikeButton.addEventListener("click", () => {
  count++;
  counter.textContent = `Deslikes: ${count}`;
  
  // Efeito sonoro (opcional)
  audio.currentTime = 0;
  audio.play();

  // Efeito de dano visual
  labubu.classList.add("dano");
  setTimeout(() => {
    labubu.classList.remove("dano");
  }, 150);
});
