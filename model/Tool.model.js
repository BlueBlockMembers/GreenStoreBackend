const mongoose = require("mongoose");

const ToolSchema = mongoose.Schema(
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

const Tool = mongoose.model("Tool", ToolSchema);

module.exports = Tool;
