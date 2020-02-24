const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

// fetch random user

const getRandomUser = async () => {

    const res = await fetch(`https://randomuser.me/api`)
    const data = await res.data
    console.log(data);

}

getRandomUser()