const express = require("express");
const router = express.Router();
const { scoreboard } = require("../models");
const {sequelize} = require("../models");


router.get("/test", async (req, res) => {
    res.json("HELLO WORLD!");
});

module.exports = router;