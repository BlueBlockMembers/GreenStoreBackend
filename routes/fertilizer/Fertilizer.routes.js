const express = require("express");
const router = express.Router();
const FertilizerController = require("../../controller/fertilizer/Fertilizer.controller");

// Create fertilizer operation
router.post("/create", FertilizerController.createFertilizer);

// Retrieve all fertilizers
router.get("/", FertilizerController.getAllFertilizers);

// Retrieve fertilizer by ID
router.get("/:id", FertilizerController.getFertilizerById);

// Update a fertilizer
router.patch("/:id", FertilizerController.updateFertilizer);

// Delete a fertilizer
router.delete("/:id", FertilizerController.deleteFertilizer);

module.exports = router;
