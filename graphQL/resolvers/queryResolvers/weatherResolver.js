const { Weather } = require("../../../models");

module.exports = async (parent, { cityID }) => {
  try {
    const weather = await Weather.find();
    return cityID
      ? weather.filter(({ city }) => String(city[0]) === String(cityID))
      : weather;
  } catch (error) {
    return error;
  }
};
