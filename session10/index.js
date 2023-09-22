const express = require("express");
const PORT = 8080;

const app = express();
app.use(express.json());

const authRouter = require("./routes/auth");
// register routing
app.get("/", (req, res) => {
  res.send("Belajar Auth & Rest API");
});
app.use("/auth", authRouter);

// 404 middleware
app.use((req, res) => {
  console.log(`404: ${req.path}`);
  res.status(404).send({
    ok: false,
    message: "Route not found",
  });
});

// error handler middleware
app.use((err, req, res, next) => {
  console.error(`Fatal Error: ${String(error)}`);
  res.status(500).send({
    ok: false,
    message: "Fatal Error",
    error,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
