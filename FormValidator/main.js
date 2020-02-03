const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


const showErro = (input, message) => {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

const showSuccess = (input, message) => {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
    const small = formControl.querySelector('small')
    small.inmerText = message
}
const valideEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e => {
    e.preventDefault()
    if (username.value === '') {
        showErro(username, 'Username is required')
    } else {
        showSuccess(username)
    }



    checkrequired(username)

})