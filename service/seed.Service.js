const SeedModel = require("../model/Seed.model");

const add = async (req, res) => {
  const { name, description, price, image } = req.body;

  const seedList = await SeedModel.find();
  const SeedRecordCount = seedList.length;
  const autoGenerateSeedID = `SMP${SeedRecordCount + 1}`;

  const newSeed = new SeedModel({
    id: autoGenerateSeedID,
    name: name,
    description: description,
    price: price,
    image: image,
  });

  console.log(newSeed);

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

const searchOneSeed = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await SeedModel.findOne({ id: id });
    res.status(200).send({ message: "Seed found", data: result });
  } catch (e) {
    res.status(500).send({ message: "Something went wrong", error: e });
  }
};

module.exports = {
  add,
  update,
  deleteSeed,
  getAll,
  searchOneSeed,
};
