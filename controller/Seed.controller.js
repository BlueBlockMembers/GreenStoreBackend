const SeedModel = require("../model/Seed.model");
let {
  add,
  update,
  deleteSeed,
  getAll,
  searchOneSeed,
} = require("../service/seed.Service");
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

const getOneSeedByID = async (req, res) => {
  await searchOneSeed(req, res);
};

module.exports = {
  addSeed,
  updateSeed,
  deleteBySeed,
  getAllSeed,
  getOneSeedByID,
};
