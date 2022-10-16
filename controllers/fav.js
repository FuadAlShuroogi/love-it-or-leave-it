const express = require('express'),
router = express.Router();

//routes go here ..
router.get('/animals', (req, res) => {
    res.render('animals', {animals: ['Sand Crab', 'Corny Joke Dog']})
  });
  
router.get('/foods', (req, res) => {
    res.render('foods', {foods: ['Sea Food', 'Fruits', 'Vegettables']})
  });

module.exports = router;