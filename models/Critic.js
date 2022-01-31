function Critic(sequelize, DataTypes) {
    return sequelize.define('critic', {
        pseudo: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        nb_stars: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
    })
}

module.exports = Critic;
