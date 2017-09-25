//requirements//
const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates.js');

//all routes for pirat */

/*INDEX*/

router.get('/', (req, res) => {
    res.render('pirates/index', {
        pirates: data
    });
})
/* new */
router.get('/new', (req, res ) => {
    let newPirate = req.body;
    data.push(newPirate);
    res.redirect('/pirates');
    //router.post();
})

/*ShOw*/
router.get('/:id', (req, res) => {
    let id = req.params.id;
    const pirates = data[id]
    if(!pirates){
        res.render('pirates/show',{
            error: "Wrong WAY!"
        })
    } else {
        res.render('pirates/show', {
            pirates: pirates
        })
    }
    //router. post();
})

/* create */
router.post('/new', (req, res) => {
    res.render('/pirates/new')
})


/* exports */
module.exports = router;