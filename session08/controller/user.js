const { User } = require("../models");

exports.handleGetUser = async (req, res) => {
  const users = await User.findAll();

  res.json(users);
};

exports.handleGetOneUser = async (req, res) => {
  const id = Number(req.params.id);
  const user = await User.findOne({
    where: { id },
  });

  res.json(user);
};

exports.handleCreateUser = async (req, res) => {
  const { username, email, password, name } = req.body;

  const result = await User.create({
    username,
    email,
    password,
    name,
  });
  res.status(201).json({
    ok: true,
    data: result,
  });
};
