const createCityResolver = require("./createCityResolver");
const createWeatherDataResolver = require("./createWeatherDataResolver");
const deleteCityResolver = require("./deleteCityResolver");
const stopCityPollResolver = require("./stopCityPollResolver");

module.exports = {
  createCity: createCityResolver,
  createWeatherData: createWeatherDataResolver,
  deleteCity: deleteCityResolver,
  stopCityPoll: stopCityPollResolver,
};
