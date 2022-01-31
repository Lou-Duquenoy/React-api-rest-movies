const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get('/', (req, res) => {
    sequelize.models.critic.findAll()
        .then(critics => res.json(critics))
})

router.get('/:criticId',(req,res) => {
    sequelize.models.critic.findByPk(req.params.criticId)
        .then(critic => res.json(critic))
})
router.post('/', (req, res ) => {
    sequelize.models.critic.create(req.body)
        .then(criticCreated => {
            res.status(201).json(criticCreated);
        })
})
router.post('/movie/:movieId', (req, res ) => {
        sequelize.models.critic.create(req.body)
            .then(criticCreated => {
                sequelize.models.movie_critic.create({
                    movieId: req.params.movieId,
                    criticId: criticCreated.id
                })
                res.status(201).json(criticCreated);
            })
})

router.patch('/:movieId', (req, res) => {
    sequelize.models.critic.update(req.body,
            {where: {id : req.params.criticid} })
            .then(nbRowsUpdated => {
                res.json(nbRowsUpdated);
            })
})

router.delete("/:criticId", (req, res) => {
    sequelize.models.critic
        .destroy({
            where: {
                id: req.params.criticId,
            },
        })
        .then(res.json({ msg: "l'avis a été supprimé" }));
});

module.exports =  router;
