var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');
const mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const leaderRouter = require('./routes/leaderRouter');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');

const Dishes = require('./models/dishes');

var app = express();


const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';


const connect = mongoose.connect(path.resolve(utl, dbname));

connect.then((db) => {
    console.log('we connected to server');

    let newDish = Dishes({
        name: 'first dish',
        description: 'test'
    });
    newDish.save()
        .then((dish) => {
            console.log(dish);
            Dishes.findByIdAndUpdate(dish._id, {
                $set: {description: 'Updated test'}, new: true
            }).exec();
        })
        .then((dishes) => {
            console.log(dishes);

            dish.comments.push({
                rating: 5,
                comment: 'test comment',
                author: 'test author'
            });

            return dish.save();
        })
        .then((dish) => {
            console.log(dish);
            return Dish.remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err.message);
        })
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
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

module.exports = app;
