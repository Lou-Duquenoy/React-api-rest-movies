function User(sequelize, DataTypes) {
    return sequelize.define('user',{
    firstname: {
        type: DataTypes.STRING(50)
    },
    lastname: {
        type: DataTypes.STRING(50)
    },
})
}
module.exports = User;