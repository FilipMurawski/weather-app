let weatherForm = document.querySelector('.weather__form')
let inputCity = document.querySelector('.weather__city')
let apiDataContainer = document.querySelector('.weather__data')

let apiUrl = 'https://api.weatherapi.com/v1/current.json?key=1aa3e20430224597beb131225230104&aqi=yes&q='

weatherForm.addEventListener('submit', (event) => {
    let city = inputCity.value;
    let fullApiUrl = apiUrl + city

    fetch(fullApiUrl).then(response => response.json()).then((dataFromApi) => {
        // console.log(dataFromApi.current.temp_c)
        let view = ``
        // view += `W ${dataFromApi.location.name} jest dzisiaj ${dataFromApi.current.temp_c} stopni Celcjusza`       
        view += `<div class="weather__info">`

        // icon
        view += `<div class="weather__icon"><img src="${dataFromApi.current.condition.icon}" alt="${dataFromApi.current.condition.text}"></div>`
        // temperature
        view += `<div class="weather__temp">${dataFromApi.current.temp_c}<span><sup>o</sup>C</span></div>`
        // special data
        view += `<div class="weather__additional-info">`
        // humidity
        view += `<div class="weather__humidity">Humidity: ${dataFromApi.current.humidity}%</div>`
        // wind
        view += `<div class="weather__wind">Wind: ${dataFromApi.current.wind_kph} km/h</div>`

        view += `</div>`
        view += `</div>`
        apiDataContainer.innerHTML = view
    })

    event.preventDefault()
})