const apiKey = 'da14fc9fed2c833c2d1e08e8c6af9efb';

const cityNameEl = document.getElementById('city-name');
const tempEl = document.getElementById('temp');
const feelsEl = document.getElementById('feels');
const condEl = document.getElementById('cond');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const refreshBtn = document.getElementById('refresh-btn');

let currentCity = 'London';

async function fetchWeatherData(city) {

    if (!city) return;
    currentCity = city;

    cityNameEl.textContent = `Loading: ${city}`;
    tempEl.textContent = '';
    feelsEl.textContent = '';
    condEl.textContent = '';
    humidityEl.textContent = '';
    windEl.textContent = '';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}&lang=en`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            cityNameEl.textContent = 'City not found';
            return;
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Fetch error', error);
        cityNameEl.textContent = 'Error fetching data';
    }
}

function displayWeatherData(data) {
    const {name, main, weather, wind} = data;
    cityNameEl.textContent = name || '—';
    tempEl.textContent = `Temperature: ${Math.round(main.temp)}°C`;
    feelsEl.textContent = `Feels like: ${Math.round(main.feels_like)}°C`;
    condEl.textContent = `Condition: ${weather[0].description}`;
    humidityEl.textContent = `Humidity: ${main.humidity}%`;
    windEl.textContent = `Wind: ${wind.speed} m/s`;
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (!city) {
        cityInput.focus();
        return;
    }
    fetchWeatherData(city);
});

cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchBtn.click();
    }
});

refreshBtn.addEventListener('click', () => {
    fetchWeatherData(currentCity);
});

fetchWeatherData('London');