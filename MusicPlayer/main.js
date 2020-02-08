const musicContainer = document.querySelector('#music-container'),
    playBtn = document.querySelector('#play'),
    prevBtn = document.querySelector('#prev'),
    nextBtn = document.querySelector('#next'),
    audio = document.querySelector('#audio'),
    progress = document.querySelector('#progress'),
    progressContainer = document.querySelector('#progress_container'),
    title = document.querySelector('#title'),
    cover = document.querySelector('#cover')

const songs = ['hey', 'summer', 'ukulele']

let songIndex = 2

loadSong(songs[songIndex])

function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong() {
    console.log('sfdlfsjk');

    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
}

playBtn.addEventListener('click', e => {
    const isPlaying = musicContainer.classList.contains('play')
    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})