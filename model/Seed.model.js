const mongoose = require("mongoose");

const SeedSchema = mongoose.Schema(
  {
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
      default: "0.00",
    },
    price: {
      type: String,
      default: "0.00",
    },
    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Seed = mongoose.model("Seed", SeedSchema);

module.exports = Seed;
