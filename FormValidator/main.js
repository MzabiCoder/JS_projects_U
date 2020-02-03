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
const checkEmail = input => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //return re.test(String(email).toLowerCase());
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showErro(input, `${getFieldName(input)} is not valid !!`)
    }
}

const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}
const checkrequired = (inputs) => {
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            showErro(input, `${getFieldName(input)} is required !!`)
        } else {
            showSuccess(input)
        }
    })
}

const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showErro(input, `${getFieldName(input)} must be at least ${min}`)
    } else if (input.value.length > max) {
        showErro(input, `${getFieldName(input)} must be less than ${max}`)
    } else {
        showSuccess(input)
    }
}

const Match = (one, tow) => {
    if (one.value !== tow.value) {
        showErro(tow, `${getFieldName(tow)} Dont match !!`)
    }
}

form.addEventListener('submit', e => {
    e.preventDefault()
    checkrequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
    checkEmail(email)
    Match(password, password2)

})