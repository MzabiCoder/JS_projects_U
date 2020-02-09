const paly = document.getElementById('play')
const stop = document.getElementById('stop')
const time = document.getElementById('timestamp')
const video = document.getElementById('video')
const progress = document.getElementById('progress')
const btn = document.getElementById('play')

// play and pause
function toggleVideoStatus() {

    if (video.paused) {
        video.play()
        // btn.querySelector('i.fa').classList.remove('fa-play')
        // btn.querySelector('i.fa').classList.add('fa-pause')
        play.innerHTML = ' <i class="fa fa-pause fa-2x"></i>'
    } else {
        video.pause()
        // btn.querySelector('i.fa').classList.remove('fa-pause')
        // btn.querySelector('i.fa').classList.add('fa-play')
        play.innerHTML = ' <i class="fa fa-play fa-2x"></i>'

    }
}

function updatePlayIcon() {
    return true
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100

    let min = Math.floor(video.currentTime / 60)
    if (min < 10) {
        min = '0' + min
    }
    let sec = Math.floor(video.currentTime % 60)
    if (sec < 10) {
        min = '0' + sec
    }

    time.innerHTML = `${min}:${sec}`

}

function setVideoProgress() {
    video.currentTime = (progress.value * video.duration) / 100
}

function stopVideo() {
    video.currentTime = 0
    video.pause()
    play.innerHTML = ' <i class="fa fa-play fa-2x"></i>'
}

video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

paly.addEventListener('click', toggleVideoStatus)
stop.addEventListener('click', stopVideo)
progress.addEventListener('change', setVideoProgress)