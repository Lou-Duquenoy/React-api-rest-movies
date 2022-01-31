const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get('/', (req, res) => {
    sequelize.models.user.findAll()
        .then(users => res.json(users))
})

router.get('/:userId',(req,res) => {
    sequelize.models.user.findByPk(req.params.userId)
        .then(user => res.json(user))
})

router.post('/', (req, res ) => {
    sequelize.models.user.create(req.body)
        .then(userCreated => {
            res.status(201).json(userCreated);
        })
})

router.post('/movie/:movieId', (req, res) => {
    sequelize.models.user.create(req.body)
        .then(userCreated => {
            sequelize.models.movie_user.create({
                movieId: req.params.movieId,
                userId: userCreated.id
            })
            res.status(201).json(userCreated);
        })
})

router.patch('/:userId', (req, res) => {
    sequelize.models.movie.update(req.body,
        {where: {id : req.params.userId} })
        .then(nbRowsUpdated => {
            res.json(nbRowsUpdated);
        })
})

router.delete("/:userId", (req, res) => {
    sequelize.models.user
        .destroy({
            where: {
                id: req.params.userId,
            },
        })
        .then(res.json({ msg: "l'acteur a été supprimé" }));
});

module.exports =  router;
