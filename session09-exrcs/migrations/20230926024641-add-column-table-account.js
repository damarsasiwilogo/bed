"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Accounts", "phoneNumber", {
      type: Sequelize.STRING,
      after: "email",
      allowNull: false,
      defaultValue: "",
    });
    await queryInterface.addColumn("Accounts", "isVerified", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      after: "password",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Accounts", "phoneNumber");
    await queryInterface.removeColumn("Accounts", "isVerified");
  },
};
