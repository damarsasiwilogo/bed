require("dotenv").config({
  path: __dirname + "/.env",
});
const express = require("express");
const morgan = require("morgan");
const PORT = 8000;

const app = express();
app.use(express.json());
app.use(morgan("combined"));

const authRouter = require("./routes/auth");
const dogsRouter = require("./routes/dogs");
// routes
app.use("/dogs", dogsRouter);
app.use("/auth", authRouter);

// static file serving
app.use("/public", express.static(__dirname + "/public"));

// 404 middleware
app.use((req, res) => {
  console.error(`Not Found ${req.path}`);
  res.status(404).json({
    ok: false,
    message: "404 Not Found",
  });
});

// middleware fatal error
app.use((err, req, res, next) => {
  console.error(`Fatal Error ${req.path}`);
  console.error(err);

  res.status(500).json({
    ok: false,
    message: "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
