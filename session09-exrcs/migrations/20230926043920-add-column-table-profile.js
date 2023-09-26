"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Profiles", "profilePicture", {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "",
      after: "lastName",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Profiles", "profilePicture");
  },
};
