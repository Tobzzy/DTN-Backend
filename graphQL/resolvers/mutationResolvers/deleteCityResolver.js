const { City } = require("../../../models");

module.exports = async (parent, { name }) => {
  try {
    const deletedCity = await City.findOneAndDelete({
      name,
    });

    return {
      response: deletedCity ? "Success" : "No City found for this opertaion",
    };
  } catch (error) {
    return { response: "Fail" };
  }
};
