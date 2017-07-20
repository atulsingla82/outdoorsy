// root-level
// Include Server Dependencies
const express = require("express");
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Create Instance of Express
const app = express();

// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 8080;


//bring in the models
const User = require('./models/User');
const Adventure = require('./models/Adventure')

// Connect to Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/outdoorsy")
const db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Run Morgan for Logging
app.use(logger("dev"));
// cookie-parser for passport secret
app.use(cookieParser()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // => T to F
//express + passport
app.use(require('express-session')({
  secret: '****',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("./public")); 
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// config passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404
  next(err);
});




// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
