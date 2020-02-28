const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [{
        id: 1,
        text: 'Flower',
        amount: -20
    },
    {
        id: 2,
        text: 'Salary',
        amount: 300
    },
    {
        id: 3,
        text: 'Book',
        amount: -10
    },
    {
        id: 4,
        text: 'Camera',
        amount: 150
    }
];

let trans = dummyTransactions

// add trans to DOM list

const addTrans = trans => {
    // get Sign

    const sign = trans.amount < 0 ? '-' : '+'
    const item = document.createElement('li')
    item.classList.add(trans.amount < 0 ? 'minus' : 'plus')
    item.innerHTML = `${trans.text} <span>${sign}${Math.abs(trans.amount)}</span>
    <button class="delete-btn" onclick=del(${trans.id})>x</button>`
    list.appendChild(item)

}

const del = id => {
    trans.filter(item => item.id !== id)
    console.log(trans);

}

updateValue = () => {
    const amounts = trans.map(item => item.amount)
    let total = trans.map(item => item.amount)
        .reduce((a, b) => a += b)
        .toFixed(2)
    balance.innerHTML = `$ ${total}`

    const income = amounts.filter(item => item > 0)
        .reduce((a, b) => a += b, 0).toFixed(2)

    money_plus.innerHTML = `$ ${income}`

    const expense = amounts.filter(item => item < 0)
        .reduce((a, b) => a += b, 0) * -1

    money_minus.innerHTML = `$${expense.toFixed(2)}`

}




function init() {
    list.innerHTML = ''
    trans.forEach(addTrans)
    updateValue()
}
init()