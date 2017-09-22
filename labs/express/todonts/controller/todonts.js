const express = require('express');
const router = express.Router();
const data = require('../data.js');

/* INDEX TODONTS */
router.get('/', (req,res) => {
    console.log(data);
    res.render('todonts/index', {
      todonts: data.seededToDonts
    });
  });

















module.exports = router;
