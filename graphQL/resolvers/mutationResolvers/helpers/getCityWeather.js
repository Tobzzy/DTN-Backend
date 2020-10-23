const fetch = require("node-fetch");

module.exports = async (cityName) => {
  try {
    let formattedTime = Math.floor(Date.now() / 1000);
    let date = new Date(formattedTime * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let timestamp = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    const apiKey = process.env.API_WEATHER_KEY;

    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    );
    const {
      main: { temp: temperature, humidity } = {},
      wind: { speed: windSpeed } = {},
    } = await res.json();
    return { humidity, temperature, windSpeed, timestamp };
  } catch (error) {
    console.error("Error:", error);
  }
};
