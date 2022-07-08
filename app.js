const express = require("express");
const mongoose = require('mongoose');
const User = require("./models/User");
const Madlib = require("./models/Madlib")
const users = require("./routes/api/users");
const madlibs = require("./routes/api/madlibs")
const bodyParser = require("body-parser");
const passport = require('passport');

const app = express();


const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use("/", express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}


// Mongo DB
const db = require('./config/keys').mongoURI;
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);


// app.get("/", (req, res) => {
//   res.send("React Broke!");
// });

// Routes
app.use("/api/users", users);
app.use("/api/madlibs", madlibs);

// Server
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));


