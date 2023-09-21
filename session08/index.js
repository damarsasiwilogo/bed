const express = require("express");
const PORT = 8000;

const userRouter = require("./router/user");

const app = express();

app.get("/", (req, res) => {
  res.send("session08 API");
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`API start on port: ${PORT}`);
});
