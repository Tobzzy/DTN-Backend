const citiesResolver = require("./citiesResolver");
const cityResolver = require("./cityResolver");
const weatherResolver = require("./weatherResolver");

module.exports = {
  cities: citiesResolver,
  city: cityResolver,
  weather: weatherResolver,
};
