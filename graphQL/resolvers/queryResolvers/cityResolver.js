const { City } = require("../../../models");

module.exports = async (parent, { name }) => {
  const city = await City.findOne({ name });
  console.log("city", city);
  return city;
};
