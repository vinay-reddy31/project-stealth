const express = require("express");

const {
  getallLocations,
  getApplianceTypes,
  getFeaturedTechnicians,
  userLogin,
  technicianLogin,
} = require("../controllers/controllers");

const router = express.Router();

router.get("/locations", getallLocations);

router.get("/applianceTypes", getApplianceTypes);

// Route for getting featured technicians
router.get("/featured-technicians", getFeaturedTechnicians);

// User login route
router.post("/login/user", userLogin);

// Technician login route
router.post("/login/technician", technicianLogin);

module.exports = router;
