let count = 0;
const counter = document.getElementById('counter');
const labubu = document.getElementById('labubu');
const audio = document.getElementById('audio');

labubu.addEventListener('click', () => {
  count++;
  counter.textContent = `Dislikes: ${count}`;
  audio.currentTime = 0;
  audio.play();
});
