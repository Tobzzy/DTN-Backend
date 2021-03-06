const { City, Weather } = require("../../../models");
const { getCityWeather, startCityPoll } = require("./helpers");
const { pubsub } = require("../subscriptionResolvers/helper");

module.exports = async (parent, args) => {
  const { data: { name } = {} } = args;
  try {
    const docs = await City.find({ name });
    if (docs.length) {
      return { response: "City already exist" };
    }
    const newCity = await City.create({
      name,
      weather: [],
    });

    const newWeather = await Weather.create({
      city: newCity._id,
      ...(await getCityWeather(name)),
    });
    pubsub.publish("city", { city: newCity });

    newCity.weather.push(newWeather);
    await newCity.save();

    startCityPoll(newCity);
    return newCity;
  } catch (error) {
    return error;
  }
};
