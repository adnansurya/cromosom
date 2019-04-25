const functions = require('firebase-functions');
//include library expressjs setelah install di folder functions : npm i --save firebase-functions
const express = require('express');
const app = express();

//set template engine ke ejs setelah install di folder functions : npm install ejs -save
app.set('view engine', 'ejs');
//set folder static ke public untuk menyimpan file statis
app.use('/public',express.static(__dirname + '/public'));

app.get('/', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("index", {page : 'Home'});
});

app.get('/work', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("work", {page:'Work'});
});

app.get('/about', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("about", {page:'About'});
});

app.get('/workdetail', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("workdetail", {page : 'Workdetail'});
});

app.get('/funwork', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("funwork", {page:'Funwork'});
});

app.get('/contact', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("contact", {page:'Contact'});
});

app.get('/login', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("login");
});

app.get('/admin', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("admin_index");
});

app.get('/admin_edit_footer', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("admin_edit_footer");
});

app.get('/admin_edit_about', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("admin_edit_about");
});
app.get('/admin_edit_contact', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("admin_edit_contact");
});


exports.apps = functions.https.onRequest(app);

exports.newProfile = functions.auth.user().onCreate((user) => {

    return admin.database().ref("/users/" + user.uid).set({
      email : user.email,
      role : 'anonymous'
    });
  
  });