//Load Express
const express = require('express');
const path = require('path');

//require the "database"
const statesDb = require('./data/states-db');

//Create our express app
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req,res) {
    res.redirect('/states');
});

app.get('/home', function (req, res) {
    res.render('home');
});

app.get('/states', function (req, res) {
    const states = statesDb.getAll();
    res.render('states/index', { states });
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});