const mongoose = require("mongoose");

const fertilizerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  manufacturingDate: {
    type: Date,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
  },
});

const Fertilizer = mongoose.model("Fertilizer", fertilizerSchema);

module.exports = Fertilizer;
