const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");

// routes
const users = require("./routes/api/users");
const madlibs = require("./routes/api/madlibs")

// models
const User = require("./models/User");
const Madlib = require("./models/Madlib")

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.use(cors());
  
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  })
}

app.use(passport.initialize());
require("./config/passport")(passport);


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"));

// CORS
app.use(cors());
  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("React Broke!");
});


app.use("/api/users", users);
app.use("/api/madlibs", madlibs);


const port = process.env.PORT || 5001;
app.listen(port);

