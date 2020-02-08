const form = document.querySelector('#form'),
    search = document.querySelector('#search'),
    submit = document.querySelector('.search-btn'),
    random = document.querySelector('#random')
meals = document.querySelector('#meals'),
    result = document.querySelector('#result-heading')
mealResult = document.querySelector('#meal'),
    error = document.querySelector('#error'),

    random.addEventListener('click', e => {
        meals.innerHTML = ''
        // mealResult = innerHTML = ''

        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(res => res.json())
            .then(data => {
                let meal = data.meals[0]
                addMealToDOM(meal)
            })
    })



// Event listeners

form.addEventListener('submit', e => {
    e.preventDefault()


    meal.innerHTML = ''


    const term = search.value

    if (term.trim()) {

        const res = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                result.innerHTML = `<h2>Search result fro '${term}':</h2>`
                if (data.meals === null) {
                    result.innerHTML = `<p class="null">There is no search result. Try again !!</p>`
                    setTimeout(() => {
                        result.innerHTML = ''
                    }, 1000)
                } else {
                    meals.innerHTML = data.meals.map(meal => `
                         <div class="meal">
                         <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                         <div class="meal-info" data-mealID="${meal.idMeal}">
                         <h3>${meal.strMeal}</h3>
                         </div>
                         </div>
                        `)

                }
            })
        search.value = ''

    } else {
        error.style.opacity = 1
        setTimeout(() => {
            error.style.opacity = 0
        }, 1500)
    }
})
const getMealbyID = id => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
            const meale = data.meals[0]
            addMealToDOM(meale)
            // console.log(meale)
        })
}
const addMealToDOM = meal => {
    const ingredients = []

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        } else {
            break;
        }
    }

    // console.log(ingredients)

    mealResult.innerHTML = `
    <div class="single-meal">
    <h1>${meal.strMeal}</h1>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
    <div class="single-meal-info">
    ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
    ${meal.strArea ? `<p>${meal.strArea}</p>`:''}
    </div>
    <div class="main">
    <p>${meal.strInstructions}</p>
    <h2>Ingredients</h2>
    <ul>
    ${ingredients.map(ing=>`<li>${ing}</li>`).join('')}
    </ul>
    </div>
    </div>
    `
}
meals.addEventListener('click', e => {
    const mealInfo = e.path.find(item => {
        // console.log(item)
        if (item.classList) {
            return item.classList.contains('meal-info')
        } else {
            return false
        }


    })
    if (mealInfo) {
        const id = mealInfo.getAttribute('data-mealID')
        getMealbyID(id)
    }


})