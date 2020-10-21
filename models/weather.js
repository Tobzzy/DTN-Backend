const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const weather = new Schema({
  name: {
    type: String,
  },
  city: [{ type: Schema.Types.ObjectId, ref: "city" }],
});

module.exports = mongoose.model("weather", weather);
