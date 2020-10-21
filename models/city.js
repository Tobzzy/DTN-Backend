const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const city = new Schema({
  name: {
    type: String,
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
  timestamp: { type: Date, default: new Date() },
});

module.exports = mongoose.model("city", city);
