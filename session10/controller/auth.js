const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

exports.handleRegister = async (req, res) => {
  const { username, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hashSync(password, salt);

  const result = await User.create({
    username,
    email,
    password: hashPassword,
    isAdmin: false,
  });

  res.json({
    ok: true,
    data: result,
  });
};

exports.handleLogin = async (req, res) => {
  const { user_identity: userIdentity, password } = req.body;

  // check user existence
  const user = await User.findOne({
    where: {
      [Op.or]: [{ username: userIdentity }, { email: userIdentity }],
    },
  });

  if (!user) {
    res.status(401).json({
      ok: false,
      message: "username/password salah",
    });
    return;
  }

  // check password match
  const isValid = await bcrypt.compare(password, user.password);
  if (isValid) {
    res.status(401).json({
      ok: false,
      message: "username/password salah",
    });
    return;
  }
  res.json({
    ok: true,
    data: user,
  });
};
