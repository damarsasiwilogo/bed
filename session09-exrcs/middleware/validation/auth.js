const { body, validationResult } = require("express-validator");

exports.registerValidationRules = [
  body("username").isLength({ min: 5, max: 20 }).withMessage("Value minimum 5 characters and maximum 20 characters"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("phoneNumber").isMobilePhone("id-ID").withMessage("Invalid phone number format"),
  body("password")
    .notEmpty()
    .isStrongPassword({
      minSymbols: 0,
      minNumbers: 0,
    })
    .withMessage("Password must contain Uppercase and Lowercase characters"),
  body("firstName")
    .optional()
    .isLength({
      max: 20,
    })
    .withMessage("Value maximum 20 characters"),
  body("lastName")
    .optional()
    .isLength({
      max: 20,
    })
    .withMessage("Value maximum 20 characters"),
];

exports.applyRegisterValidation = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    // ini validasi gagal
    res.status(400).json({
      ok: false,
      message: "failed data validation",
      errors: result.errors,
    });
    return;
  }

  next();
};
