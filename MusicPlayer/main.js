const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
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

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
}



playBtn.addEventListener("click", () => {

  const isPlaying = musicContainer.classList.contains("play");
  if (!isPlaying) {
    playSong();
  } else {
    pauseSong();
  }
});

prevBtn.addEventListener('click', e => {
  songIndex--
  if (songIndex < 0) {
    songIndex = songs.length - 1
  }
  loadSong(songs[songIndex]);
  playSong()
})

nextBtn.addEventListener('click', e => {
  songIndex++
  if (songIndex === songs.length) {
    songIndex = 0
  }

  loadSong(songs[songIndex]);
  playSong()
})

audio.addEventListener('timeupdate', e => {
  const {
    duration,
    currentTime
  } = e.srcElement

  const progressPercent = (currentTime / duration) * 100

  //console.log(progressPercent);
  progress.style.width = `${progressPercent}%`
})

progressContainer.addEventListener('click', e => {

  const width = this.clientWidth
  console.log(width);

})