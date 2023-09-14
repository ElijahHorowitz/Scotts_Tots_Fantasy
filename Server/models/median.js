module.exports = (sequelize, DataTypes) => {
    const median = sequelize.define("median", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        Week: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Year: {
            type: DataTypes.INTEGER
        },
        Median: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    },
    {
        timestamps: false
    });
    
    return median
}