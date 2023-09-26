const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // hostname
  service: "gmail",
  auth: {
    user: "dummybro06@gmail.com",
    pass: "wogt gxiz slzr vnkw",
  },
});

module.exports = transporter;
