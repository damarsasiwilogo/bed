const { read, write } = require("./db");

function getAll() {
  const { expenses } = read();
  return expenses; // return all the data in an array of objects.
}

function getById(id) {
  const { expenses } = read();
  const index = expenses.findIndex((expense) => expense.id === Number(id));
  if (id < 0) {
    return null;
  }
  return expenses[index];
}

function genereateNewID() {
  const datas = getAll();
  if (datas.length === 0) return 1;
  const lastID = Math.max(...datas.map((d) => d.id));
  return lastID + 1;
}

function create(newExpense) {
  const data = { id: genereateNewID(), ...newExpense, createdAt: new Date() };
  const allData = read();
  allData.expenses.push(data);
  write(allData);
  return data;
}

exports.getAll = getAll;
exports.create = create;
exports.getByID = getByID;
