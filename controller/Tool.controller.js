const ToolModel = require("../model/tool.model");
let { add, update, deleteTool, getAll } = require("../service/tool.Service");
const addTool = async (req, res) => {
  await add(req, res);
};
const updateTool = async (req, res) => {
  await update(req, res);
};
const deleteByTool = async (req, res) => {
  await deleteTool(req, res);
};
const getAllTool = async (req, res) => {
  await getAll(req, res);
};

module.exports = {
  addTool,
  updateTool,
  deleteByTool,
  getAllTool,
};
