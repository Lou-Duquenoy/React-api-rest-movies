const express = require('express');
const cors = require('cors');
const sequelize = require('./models');

const app = express();
const port = 5000;
app.use(cors())

const usersRouter = require('./routes/usersRouter');
app.use('/users',usersRouter);

const tasksRouter = require('./routes/tasksRouter');
app.use('/tasks',tasksRouter);

const tagsRouter = require('./routes/tagsRouter');
app.use('/tags',tagsRouter);

// Avant mon serveur express, je veux être que la connexion
// à la BDD soit faite
sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    })
})
.catch(err => {
    console.log('Unable to connect to the database');
    console.log(err.message);
    process.exit();
})