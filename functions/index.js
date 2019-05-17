const functions = require('firebase-functions');
//include library expressjs setelah install di folder functions : npm i --save firebase-functions
const express = require('express');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.database();
const app = express();



//set template engine ke ejs setelah install di folder functions : npm install ejs -save
app.set('view engine', 'ejs');
//set folder static ke public untuk menyimpan file statis
app.use('/public',express.static(__dirname + '/public'));



let footer;

app.get('/', function(req,res) {
    //render file ejs dari direktori functions/views
    db.ref("footer").once("value").then(function(snapshot) {
        footer = snapshot.val();
    });

    res.render("index", {page : 'Home', footer: footer});
});

app.get('/work', function(req,res) {
    //render file ejs dari direktori functions/views
    db.ref("footer").once("value").then(function(snapshot) {
        footer = snapshot.val();
    });

    res.render("work", {page:'Work', footer : footer});
});

let about;
app.get('/about', function(req,res) {
   
    //render file ejs dari direktori functions/views
    db.ref("about").once("value").then(function(snapshot) {
        about = snapshot.val();
        
    });
    db.ref("footer").once("value").then(function(snapshot) {
        footer = snapshot.val();
    });

    res.render("about", {page:'About',footer : footer, about : about});
   
   
    
});

app.get('/workdetail', function(req,res) {
    //render file ejs dari direktori functions/views
    db.ref("footer").once("value").then(function(snapshot) {
        footer = snapshot.val();
    });

    res.render("workdetail", {page : 'Workdetail', footer : footer});
});

app.get('/funwork', function(req,res) {
    //render file ejs dari direktori functions/views
    db.ref("footer").once("value").then(function(snapshot) {
        footer = snapshot.val();
    });

    res.render("funwork", {page:'Funwork', footer: footer});
});

let contact;
app.get('/contact', function(req,res) {
    //render file ejs dari direktori functions/views
    db.ref("contact").once("value").then(function(snapshot) {
        contact = snapshot.val();
        
    });
    db.ref("footer").once("value").then(function(snapshot) {
        footer = snapshot.val();
    });

    res.render("contact", {page:'Contact', footer:footer, contact:contact});
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

app.get('/admin_edit_team', function(req,res) {
    //render file ejs dari direktori functions/views
    res.render("admin_edit_team");
});


exports.apps = functions.https.onRequest(app);

exports.newProfile = functions.auth.user().onCreate((user) => {

    return admin.database().ref("/users/" + user.uid).set({
      email : user.email,
      role : 'anonymous'
    });
  
  });