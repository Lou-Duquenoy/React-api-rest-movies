// On a récupéré ce qu'il faut pour initialiser la BDD
const { DataTypes, Sequelize } = require('sequelize');

if(!process.env.NODE_ENV) {
    const dotenv = require('dotenv');
    dotenv.config();
}

const sequelize = new Sequelize(process.env.DATABASE_URL);

// On est en train de récupérer nos modèles pour établir le schéma
const Post = require('./Post')(sequelize, DataTypes);
const Task = require('./Task')(sequelize, DataTypes);
const User = require('./User')(sequelize, DataTypes);
const Tag = require('./Tag')(sequelize, DataTypes);

// Un article peut être écrit par une seule personne
Post.belongsTo(User)
// une personne peut écrire plusieurs articles
User.hasMany(Post)

// Etablir une association pour qu'un utilisateur puisse avoir plusieurs tâches
User.hasMany(Task)
// Mais qu'une tâche appartient à un seul utilisateur
Task.belongsTo(User)

// Faire en sorte que la tâche peut avoir plusieurs tags
Task.belongsToMany(Tag, {through: 'tasks_tags'})
// et un tag être dans plusieurs tâches
Tag.belongsToMany(Task, {through: 'tasks_tags'})

module.exports = sequelize;