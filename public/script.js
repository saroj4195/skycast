const apiKey = '18e02e19ee6e527aaf02eb3fb24eecf9';
const getLocationBtn = document.getElementById('getLocationBtn');
const weatherInfo = document.getElementById('weather-info');

getLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather, showError);
    } else {
        weatherInfo.innerHTML = "<p>Geolocation is not supported by this browser.</p>";
    }
});

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            weatherInfo.innerHTML = "<p>User denied the request for Geolocation.</p>"
            break;
        case error.POSITION_UNAVAILABLE:
            weatherInfo.innerHTML = "<p>Location information is unavailable.</p>"
            break;
        case error.TIMEOUT:
            weatherInfo.innerHTML = "<p>The request to get user location timed out.</p>"
            break;
        case error.UNKNOWN_ERROR:
            weatherInfo.innerHTML = "<p>An unknown error occurred.</p>"
            break;
    }
}

async function getWeather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            displayWeather(data);
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
