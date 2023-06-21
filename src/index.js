const path = require('path')
const express = require("express");
const morgan = require('morgan')
const {engine} =  require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routers')
const moment = require('moment');
const methodOverride = require('method-override')


const db = require('./config/db') 

// Connect db

db.connect()


//confict static
app.use(express.static(path.join(__dirname,"public")))

//HTTP Logger
app.use(morgan('combined'))

// add middleware for body
app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())
app.use(methodOverride('_method'))
//Template engine
app.engine('hbs', engine({
  extname:'hbs',
  helpers: {
    sum:(a,b)=>{
      return a + b
    },
    formatdata:(date)=>{
      return moment(date).format('LLLL')
    }
  }
}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname,'resource','views'));


// Route init
route(app)
// console.log('PATH',path.join(__dirname,'resource','views'))
app.listen(port);







