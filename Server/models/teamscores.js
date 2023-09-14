module.exports = (sequelize, DataTypes) => {
    const teamscores = sequelize.define("teamscores", {
        score_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        team_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        week: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        team_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'teams',
                key: 'team_id'
            }
        },
        score: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    },
    {
        timestamps: false
    });
    
    return teamscores
}