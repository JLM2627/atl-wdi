/* PACKAGES */
const path = require('path');
//const logger = require('morgan');
const express = require('express');
const hbs = require('hbs')
const bodyParser = require('body-parser')
const router = express.Router();

/* controllers */

const pirateController = require('./controllers/pirates.js');
const bodyParser = require('body-parser');


//const newController = require('./controllers/new.js');
//app.use("/new", newController);
/* app settings*/
var app         = express();
var PORT        = process.env.PORT || 3000;


/*views*/
app.set('view engine', 'hbs');
app.set('views','./views');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use("/pirates", pirateController);

/* home */

/* start server */

app.listen(PORT, () => {
    console.info('SERVE UP AND RUNNING @', PORT, "//", new Date());
});


// with help from Tory Redner