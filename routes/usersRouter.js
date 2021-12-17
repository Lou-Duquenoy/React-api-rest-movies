const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get('/', (req, res) => {
    // Récupérer tous les utilisateurs dans ma BDD
    sequelize.models.user.findAll()
    .then(users => res.json(users))
})

router.get('/:userId',(req,res) => {
    // userId peut être récupéré en faisant un req.params.id
    sequelize.models.user.findByPk(req.params.userId)
    .then(user => res.json(user))
})

module.exports =  router;