const express = require("express");
const PORT = 8000;

const userRouter = require("./router/user");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("session08 API");
});

app.use("/user", userRouter);

// middleware
app.use((req, res, next) => {
    res.status(404).send("Not found bro!");
  });
  
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("Something is wrong!");
  });

app.listen(PORT, () => {
  console.log(`API start on port: ${PORT}`);
});
