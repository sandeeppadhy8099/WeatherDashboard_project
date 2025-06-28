const weatherData = {
    "Delhi": {
      temp: 35,
      condition: "Sunny",
      humidity: 40,
      wind: 10
    },
    "Mumbai": {
      temp: 30,
      condition: "Humid",
      humidity: 80,
      wind: 15
    },
    "Bhubaneswar": {
      temp: 33,
      condition: "Cloudy",
      humidity: 70,
      wind: 12
    },
    "Kolkata": {
      temp: 32,
      condition: "Rainy",
      humidity: 85,
      wind: 8
    }
  };
  
  function displayWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const weather = weatherData[city];
  
    const weatherBox = document.getElementById("weatherDisplay");
  
    if (weather) {
      weatherBox.innerHTML = `
        <h2>${city}</h2>
        <p><strong>Temperature:</strong> ${weather.temp} °C</p>
        <p><strong>Condition:</strong> ${weather.condition}</p>
        <p><strong>Humidity:</strong> ${weather.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${weather.wind} km/h</p>
      `;
    } else {
      weatherBox.innerHTML = `<p>Weather data for "${city}" not found.</p>`;
    }
  }
  