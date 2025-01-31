const apiKey = '639aef238fd90bfc5d0dc8ffc9aa27c5';

async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        document.getElementById('location').innerText = data.name;
        document.getElementById('weather').innerText = data.weather[0].description;
        document.getElementById('temp').innerText = Math.round(data.main.temp);
        document.getElementById('icon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        document.querySelector('.weather-info').classList.add('fade-in');
    } catch (error) {
        alert(error.message);
    }
}
