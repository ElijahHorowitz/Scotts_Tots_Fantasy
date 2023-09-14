module.exports = (sequelize, DataTypes) => {
    const scoreboard = sequelize.define("scoreboard", {
        matchup_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        home_team: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        home_score: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        away_team: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        away_score: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        week: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false
    });
    
    return scoreboard
}