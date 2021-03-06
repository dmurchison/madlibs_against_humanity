const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require("body-parser");
const path = require('path');

// routes
const users = require("./routes/api/users");
const madlibs = require("./routes/api/madlibs")

// models
const User = require("./models/User");
const Madlib = require("./models/Madlib")


mongoose
.connect(db, { useNewUrlParser: true })


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const passport = require('passport');
app.use(passport.initialize());
require('./config/passport')(passport);

if (process.env.NODE_ENV === 'production') {
  app.use("/", express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.get("/", (req, res) => {
  res.send("React Broke!");
});


app.use("/api/users", users);
app.use("/api/madlibs", madlibs);


const port = process.env.PORT || 5001;
app.listen(port);


