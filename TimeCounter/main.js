const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
const image = document.querySelector('#image')
countdown.style.opacity = 0
setTimeout(() => {
    image.style.opacity = 0
    countdown.style.opacity = 1
}, 1500)



const currentYear = new Date().getFullYear()
const NewtYearTime = new Date(`Februray 25 ${currentYear + 1} 00:00:00`)

year.innerHTML = currentYear + 1

const UpdateCounte = () => {
    const currentTime = new Date()
    const dif = NewtYearTime - currentTime
    const d = Math.floor(dif / 1000 / 60 / 60 / 24)
    const h = Math.floor(dif / 1000 / 60 / 60) % 24
    const m = Math.floor(dif / 1000 / 60) % 60
    const s = Math.floor(dif / 1000) % 60
    seconds.innerHTML = s < 10 ? `0${s}` : s
    minutes.innerHTML = m < 10 ? `0${m}` : m
    hours.innerHTML = h < 10 ? `0${h}` : h
    days.innerHTML = d < 10 ? `0${d}` : d


}



setInterval(UpdateCounte, 1000)