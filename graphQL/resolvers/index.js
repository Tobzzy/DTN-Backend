const mutationResolvers = require("./mutationResolvers");
const queryResolvers = require("./queryResolvers");

module.exports = {
  RootMutation: mutationResolvers,
  RootQuery: queryResolvers,
};
