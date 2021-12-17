function Tag(sequelize, DataTypes) {
    return sequelize.define('tag',{
    name: {
        type: DataTypes.STRING(20)
    }
    })
}
module.exports = Tag;