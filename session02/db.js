import fs from "fs";

//add new users
export function getUserData() {
  const db = fs.readFileSync("./db.json");
  const json = String(db);
  const obj = JSON.parse(json);
  return obj.users;
}

export function createNewUsers(newUser) {
  const db = fs.readFileSync("./db.json");
  const json = String(db);
  const obj = JSON.parse(json);
  obj.users.push(newUser);
  fs.writeFileSync("./db.json", JSON.stringify(obj));
}
