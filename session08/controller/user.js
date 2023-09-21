const { User } = require("../models");

exports.handleGetUser = async (req, res) => {
  const users = await User.findAll();

  res.json(users);
};
