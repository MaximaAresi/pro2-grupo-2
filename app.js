var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require('express-session');
const db = require('./database/models');


/* REQUERIR ROUTERS */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* CONFIGURACIONES */

app.use(session({
  secret: "Mix and Match",
  resave: false,
  saveUninitialized: true
}));

/* SESSION --> LOCALS */

app.use(function (req, res, next) {
  if (req.session.user != undefined) {
    // res.locals.user = req.session.user;
    return res.redirect("/") // si encuentra el usuario, que lo redirija a home
  } else {
    return next();
  }
  
}
);

app.use(function (req, res, next) {

  if (req.cookies.userId != undefined && req.session.user == undefined) {
    let userId = req.cookies.userId; // 

    db.User.findByPk(userId)
      .then((result) => {
        req.session.user = result;
        res.locals.user = result;
        return next();
      }).catch((err) => {
        return console.log(err);
      });
    /* buscar el id en la db */
  } else {
    return next();
  }

  // .catch después del .then? o solo el next()?
})

////////////

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
