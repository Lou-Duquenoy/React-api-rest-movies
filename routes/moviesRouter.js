const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get('/', (req, res) => {
    sequelize.models.movie.findAll()
        .then(movies => res.json(movies))
})


router.get('/:movieId',(req,res) => {
    sequelize.models.movie.findByPk(req.params.movieId)
        .then(movie => res.json(movie))
})

router.post('/', (req, res ) => {
    sequelize.models.movie.create(req.body)
        .then(movieCreated => {
            res.status(201).json(movieCreated);
        })
})

router.patch('/:movieId', (req, res) => {
    sequelize.models.movie.update(req.body,
        {where: {id : req.params.movieId} })
        .then(nbRowsUpdated => {
            res.json(nbRowsUpdated);
        })
})

router.delete("/:movieId", (req, res) => {
    sequelize.models.movie
        .destroy({
            where: {
                id: req.params.movieId,
            },
        })
        .then(res.json({ msg: "le film a été supprimé" }));
});


module.exports =  router;
