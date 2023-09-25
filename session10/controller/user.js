const { User } = require("../models");

exports.handleGetAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({
      ok: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: String(error),
    });
  }
};
