const SeedModel = require("../model/seed.model");
let { add, update, deleteSeed, getAll } = require("../service/seed.Service");
const addSeed = async (req, res) => {
  await add(req, res);
};
const updateSeed = async (req, res) => {
  await update(req, res);
};
const deleteBySeed = async (req, res) => {
  await deleteSeed(req, res);
};
const getAllSeed = async (req, res) => {
  await getAll(req, res);
};

module.exports = {
  addSeed,
  updateSeed,
  deleteBySeed,
  getAllSeed,
};
