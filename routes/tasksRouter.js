const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get('/', (req, res) => {
    // Récupérer tous les utilisateurs dans ma BDD
    sequelize.models.task.findAll()
    .then(tasks => res.json(tasks))
})

router.get('/:taskId',(req,res) => {
    sequelize.models.task.destroy({
        where: {id: req.params.taskId}
    })
    .then(() => res.json({msg: "Tache supprimée!"}))
})

router.delete('/:taskId',(req,res) => {
    sequelize.models.task.findByPk(req.params.taskId)
    .then(task => res.json(task))
})

module.exports =  router;