/* PACKAGES */
const express = require('express');
const router = express.Router();
const recipes = require('./recipes.js');
//const data = require("../data.js");
const hbs = require('hbs');
const app = express();

const PORT = process.env.PORT || 3000;
/* VIEWS */
app.set('view engine', 'hbs');

app.get('/recipes', (req,res) =>{
    console.log(req.params);
    res.send(recipes);
})
// Start Server
app.listen(PORT, function() {
    console.info('Server Up -- Ready to serve hot todos on port', PORT,"//", new Date());
  });