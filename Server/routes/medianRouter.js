const express = require("express");
const router = express.Router();
const { median } = require("../models");
const {sequelize} = require("../models");
//all rountes have /scoreboardRouter

router.get("/:week", async(req, res) => {
    const currWeek = req.params.week;
    const medians = await median.findAll({where: {week: currWeek} });
    res.json(medians);
});

module.exports = router;