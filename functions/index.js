const functions = require('firebase-functions');
//include library expressjs setelah install di folder functions : npm i --save firebase-functions
const express = require('express');
const app = express();

//set template engine ke ejs setelah install di folder functions : npm install ejs -save
app.set('view engine', 'ejs');
//set folder static ke public untuk menyimpan file statis
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("index");
});

app.get('/work', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("work", {page:'work'});
});

app.get('/about', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("about", {page:'about'});
});

app.get('/workdetail', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("workdetail");
});

app.get('/funwork', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("funwork", {page:'funwork'});
});

app.get('/contact', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("contact", {page:'contact'});
});


exports.apps = functions.https.onRequest(app);
