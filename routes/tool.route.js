const router = require("express").Router();
const {
  addTool,
  deleteByTool,
  getAllTool,
  updateTool,
  getOneToolByID,
} = require("../controller/Tool.controller");

//Create tool operation
router.post("/addTool", addTool);

//Retrieve tool operation (All tool )
router.get("/getTool", getAllTool);

//Update tool operation
router.put("/updateTool/:id", updateTool);

//Delete tool operation
router.delete("/deleteTool/:id", deleteByTool);
//Get one Tool operation

router.get("/getOneTool/:id", getOneToolByID);
//Export module
module.exports = router;
