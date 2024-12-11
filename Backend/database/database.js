const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/nviri.db");
const dbPath = path.resolve("./data/nviri.db");
console.log("Database path:", dbPath);

db.serialize(() => {
  console.log("Database connected.");
});

module.exports = db;
