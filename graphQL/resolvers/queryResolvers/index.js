const citiesResolver = require("./citiesResolver");
const cityResolver = require("./cityResolver");
const cityWeatherResolver = require("./cityWeatherResolver");

module.exports = {
  cities: citiesResolver,
  city: cityResolver,
  cityWeather: cityWeatherResolver,
};
