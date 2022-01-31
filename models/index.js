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

// en local DATABASE_URL vaut ça -> sqlite:datas.db
// en prod DATABASE_URL va valoir qqchose du style pgsql://

// On est en train de récupérer nos modèles pour établir le schéma

const Critic = require('./Critic')(sequelize, DataTypes);
const User = require('./User')(sequelize, DataTypes);
const Movie = require('./Movie')(sequelize, DataTypes);

// Un article peut être écrit par une seule personne

Critic.belongsToMany(Movie, {through: 'movie_critic'});
Movie.belongsToMany(Critic, {through: 'movie_critic'});
Movie.belongsToMany(User, {through: 'movie_user'})
User.belongsToMany(Movie, {through: 'movie_user'});


// Faire en sorte que la tâche peut avoir plusieurs tags
// et un tag être dans plusieurs tâches
/*  */

module.exports = sequelize;