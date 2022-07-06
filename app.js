const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require("body-parser");

// routes
const users = require("./routes/api/users");
const madlibs = require("./routes/api/madlibs")

// models
const User = require("./models/User");
const Madlib = require("./models/Madlib")


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
const passport = require('passport');
app.use(passport.initialize());
require('./config/passport')(passport);
  
app.get("/", (req, res) => {
  res.send("Welcome to MadLibs Against Humanity!");
});

app.use("/api/users", users);
app.use("/api/madlibs", madlibs);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
