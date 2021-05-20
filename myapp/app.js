var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql= require('mysql')
var config=require('./config/config.json');

//connection db
var connection = mysql.createConnection({
    host:`${config.host}`,
    user:`${config.user}`,
    password:`${config.password}`,
    database:`${config.database}`

})

connection.connect();
//get data from db
connection.query("select * from test",function(err,results){
  if(err){
    throw err;
  }
  console.log(results)
})

connection.end();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//
var apiController = require('./controller/apiController')
var homeController = require('./controller/homeController');
const { connect } = require('http2');
//

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//
app.use('/api',apiController)
app.use('/login',homeController)
//

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//
//apiController(app);
//homeController(app);
//


module.exports = app;
