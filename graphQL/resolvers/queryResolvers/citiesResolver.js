const { City } = require("../../../models");

module.exports = async () => {
  try {
    const cities = await City.find();
    return cities;
  } catch (error) {
    return error;
  }
};
