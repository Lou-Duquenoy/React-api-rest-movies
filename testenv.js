const dotenv = require('dotenv');
dotenv.config();

console.log("L'URL de la BDD est "+process.env.DATABASE_URL)
console.log("Je suis en mode "+ process.env.NODE_ENV)