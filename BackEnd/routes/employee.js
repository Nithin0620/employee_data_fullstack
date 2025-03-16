// const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const createDB = require("../controllers/createDB");
const deleteDB = require("../controllers/deleteDB");
const getDB = require("../controllers/getDB");


router.get("/",getDB);
router.post("/createdb",createDB);
router.delete("/deletedb",deleteDB);

module.exports = router;