const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const urlencoded = require('express')
const app = express()
const port = process.env.PORT || 3000
const route = require('./routes');
const db= require('./config/db')
const methodOverride = require('method-override')


//connect to db
db.connect();

//http logger
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
  extended : true
}));
app.use(express.json());

app.use(methodOverride('_method'))

//Template engine
app.engine('hbs',handlebars({
  extname : '.hbs',
  helpers:{
      sum : (a,b) => a + b,
  }
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'resources','views'));


route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})