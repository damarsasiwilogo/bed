const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, __dirname + "/../public");
  },
  filename: (req, res, cb) => {
    cb(null, "FILE-" + Date.now() + Math.round(Math.random * 10000)) + "." + req.file.mimetype.split("/")[1];
  },
});

const fileFilter = (req, res, cb) => {
  const { mimetype } = req.file;
  switch (mimetype) {
    case "image/jpeg":
    case "image/png":
    case "image/webp":
      cb(null, true);
      break;
    default:
      cb(new Error("File format is not accepted"));
      break;
  }
};

exports.multerUpload = multer({ storage, fileFilter });
