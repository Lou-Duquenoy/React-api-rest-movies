function Movie(sequelize, DataTypes) {
    return sequelize.define('movie', {
        titre: {
            type: DataTypes.STRING(200),
            /* allowNull: false */
        },
        synopsis: {
            type:DataTypes.TEXT
        },
        realisateur: {
            type: DataTypes.STRING(200),
            /* allowNull: false */
        }
    })
}

module.exports = Movie;
