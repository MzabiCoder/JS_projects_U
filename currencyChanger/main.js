const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');



const calculate = async () => {
    const currency_one = currencyEl_one.value
    const currency_tow = currencyEl_two.value

    const res = await axios.get(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)


    rateEl.innerHTML = `1 ${currency_one} = ${res.data.rates[currency_tow]} ${currency_tow}`
    amountEl_two.value = (amountEl_one.value * res.data.rates[currency_tow]).toFixed(2)







}



currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)

swap.addEventListener('click', () => {
    let buff = currencyEl_one.value
    currencyEl_one.value = currencyEl_two.value
    currencyEl_two.value = buff
    calculate()
})

calculate()