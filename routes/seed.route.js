const router = require("express").Router();
const {
  addSeed,
  deleteBySeed,
  getAllSeed,
  updateSeed,
} = require("../controller/Seed.controller");

//Create Seed operation
router.post("/addSeed", addSeed);

//Retrieve Seed operation (All Seed )
router.get("/getSeed", getAllSeed);

//Update Seed operation
router.put("/updateSeed/:id", updateSeed);

//Delete Seed operation
router.delete("/deleteSeed/:id", deleteBySeed);

//Export module
module.exports = router;
