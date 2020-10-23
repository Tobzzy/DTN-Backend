const polls = require("./polls");

module.exports = (id) => {
  const poll = polls[id];

  if (!poll) throw Error("No poll found");

  clearInterval(poll);
};
