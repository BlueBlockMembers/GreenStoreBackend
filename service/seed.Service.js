const SeedModel = require("../model/Seed.model");

const add = async (req, res) => {
  const { name, description, price, image } = req.body;

  const seedList = await SeedModel.find();
  const SeedRecordCount = seedList.length;
  const autoGenerateSeedID = `SMP${SeedRecordCount + 1}`;

  const newSeed = new SeedModel({
    id: autoGenerateSeedID,
    name,
    description,
    price,
    image,
  });

  newSeed.save().then((result) => {
    res.status(200).json({
      message: "Seed added successfully",
      result: {
        data: result,
        response: true,
      },
    });
  });
};
const update = async (req, res) => {
  const seedID = req.params.id;
  const { name, description, price, image } = req.body;

  try {
    const result = await SeedModel.findOneAndUpdate(
      { id: seedID },
      {
        id: seedID,
        name,
        description,
        price,
        image,
      }
    );
    res.status(200).send({
      message: "Seed updated successfully",
      data: result,
    });
  } catch (e) {
    res.status(500).send({ message: "Something went wrong", error: e });
  }
};
const deleteSeed = async (req, res) => {
  const seedID = req.params.id;

  try {
    const result = await SeedModel.findOneAndDelete({
      id: seedID,
    });
    res.status(200).send({
      message: "Seed deleted successfully",
      data: result,
    });
  } catch (e) {
    res.status(500).send({ message: "Something went wrong", error: e });
  }
};
const getAll = async (req, res) => {
  const result = await SeedModel.find();
  try {
    if (result) {
      res.status(200).send({ message: "All Seed list", data: result });
    }
  } catch (e) {
    res.status(500).send({ message: "Something went wrong", error: e });
  }
};

module.exports = {
  add,
  update,
  deleteSeed,
  getAll,
};
