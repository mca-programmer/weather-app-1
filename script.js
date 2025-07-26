async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "5bba92dc1ad24434462db7275313f5ee"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"5bba92dc1ad24434462db7275313f5ee"}&units=metric`;

  const weatherResult = document.getElementById("weatherResult");
  weatherResult.innerHTML = "Loading...";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      weatherResult.innerHTML = "City not found.";
      return;
    }

    const { name } = data;
    const { temp } = data.main;
    const { description, icon } = data.weather[0];

    weatherResult.innerHTML = `
      <h2>${name}</h2>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />
      <p><strong>${temp}°C</strong></p>
      <p>${description}</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = "Error getting weather data.";
  }
}
