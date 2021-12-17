function Task(sequelize, DataTypes) {
    return sequelize.define('task',{
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})
}
module.exports = Task;