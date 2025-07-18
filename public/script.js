const apiKey = '18e02e19ee6e527aaf02eb3fb24eecf9';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weather-info');
const historyList = document.getElementById('history-list');

let searchHistory = [];

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    }
});

historyList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const city = e.target.textContent;
        getWeather(city);
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            displayWeather(data);
            addToHistory(city);
        } else {
            weatherInfo.innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        weatherInfo.innerHTML = `<p>Error fetching weather data</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
}

function addToHistory(city) {
    if (!searchHistory.includes(city)) {
        searchHistory.push(city);
        renderHistory();
    }
}

function renderHistory() {
    historyList.innerHTML = '';
    searchHistory.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        historyList.appendChild(li);
    });
}
