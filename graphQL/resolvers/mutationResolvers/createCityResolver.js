const { City, Weather } = require("../../../models");
const { getCityWeather, startCityPoll } = require("./helpers");

/** @todo check if city already exists before creation */

module.exports = async (parent, args) => {
  const { data: { name } = {} } = args;
  try {
    const newCity = await City.create({
      name,
      weather: [],
    });

    const newWeather = await Weather.create({
      city: newCity._id,
      ...(await getCityWeather(name)),
    });

    newCity.weather.push(newWeather);
    await newCity.save();

    startCityPoll(newCity);

    return newCity;
  } catch (error) {
    return error;
  }
};
