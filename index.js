const { render } = require('ejs');

const express = require('express'),
app = express(),
expressLayouts = require('express-ejs-layouts'),
port = 3000

app.set('view engine', 'ejs');
app.use(expressLayouts);

//controllers
app.use('/Fav', require('./controllers/fav'));
app.use('/Worst', require('./controllers/worst'));


app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Hello Bahrain ! , listening you on port .. ${port}`)
})