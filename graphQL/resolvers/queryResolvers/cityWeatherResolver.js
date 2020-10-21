const { Weather } = require("../../../models");

module.exports = async (parent, { cityID }) => {
  try {
    const cityWeather = await Weather.find();
    return cityID
      ? cityWeather.filter(({ city }) => String(city[0]) === String(cityID))
      : cityWeather;
  } catch (error) {
    return error;
  }
};
