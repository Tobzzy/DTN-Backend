const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const city = new Schema({
  name: {
    type: String,
  },
  weather: [
    {
      type: Schema.Types.ObjectId,
      ref: "weather",
    },
  ],
});

module.exports = mongoose.model("city", city);
