const { Weather } = require("../../../models");

module.exports = async (parent, args = {}) => {
  const { data: { temperature, humidity, windSpeed } = {} } = args;

  try {
    const createWeatherDataDetail = await Weather.create({
      temperature,
      humidity,
      windSpeed,
    });
    return createWeatherDataDetail;
  } catch (error) {
    return error;
  }
};
