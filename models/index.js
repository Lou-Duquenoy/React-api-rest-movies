// On a récupéré ce qu'il faut pour initialiser la BDD
const { DataTypes, Sequelize } = require('sequelize');

let sequelize=null;
// Si une propriété (générée automatiquement par Heroku)
// n'existe pas, c'est que je suis en local
// et donc j'aurai besoin d'importer et configurer dotenv
if(!process.env.NODE_ENV || process.env.NODE_ENV !== "production") {
    const dotenv = require('dotenv');
    dotenv.config();
    sequelize = new Sequelize(process.env.DATABASE_URL);
}
else {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
}
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