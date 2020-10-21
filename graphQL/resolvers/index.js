const mutationResolvers = require("./mutationResolvers");
const queryResolvers = require("./queryResolvers");
const cityResolvers = require("./cityResolvers");

module.exports = {
  RootMutation: mutationResolvers,
  RootQuery: queryResolvers,
  City: cityResolvers,
};
