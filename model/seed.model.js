const mongoose = require("mongoose");

const seedSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
});

const Seed = mongoose.model("Seed", seedSchema);

module.exports = Seed;
