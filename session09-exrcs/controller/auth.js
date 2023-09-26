const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const { Account, Profile } = require("../models");

const JWT_SECRET_KEY = "ntar-pindah-ke-env";

exports.handleRegister = async (req, res) => {
  const { username, email, phoneNumber, password, firstName, lastName } =
    req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const result = await Account.create({
      username,
      password: hashPassword,
      email,
      phoneNumber,
    });

    const profile = await Profile.create({
      lastName,
      firstName,
      accountId: result.id,
    });

    res.json({
      ok: true,
      data: {
        username: result.username,
        email: result.email,
        firstName: profile.firstName,
        lastName: profile.lastName,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      ok: false,
      message: String(error),
    });
  }
};

exports.handleLogin = async (req, res) => {
  const { user_identity: userIdentity, password } = req.body;

  try {
    const account = await Account.findOne({
      where: {
        [Op.or]: {
          email: userIdentity,
          username: userIdentity,
          password: userIdentity,
        },
      },
      include: Profile,
    });

    if (!account) {
      res.status(401).json({
        ok: false,
        message: "incorrect username/password",
      });
      return;
    }

    const isValid = await bcrypt.compare(password, account.password);
    if (!isValid) {
      res.status(401).json({
        ok: false,
        message: "incorrect username/password",
      });
      return;
    }
    const payload = { id: account.id, isVerified: account.isVerified };
    const token = jwt.sign(payload, JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({
      ok: true,
      data: {
        token,
        profile: {
          email: account.email,
          username: account.username,
          phoneNumber: account.phoneNumber,
          isVerified: account.isVerified,
          firstName: account.Profile.firstName,
          lastName: account.Profile.lastName,
        },
      },
    });
  } catch (error) {
    res.status(401).json({
      ok: false,
      message: String(error),
    });
  }
};

exports.updateProfile = async (req, res) => {
  const accountId = req.user.id;
  const { bio, email, username } = req.body;
  try {
    const account = await Account.findByPk(accountId);
    if (!account) {
      res.status(400).json({
        ok: false,
        message: "account not found",
      });
      return;
    }

    if (email) {
      account.email = email;
      account.isVerified = false;
    }
    if (username) {
      account.username = username;
    }

    await account.save();

    const profile = await account.getProfile();
    if (bio) {
      profile.bio = bio;
    }
    await profile.save();

    return res.json({
      ok: true,
      data: {
        email: account.email,
        username: account.username,
        phoneNumber: account.phoneNumber,
        isVerified: account.isVerified,
        firstName: profile.firstName,
        lastName: profile.lastName,
        bio: profile.bio,
      },
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: String(error),
    });
    return;
  }
};
