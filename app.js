var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("./middelware/cors");


var routeFormulaire = require("./routes/formulaire")


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors.handle);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/formulaire', routeFormulaire)

// app.get('/', (req, res) => {
//     res.send("C'est bien en ligne")
// })

module.exports = app;
