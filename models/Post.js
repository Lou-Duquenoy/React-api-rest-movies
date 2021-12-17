function Post(sequelize, DataTypes) {
    return sequelize.define('post', {
        title: {
            // Sequelize.STRING -> MAX 255 caractères
            type: DataTypes.STRING(200),

            // Je veux que ce champ soit requis
            // Tu peux pas avoir un post sans titre
            allowNull: false
        },
        body: {
            // NO LIMIT!
            type:DataTypes.TEXT
        }
    })
}

module.exports = Post;