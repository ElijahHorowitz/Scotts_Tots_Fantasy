const express = require("express");
const router = express.Router();
const { teams } = require("../models");
const {sequelize} = require("../models");
const { QueryTypes } = require('sequelize');

//all rountes have /standingRouter

router.get("/trueStanding", async (req,res) => {
    const standings = await 
        sequelize.query(
            'SELECT team_name, team_wins, team_losses, weeks_above_median, standing, standing_vs_median, points_for, points_against, team_owner FROM teams ORDER BY standing',
            {
                model: teams,
                type: QueryTypes.SELECT
            });

    res.json(standings);
});

router.get("/standingByMedian", async (req,res) => {
    const standingsByMedian = await 
        sequelize.query(
            'SELECT team_name, team_wins, team_losses, weeks_above_median, standing, standing_vs_median, points_for, points_against, team_owner FROM teams ORDER BY standing_vs_median DESC ,points_for DESC',
            {
                model: teams,
                type: QueryTypes.SELECT
            });

    res.json(standingsByMedian);
});



module.exports = router;