const { Weather } = require("../../../../models");
const getCityWeather = require("./getCityWeather");
const polls = require("./polls");

module.exports = (city) => {
  polls[city._id] = setInterval(() => {
    getCityWeather(city.name).then(async (weather) => {
      const newWeather = await Weather.create({
        city: city._id,
        ...weather,
      });
      city.weather.push(newWeather);
      city.save();
    });
  }, 10000);
};
