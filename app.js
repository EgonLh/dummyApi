var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// ----- Route Initialization ----- //
var indexRouter = require('./routes/index');
var coursesRouter = require('./routes/courses');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ----- Router Register ----- //
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/courses', coursesRouter)

//--- Database connect ---//
// var {db} = require('./configs/database');
// mongoose.connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log("> Database connected")).catch(err => console.log(err));

var {db} = require('./configs/database');
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
      console.log(">Mongo Alts Connected")
    }).catch(err => console.log(">Mongo Error -" ,err))

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
