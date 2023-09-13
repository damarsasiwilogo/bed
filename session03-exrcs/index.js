// import express from "express";
const express = require("express");

const { createNewUsers, getUserData } = require("./db");

const PORT = 8000;

const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
  const users = getUserData();
  res.json(users);
});

app.post("/users", (req, res) => {
  const { nama, job } = req.body;
  createNewUsers({ nama, job });
  res.status(201).json({ nama, job });
});

// middleware
app.use((req, res, next) => {
  res.status(404).send("Not found bro!");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something is wrong!");
});

app.listen(PORT, () => {
  console.log(`server is running on localhost ${PORT}`);
});
