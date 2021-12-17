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
            firstname:"test",
            lastname:"test",
            email:"test@truc.fr"
        })
        sequelize.models.user.create({
            firstname:"secondtest",
            lastname:"secondtest",
            email:"test@truc.fr"
        })
        sequelize.models.user.create({
            firstname:"thirdtest",
            lastname:"thirdtest",
            email:"test@truc.fr"
        })
        sequelize.models.task.create({
            content:"first",
            status: true,
            userId: 1
        })
        sequelize.models.task.create({
            content:"second",
            status: true,
            userId: 5
        })
        sequelize.models.task.create({
            content:"third",
            status: true,
            userId:2
        })
        sequelize.models.task.create({
            content:"four",
            status: false,
            userId:4 
        })
        sequelize.models.task.create({
            content:"five",
            status: false,
            userId:6
        })
        sequelize.models.tag.create({
            name:"attention"
        })
        sequelize.models.tag.create({
            name:"help"
        })

        sequelize.models.tag.update({firstname: "Jean"},
           {where: { id: 4 }
        })
    })
})

.catch((err) => {
    console.log(`Ma BDD plante, voici l'erreur: ${err}`)
})