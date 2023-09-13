// import fs from "fs";
const fs = require("fs");

function getUserData() {
  const db = fs.readFileSync("./db.json");
  const json = String(db);
  const obj = JSON.parse(json);
  return obj.users;
}

exports.getUserData = getUserData;

function createNewUsers(newUser) {
  const db = fs.readFileSync("./db.json");
  const json = String(db);
  const obj = JSON.parse(json);
  obj.users.push(newUser);
  fs.writeFileSync("./db.json", JSON.stringify(obj));
}

exports.createNewUsers = createNewUsers;
