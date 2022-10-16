const { render } = require('ejs');

const express = require('express'),
app = express(),
expressLayouts = require('express-ejs-layouts'),
port = 3000

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/animals', (req, res) => {
  res.render('animals', {animals: ['sand crab', 'corny joke dog']})
});

app.listen(port, () => {
  console.log(`Hello Bahrain ! , listening you on port .. ${port}`)
})