const db = require("../database/database");

//get all locations

const getallLocations = async (req, res) => {
  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
  ];
  res.json(locations);
};

//get appliances
const getApplianceTypes = (req, res) => {
  const searchQuery = req.query.search;

  db.all(
    "SELECT * FROM appliance_types WHERE type_name LIKE ?",
    [`%${searchQuery}%`],
    (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      } else {
        res.json(rows);
      }
    }
  );
};

//get featured technicians

const getFeaturedTechnicians = (req, res) => {
  db.all("SELECT * FROM technicians", [], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.json(rows);
    }
  });
};

//login ->post

const userLogin = (req, res) => {
  console.log("Request Body:", req.body);
  const { email, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, row) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      } else if (row) {
        res.json({ message: "Login successful", user: row });
      } else {
        res.status(400).json({ message: "Invalid email or password" });
      }
    }
  );
};

const technicianLogin = (req, res) => {
  const { email, password, businessName } = req.body;

  db.get(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, row) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      } else if (row) {
        res.json({ message: "Login successful", user: row });
      } else {
        res.status(400).json({ message: "Invalid email or password" });
      }
    }
  );
};

//register -> post  ->optional

const userRegister = (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  db.run(
    "INSERT INTO users (email, password, first_name, last_name) VALUES (?,?,?,?)",
    [email, password, firstName, lastName],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      } else {
        res.json({ message: "Registration successful" });
      }
    }
  );
};

module.exports = {
  getallLocations,
  getApplianceTypes,
  getFeaturedTechnicians,
  userLogin,
  technicianLogin,
};
