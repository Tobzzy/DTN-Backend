const { Weather } = require("../../../../models");
const getCityWeather = require("./getCityWeather");
const polls = require("./polls");
const { pubsub } = require("../../subscriptionResolvers/helper");

module.exports = (city) => {
  polls[city._id] = setInterval(() => {
    getCityWeather(city.name).then(async (weather) => {
      const newWeather = await Weather.create({
        city: city._id,
        ...weather,
      });
      city.weather.push(newWeather);
      await city.save();
      pubsub.publish("city", { city });
    });
  }, 3600000);
};
