// PACKAGES//
const path = require('path');
//var logger = require('morgan');
const express = require('express');
const router = express.Router();
const hbs = require('hbs');
const bodyParser = require('body-parser');
//

//APP SETTINGS
const app = express();
const PORT = process.env.PORT || 3000;
const toDontsController = require('./controller/todonts.js')

//OVERRIDE//
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

//app.use( logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));
//VIEWS//
app.set('view engine', 'hbs');

//app.search('view engine', 'hbs');

//CONTROLLERS/
app.use('/todonts', toDontsController);

//HOME

app.get('/', (req, res) => {
    res.send('Welcome home');
})



//START SERVER//
app.listen(PORT, () => {
    console.info('server is my bish', PORT, '//', new Date());
})