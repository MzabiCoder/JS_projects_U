const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

// fetch random user



const User1 = {
    name: 'nabil fannane',
    money: Math.floor(Math.random() * 100000)
}
const User2 = {
    name: 'fatim fannane',
    money: Math.floor(Math.random() * 1000000)
}
const User3 = {
    name: 'assiya fannane',
    money: Math.floor(Math.random() * 1000000)
}

const User4 = {
    name: 'khadija fannane',
    money: forMatMoney(Math.floor(Math.random() * 1000000))
}

data.push(User1)
data.push(User2)
data.push(User3)

const updtaDom = output => {
    // clear main div
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>'
    output.forEach(val => {
        let element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML = `<strong>${val.name}</strong>$${val.money}`
        main.appendChild(element)


    })
}

function forMatMoney(money) {
    return (money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

updtaDom(data)
addUserBtn.addEventListener('click', () => {
    data.push(User4)
    updtaDom(data)

})

doubleBtn.addEventListener('click', () => {
    data.map(val => val.money = val.money * 2)
    updtaDom(data)

})

sortBtn.addEventListener('click', () => {
    data.sort((a, b) => b.money - a.money)
    updtaDom(data)

})

showMillionairesBtn.addEventListener('click', () => {

    updtaDom(data.filter(val => val.money >= 500000))
    document.querySelectorAll('.person').forEach(person => {
        person.classList.add('persont')
    })

})

calculateWealthBtn.addEventListener('click', () => {
    let total = data.reduce((a, b) => a += b.money, 0)

    let element = document.createElement('div')
    element.classList.add('person')
    element.classList.add('persont')
    element.innerHTML = `<strong>Total money are :</strong>$${forMatMoney(total)}`
    main.appendChild(element)

})