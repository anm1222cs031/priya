const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key

document.getElementById('get-weather').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (!city) {
        alert('Please enter a city name!');
        return;
    }
    getWeather(city);
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weather-result').classList.remove('hidden');
            document.getElementById('city-name').innerText = data.name;
            document.getElementById('temperature').innerText = `Temp: ${data.main.temp}°C`;
            document.getElementById('description').innerText = data.weather[0].description;
            document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        } else {
            alert('City not found!');
        }
    } catch (error) {
        alert('Error fetching weather data!');
    }
}
