const { Weather } = require("../../../models");

module.exports = async (parent, args = {}) => {
  const { data: { temperature, humidity, windSpeed, timestamp } = {} } = args;

  try {
    const createWeatherDataDetail = await Weather.create({
      temperature,
      humidity,
      windSpeed,
      timestamp,
    });
    return createWeatherDataDetail;
  } catch (error) {
    return error;
  }
};
