var express = require("express");
// var bodyParser = require("body-parser");
//var router = express.Router();

var app = express();

// grabbing our models
var db = require("./models");

// post route to create users
app.post("/createUser", function(req, res) {
  console.log(req.body)

  db.User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email_address: req.body.email_address,
    password: req.body.password
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("New user created");
    }
  });

});

