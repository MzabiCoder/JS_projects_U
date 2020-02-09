const musicContainer = document.getElementById("music-container");
const playBtn = document.querySelector(".action-btn-big");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("#progress_container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

const songs = ["hey", "summer", "ukulele"];

let songIndex = 1;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

playBtn.addEventListener("click", () => {
  //   alert("dgdgf");
  //   console.log("dflgkjf");

  const isPlaying = musicContainer.classList.contains("play");
  if (!isPlaying) {
    playSong();
  } else {
    pauseSong();
  }
});
