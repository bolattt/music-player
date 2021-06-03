const music = document.querySelector("audio");
const prevButton = document.getElementById("prev");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");

// Check if playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playButton.classList.replace("fa-play", "fa-pause");
  playButton.setAttribute("title", "Pause");
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playButton.classList.replace("fa-pause", "fa-play");
  playButton.setAttribute("title", "Play");
  music.pause();
}

// Play or Pause Event Listeners
playButton.addEventListener("click", () =>
  isPlaying ? pauseSong() : playSong()
);
