module.exports = (sequelize, DataTypes) => {
    const team = sequelize.define("teams", {
        team_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        team_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        team_wins: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        team_ties: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        team_losses:{
            type:  DataTypes.INTEGER,
            allowNull: false,
        },
        weeks_above_median: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        standing: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        standing_vs_median: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        }, 
        points_for: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        points_against: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        team_owner: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logo_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false
    });

    return team
}