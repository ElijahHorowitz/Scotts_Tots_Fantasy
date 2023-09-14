const express = require("express");
const router = express.Router();
const { scoreboard } = require("../models");
const {sequelize} = require("../models");

//all rountes have /scoreboardRouter

router.get("/selectWeek/:scoreboardWeek", async (req, res) => {
    const scoreboardWeek = req.params.scoreboardWeek;
    const scoresForWeek = await scoreboard.findAll({where: {week: scoreboardWeek} });
    
    res.json(scoresForWeek);
});

router.get("/currentWeek/availableWeeks", async (req, res) => {
    const scoreBoardWeek = await scoreboard.findAll({
        attributes: [
            [sequelize.fn('DISTINCT', sequelize.col('week')), 'week']
        ]
    });
    res.send(scoreBoardWeek);
})

router.get("/currentWeek/max", async (req, res) => {
    const scoreboardMax = await scoreboard.findAll({
        attributes: [
            [sequelize.fn('MAX', sequelize.col('week')), 'week' ]
        ]
    });
    res.send(scoreboardMax[0]);
    
})


module.exports = router;