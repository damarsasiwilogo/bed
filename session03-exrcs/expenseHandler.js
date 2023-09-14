const { getAll, create, getById } = require("./expenseRepository.js");

exports.handleGet = (req, res) => {
  res.send(getAll());
};

exports.handleGetOne = (req, res) => {
  const { id } = req.params;
  const data = getById(id);
  if (!data) {
    res.status(404).json({
      msg: "data not found",
    });
    return;
  }
  res.json(data);
};

exports.handleCreate = (req, res) => {
  const { name, category, nominal } = req.body;
  const newData = create({
    name,
    category,
    nominal,
  });
  res.status(201).json(newData);
};
