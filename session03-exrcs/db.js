// import fs from "fs";
const fs = require("fs");

const jsonPath = __dirname + "/db.json";

exports.read = () => {
  const buffer = fs.readFileSync(jsonPath);
  const json = JSON.parse(String(buffer));
  return json;
};

exports.write = () => {
  const raw = JSON.stringify(data, 0, 2);
  fs.writeFileSync(jsonPath, raw);
};
