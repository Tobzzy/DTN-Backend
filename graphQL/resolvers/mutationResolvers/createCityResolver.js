const { City, Weather } = require("../../../models");
const fetch = require("node-fetch");

// @todo check if city already exists before creation

const getWeatherByCity = async (cityName) => {
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

module.exports = async (parent, args) => {
  const { data: { name } = {} } = args;

  try {
    const newCity = await City.create({
      name,
      weather: [],
    });

    const newWeather = await Weather.create({
      city: newCity._id,
      ...(await getWeatherByCity(name)),
    });

    newCity.weather.push(newWeather);
    await newCity.save();

    setInterval(() => {
      getWeatherByCity(name).then(async (weather) => {
        const newWeather = await Weather.create({
          city: newCity._id,
          ...weather,
        });
        newCity.weather.push(newWeather);
        newCity.save();
      });
    }, 3600000); // 1 hour

    return newCity;
  } catch (error) {
    return error;
  }
};
