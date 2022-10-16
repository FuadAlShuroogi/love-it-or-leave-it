const express = require('express'),
router = express.Router();

router.get('/movies', (req, res) => {
    res.render('movies', {worstMovies: ['Son of the Mask', 'Manos', 'House of the Dead']})
  });
  
  router.get('/products', (req, res) => {
    res.render('products', {worstProducts: ['Crystal Pepsi', 'The Zune',]})
  });

  module.exports = router;