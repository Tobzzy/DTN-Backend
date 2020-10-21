const createCityResolver = require("./createCityResolver");
const deleteCityResolver = require("./deleteCityResolver");
//const createWeatherDataResolver = require("./createWeatherDataResolver");

module.exports = {
  createCity: createCityResolver,
  deleteCity: deleteCityResolver,
  //createWeatherData: createWeatherDataResolver,
};
