const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const { Account, Profile } = require("");

exports.handleRegister = async (req, res) => {
  const { username, email, phoneNumber, password, firstName, lastName } = req.body;
  try {
    const result = await Account.create({
      username,
      password,
      email,
      AccountId,
    });

    res.json({
      ok: true,
      data: {
        username: result.username,
        email: result.email,
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
    const account = await Account.findByPK(accountId);
    if (!account) {
      res.status(400).json({
        ok: false,
        message: "Account not found",
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

    const profile = account.getProfile();

    if (bio) {
      profile.bio = bio;
    }

    await profile.save();
    
  } catch {}
};
