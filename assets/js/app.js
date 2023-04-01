let weatherForm = document.querySelector('.weather__form')
let inputCity = document.querySelector('.weather__city')


weatherForm.addEventListener('submit', (event) => {
    let city = inputCity.value;
    console.log(city)
    event.preventDefault()
})