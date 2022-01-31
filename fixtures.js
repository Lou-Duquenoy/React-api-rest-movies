const sequelize = require('./models');

console.log(`On teste la connexion à la BDD`);


sequelize.authenticate()
.then(() => {
    console.log('Connexion établie!')

    // Forcer la synchronisation entre mon code et la BDD
    // Code génère la BDD
    sequelize.sync({ force: true })
    .then(() => {
        console.log('Les tables de ma BDD ont été bien générées!')

        sequelize.models.user.create({
            firstname: "Emma",
            lastname: "Watson",
        })

        sequelize.models.user.create({
            firstname: "Daniel",
            lastname: "Radcliffe",
        })

        sequelize.models.user.create({
            firstname: "Elijah",
            lastname: "Wood",
        })

        sequelize.models.user.create({
            firstname: "Sean",
            lastname: "Astin",
        })
        
        sequelize.models.user.create({
            firstname: "Harrison",
            lastname: "Ford",
        })

        sequelize.models.user.create({
            firstname: "John",
            lastname: "Boyega",
        })

        sequelize.models.movie.create({
            titre: "Seigneur des Anneaux",
            synopsis: "blablabla",
            realisateur: "Monsieur1"
        })

        sequelize.models.movie.create({
            titre: "Harry Potter",
            synopsis: "blablablblablabl",
            realisateur: "Monsieur2"
        })

        sequelize.models.movie.create({
            titre: "Star Wars",
            synopsis: "blablablblablablblablabl",
            realisateur: "Monsieur3"
        })

        
        sequelize.models.movie_user.create({
            movieId: "2",
            userId: "1",
        })
        sequelize.models.movie_user.create({
            movieId: "2",
            userId: "2",
        })

        sequelize.models.movie_user.create({
            movieId: "1",
            userId: "3",
        })
        
        sequelize.models.movie_user.create({
            movieId: "1",
            userId: "4",
        })

        sequelize.models.movie_user.create({
            movieId: "3",
            userId: "5",
        })

        sequelize.models.movie_user.create({
            movieId: "3",
            userId: "6",
        })

        sequelize.models.critic.create({
            pseudo: "User2",
            message: "mouais",
            nb_stars: 3
        })

        sequelize.models.critic.create({
            pseudo: "User3",
            message: "excellent",
            nb_stars: 5
        })
        
        sequelize.models.critic.create({
            pseudo: "User4",
            message: "nul",
            nb_stars: 1
        })

        sequelize.models.critic.create({
            pseudo: "User5",
            message: "très bon",
            nb_stars: 4
        })
        
        sequelize.models.movie_critic.create({
            movieId: "1",
            criticId: "1",
        })      
        sequelize.models.movie_critic.create({
            movieId: "1",
            criticId: "2",
        })      
        sequelize.models.movie_critic.create({
            movieId: "1",
            criticId: "3",
        }) 
        sequelize.models.movie_critic.create({
            movieId: "1",
            criticId: "4",
        })           

        sequelize.models.movie_critic.create({
            movieId: "2",
            criticId: "1",
        })       
        sequelize.models.movie_critic.create({
            movieId: "2",
            criticId: "2",
        })       

        sequelize.models.movie_critic.create({
            movieId: "2",
            criticId: "3",
        })       

        sequelize.models.movie_critic.create({
            movieId: "2",
            criticId: "4",
        })  

        sequelize.models.movie_critic.create({
            movieId: "3",
            criticId: "1",
        })

        sequelize.models.movie_critic.create({
            movieId: "3",
            criticId: "2",
        }) 

        sequelize.models.movie_critic.create({
            movieId: "3",
            criticId: "3",
        })

        sequelize.models.movie_critic.create({
            movieId: "3",
            criticId: "4",
        })      

    })
})
.catch((err) => {
    console.log(`Ma BDD plante, voici l'erreur: ${err}`)
})