const mutationResolvers = require("./mutationResolvers");
const queryResolvers = require("./queryResolvers");
const subscriptionResolvers = require("./subscriptionResolvers");
const cityResolvers = require("./cityResolvers");

module.exports = {
  RootMutation: mutationResolvers,
  RootQuery: queryResolvers,
  RootSubscription: subscriptionResolvers,
  City: cityResolvers,
};
