const fetch = require("node-fetch");

module.exports = async (cityName) => {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=dc41eb0d7cf996cd76d4f0ab8a10ba6f`
    );
    const {
      main: { temp: temperature, humidity } = {},
      wind: { speed: windSpeed } = {},
    } = await res.json();
    return { humidity, temperature, windSpeed };
  } catch (error) {
    console.error("Error:", error);
  }
};
