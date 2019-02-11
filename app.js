var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./components/home/router');
var usersRouter = require('./components/users/router');

var app = express();

// view engine setup
// this option is for res.render() in .js
app.set('views', path.join(__dirname, 'components'));
// this option is for 'extends' in .jade
app.locals.basedir = path.join(__dirname, 'components');
app.set('view engine', 'jade');

// don't let log output to be mixed with tests output
if (! process.env.TEST) app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error/error');
});

module.exports = app;
