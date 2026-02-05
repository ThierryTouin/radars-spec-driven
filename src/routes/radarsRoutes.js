const express = require("express");
const { getRadars } = require("../controllers/radarsController");

const router = express.Router();

// Route for GET /radars
router.get("/radars", getRadars);

module.exports = router;