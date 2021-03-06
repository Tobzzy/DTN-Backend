const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const weather = new Schema({
  city: {
    type: Schema.Types.ObjectId,
    ref: "city",
  },
  temperature: {
    type: Number,
  },
  windSpeed: {
    type: Number,
  },
  humidity: {
    type: Number,
  },
  timestamp: {
    type: String,
  },
});

module.exports = mongoose.model("weather", weather);
