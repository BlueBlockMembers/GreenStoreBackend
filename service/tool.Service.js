const ToolModel = require("../model/tool.model");

const add = async (req, res) => {
  const { name, description, price, image } = req.body;

  const toolList = await ToolModel.find();
  const ToolRecordCount = toolList.length;
  const autoGenerateToolID = `SUM${ToolRecordCount + 1}`;

  const newTool = new ToolModel({
    id: autoGenerateToolID,
    name,
    description,
    price,
    image,
  });

  newTool.save().then((result) => {
    res.status(200).json({
      message: "Tool added successfully",
      result: {
        data: result,
        response: true,
      },
    });
  });
};
const update = async (req, res) => {
  const toolID = req.params.id;
  const { name, description, price, image } = req.body;

  try {
    const result = await ToolModel.findOneAndUpdate(
      { id: toolID },
      {
        id: toolID,
        name,
        description,
        price,
        image,
      }
    );
    res.status(200).send({
      message: "Tool updated successfully",
      data: result,
    });
  } catch (e) {
    res.status(500).send({ message: "Something went wrong", error: e });
  }
};
const deleteTool = async (req, res) => {
  const toolID = req.params.id;

  try {
    const result = await ToolModel.findOneAndDelete({
      id: toolID,
    });
    res.status(200).send({
      message: "Tool deleted successfully",
      data: result,
    });
  } catch (e) {
    res.status(500).send({ message: "Something went wrong", error: e });
  }
};
const getAll = async (req, res) => {
  const result = await ToolModel.find();
  try {
    if (result) {
      res.status(200).send({ message: "All Tool list", data: result });
    }
  } catch (e) {
    res.status(500).send({ message: "Something went wrong", error: e });
  }
};

module.exports = {
  add,
  update,
  deleteTool,
  getAll,
};
