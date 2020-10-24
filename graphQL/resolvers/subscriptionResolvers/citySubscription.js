const { pubsub } = require("./helper");

module.exports = {
  subscribe: () => {
    return pubsub.asyncIterator("city");
  },
};
