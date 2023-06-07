const path = require('path')
const express = require("express");
const morgan = require('morgan')
const {engine} =  require('express-handlebars');
const app = express();
const port = 3000;


//confict static
app.use(express.static(path.join(__dirname,"public")))

//HTTP Logger
app.use(morgan('combined'))

// add middleware for body
app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())

//Template engine
app.engine('hbs', engine({
  extname:'hbs'
}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname,'resource/views'));

app.get('/', (req, res) => {
  res.render('home')
});
app.get('/news', (req, res) => {
  res.render('news')
});
app.get('/search', (req, res) => {
  res.render('search')
});
app.post('/search', (req, res) => {
  console.log(req.body)
  res.render('search')
});
// console.log('PATH',path.join(__dirname,'resource','views'))
app.listen(port);







