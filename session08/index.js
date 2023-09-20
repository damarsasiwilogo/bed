const { User } = require("./models");
const { Op } = require("sequelize");

async function create() {
  const result = await User.create({
    username: "jaka",
    email: "jaka@mail.com",
    password: "gembung123!",
    name: "Jaka Tarub",
  });
  console.log(result.get({ plain: true }));
}

async function getAll() {
  const result = await User.findAll({
    attributes: {
      exclude: ["password"],
    },
    where: {
      username: {
        [Op.like]: "%a%",
      },
    },
    raw: true,
  });
  console.log(result);
  return;
}

async function update() {
  const user = await User.findOne({
    where: {
      username: "jaka",
    },
  });
  user.name = "Ajak Rutab";
  await user.save();
  console.log(user);
  return;
}

async function deleteData() {
  const result = await User.destroy({
    where: {
      id: 2,
    },
  });
  console.log(result);
  return;
}

// *relationship
async function getUserWithProduct() {
  const user = await User.findOne({
    where: { id: 1 },
    included: true,
  });
  console.log(user.get({ plain: true }));
}

getUserWithProduct();
