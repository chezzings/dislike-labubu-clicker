let count = 0;
const labubu = document.getElementById("labubu");
const counter = document.getElementById("counter");
const audio = document.getElementById("audio");
const dislikeButton = document.getElementById("dislike-button");

dislikeButton.addEventListener("click", () => {
  count++;
  counter.textContent = `Deslikes: ${count}`;
  
  // Reproduz som (opcional)
  audio.currentTime = 0;
  audio.play();

  // Aplica efeito de dano rápido e leve
  labubu.classList.add("dano");
  setTimeout(() => {
    labubu.classList.remove("dano");
  }, 100); // duração bem curta
});
