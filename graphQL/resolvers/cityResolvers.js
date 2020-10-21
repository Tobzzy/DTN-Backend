const { Weather } = require("../../models");

module.exports = {
  weather: async (parent) => {
    const { _id, weather } = parent;
    if (weather[0].city) return weather;
    return Weather.find({ city: _id });
  },
};
