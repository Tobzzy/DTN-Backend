const { City } = require("../../../models");
const fetch = require("node-fetch");

const getWeather = async (cityName) => {
  try {
    const weather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=dc41eb0d7cf996cd76d4f0ab8a10ba6f`
    );
    const list = await weather.json();
    return list;
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = async (parent, args) => {
  const { data: { name } = {} } = args;
  try {
    const result = await getWeather(name);
    const { main: { temp, humidity } = {}, wind: { speed } = {} } = result;
    const createCityDetail = await City.create({
      name,
      temperature: temp,
      windSpeed: speed,
      humidity,
    });
    console.log(createCityDetail);
    return createCityDetail;
  } catch (error) {
    return error;
  }
};
