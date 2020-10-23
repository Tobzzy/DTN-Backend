const { clearCityPoll } = require("./helpers");

module.exports = async (parent, args) => {
  const { _id } = args;

  try {
    clearCityPoll(_id);
    return { response: "Success" };
  } catch (error) {
    return { response: error };
  }
};
