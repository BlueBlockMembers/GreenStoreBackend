const Fertilizer = require("../../model/fertilizer/Fertilizer.model");

// Create a fertilizer
const createFertilizer = async (req, res) => {
  try {
    const { name, weight, price, type, manufacturingDate, createdDate } = req.body;

    const fertilizer = new Fertilizer({
      name,
      weight,
      price,
      type,
      manufacturingDate,
      createdDate,
    });

    const savedFertilizer = await fertilizer.save();
    res.status(201).json(savedFertilizer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving fertilizer" });
  }
};

// Get all fertilizers
const getAllFertilizers = async (req, res) => {
  try {
    const fertilizers = await Fertilizer.find();
    res.json(fertilizers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting fertilizers" });
  }
};

// Get fertilizer by ID
const getFertilizerById = async (req, res) => {
  try {
    const fertilizer = await Fertilizer.findById(req.params.id);
    if (!fertilizer) {
      return res.status(404).json({ message: "Fertilizer not found" });
    }
    res.json(fertilizer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting fertilizer" });
  }
};

// Update a fertilizer
const updateFertilizer = async (req, res) => {
  try {
    const fertilizer = await Fertilizer.findById(req.params.id);
    if (!fertilizer) {
      return res.status(404).json({ message: "Fertilizer not found" });
    }
    fertilizer.set(req.body);
    const updatedFertilizer = await fertilizer.save();
    res.json(updatedFertilizer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating fertilizer" });
  }
};

// Delete a fertilizer
const deleteFertilizer = async (req, res) => {
  let FertilizerId = req.params.id;

  try {
    await Fertilizer.findByIdAndDelete(FertilizerId);
    res.status(200).send({ status: "Fertilizer deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: "Error with deleting fertilizer", error: err.message });
  }
};

module.exports = {
  createFertilizer,
  getAllFertilizers,
  getFertilizerById,
  updateFertilizer,
  deleteFertilizer,
};
